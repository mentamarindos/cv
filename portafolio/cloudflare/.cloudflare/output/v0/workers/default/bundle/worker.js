/* Cloudflare Worker — view counter with country, uniques, devices,
   referrers and a 14-day trend. Visitor country comes free via
   request.cf; no raw IP is ever stored (only a salted daily hash).

   Routes:
     GET /hit            → record 1 view (skips bots), return stats
     GET /hit?p=foo      → same, tagged with a page path
     GET /stats          → read-only stats (no recording)
     GET /               → tiny health check

   Binding: D1 database bound as `DB` (see wrangler.toml).
   Recommended secret (wrangler secret put SALT) — falls back to a
   constant if unset, which only weakens the unique-visitor estimate. */

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Cache-Control": "no-store",
};

const BOT_RE = /(bot|crawler|spider|slurp|preview|lighthouse|headless|curl|wget|python-requests|monitor|uptime)/i;
const TREND_DAYS = 14;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }
    if (url.pathname === "/hit") return hit(request, env);
    if (url.pathname === "/stats") return stats(env);
    if (url.pathname === "/") {
      return Response.json({ ok: true, hint: "GET /hit or GET /stats" }, { headers: CORS });
    }
    return new Response("Not found", { status: 404, headers: CORS });
  },
};

function deviceOf(ua) {
  if (/iPad|Tablet(?!.*Phone)/i.test(ua)) return "tablet";
  if (/Mobi|Android.+Mobile|iPhone/i.test(ua)) return "mobile";
  return "desktop";
}

/* privacy-safe daily visitor id: salted hash of ip+ua+day, 8 hex chars.
   Same person on another day, or two people behind one NAT on the same
   day, are different keys — it is only an estimate, by design. */
async function visitorKey(request, env, day) {
  const ip = request.headers.get("cf-connecting-ip") || "";
  const ua = request.headers.get("user-agent") || "";
  const salt = (env && env.SALT) || "cv-views-default-salt";
  const bytes = new TextEncoder().encode(`${salt}|${day}|${ip}|${ua}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].slice(0, 4)
    .map((b) => b.toString(16).padStart(2, "0")).join("");
}

function referrerHost(request) {
  try {
    const ref = new URL(request.headers.get("referer") || "");
    return ref.host && ref.host !== new URL(request.url).host ? ref.host : null;
  } catch {
    return null;
  }
}

async function hit(request, env) {
  const ua = request.headers.get("user-agent") || "";
  if (BOT_RE.test(ua)) return stats(env); // don't count machines

  const url = new URL(request.url);
  const cf = request.cf || {};
  const country = cf.country || "ZZ";
  const now = new Date();
  const day = now.toISOString().slice(0, 10);
  const ts = now.toISOString().slice(0, 19);
  const path = (url.searchParams.get("p") || "/").slice(0, 64);
  const visitor = await visitorKey(request, env, day);

  const seen = await env.DB.prepare(
    "SELECT 1 AS x FROM view_events WHERE visitor_day = ?1 AND day = ?2 LIMIT 1"
  ).bind(visitor, day).first();

  const isUnique = seen ? 0 : 1;

  await env.DB.batch([
    env.DB.prepare(
      `INSERT INTO view_events
         (ts, day, country, city, continent, path, referrer, device, visitor_day, is_unique)
       VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10)`
    ).bind(ts, day, country, cf.city || null, cf.continent || null,
           path, referrerHost(request), deviceOf(ua), visitor, isUnique),
    env.DB.prepare(
      `INSERT INTO daily_stats (day, country, hits, uniques) VALUES (?1, ?2, 1, ?3)
       ON CONFLICT (day, country) DO UPDATE SET hits = hits + 1, uniques = uniques + ?3`
    ).bind(day, country, isUnique),
  ]);

  return stats(env);
}

async function stats(env) {
  const cutoff = new Date(Date.now() - (TREND_DAYS - 1) * 86400000)
    .toISOString().slice(0, 10);

  const [totals, byCountry, byDay, byDevice] = await Promise.all([
    env.DB.prepare(
      "SELECT COALESCE(SUM(hits), 0) AS total, COALESCE(SUM(uniques), 0) AS uniques FROM daily_stats"
    ).first(),
    env.DB.prepare(
      "SELECT country AS code, SUM(hits) AS views FROM daily_stats GROUP BY country ORDER BY views DESC"
    ).all(),
    env.DB.prepare(
      "SELECT day, SUM(hits) AS views FROM daily_stats WHERE day >= ?1 GROUP BY day"
    ).bind(cutoff).all(),
    env.DB.prepare(
      "SELECT device, COUNT(*) AS views FROM view_events GROUP BY device"
    ).all(),
  ]);

  // contiguous trend: fill gap days with 0 so the sparkline never lies
  const byDayMap = new Map(byDay.results.map((r) => [r.day, r.views]));
  const recent = Array.from({ length: TREND_DAYS }, (_, i) => {
    const day = new Date(Date.now() - (TREND_DAYS - 1 - i) * 86400000)
      .toISOString().slice(0, 10);
    return { day, views: byDayMap.get(day) || 0 };
  });

  const devices = Object.fromEntries(byDevice.results.map((r) => [r.device, r.views]));

  return Response.json({
    total: totals.total,
    uniques: totals.uniques,
    countries: byCountry.results,
    recent,
    devices,
  }, { headers: CORS });
}
