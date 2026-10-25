# Cloudflare view counter 🐦

**Live URL:** https://cv-views.windenclientes.workers.dev
(wired into `components/data.js` → `VIEWS.api`)

One tiny Worker + D1 = real view counts with countries, unique visitors,
devices, referrers and a 14-day trend. Visitor country comes free from
Cloudflare (`request.cf.country`) — no IP API. No raw IP is stored; unique
visitors use a salted daily hash (secret `SALT` is set). Bots are filtered.

## Deployed with the `cf` CLI (Oct 2026) — Windows notes 🪟

The new `cf` CLI (v1.0.0-beta) has two rough edges on native Windows:
its build step can't spawn the wrangler/vite bundler binaries, and
multiline `--sql` args break. What worked:

```bash
npm i -g cf                      # one-time
cf auth login                    # one-time
cf d1 create --name cv-views     # note the printed uuid

# schema: single-line SQL, comments stripped (multiline args break on Windows)
SQL=$(sed 's/--.*$//' schema.sql | tr '\n' ' ' | tr -s ' ')
cf d1 query <DATABASE_UUID> --sql "$SQL"

# deploy: hand-rolled Build Output (.cloudflare/output/v0/, kept in repo)
# + deploy --prebuilt skips the broken bundler step
printf 'SALT=<random>\n' > .salt.tmp   # keep out of git
cf deploy --prebuilt --mode production --secrets-file .salt.tmp
rm .salt.tmp
```

node_modules/, dist/ and secrets files are gitignored; the checked-in
`cloudflare.config.ts` documents the intended config for `cf` builds
once its Windows bundler works. `package.json` pins the local
wrangler/vite-plugin/cf dev deps.

The classic wrangler flow still works as an alternative:
`npx wrangler d1 execute cv-views --remote --file schema.sql && npx wrangler deploy`.

## Deploy (one time, ~5 minutes)

```bash
cd portafolio/cloudflare

# 1. log in (opens your browser)
npx wrangler login

# 2. create the D1 database, then paste the printed database_id
#    into wrangler.toml
npx wrangler d1 create cv-views

# 3. create the table (on the real, remote database)
npx wrangler d1 execute cv-views --remote --file schema.sql

# 4. deploy the worker — it prints your URL, e.g.
#    https://cv-views.yourname.workers.dev
npx wrangler deploy
```

## Connect the CV

Paste the URL into `portafolio/components/data.js`:

```js
export const VIEWS = {
  api: 'https://cv-views.yourname.workers.dev',  // ← here
  ...
```

The page then records a view per visit (`GET /hit`) and the modal shows
real countries. If the Worker is down or offline, the CV quietly falls
back to the placeholder numbers — nothing breaks. ✅

## Test it

```bash
curl https://cv-views.yourname.workers.dev/hit    # +1 view (ZZ = unknown locally)
curl https://cv-views.yourname.workers.dev/stats  # read-only, no +1
```

`/stats` returns `{ total, uniques, countries:[{code,views}], recent:[{day,views}]×14, devices:{desktop,mobile,tablet} }`.

## Notes

- Schema v2 (event log + daily rollup). If you deployed the old v1
  single-table schema, drop it once:
  `npx wrangler d1 execute cv-views --remote --command "DROP TABLE IF EXISTS views"`
- `wrangler dev` (local testing) doesn't run on native Windows — use WSL
  or just deploy; `wrangler deploy` itself works fine on Windows.
- The database stores only aggregates + a salted daily visitor hash —
  no IPs, no cookies, no personal data. Privacy-friendly by design.
- Want to reset the counts?
  `npx wrangler d1 execute cv-views --remote --command "DELETE FROM view_events"` and the same for `daily_stats`.
