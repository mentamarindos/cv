-- schema v2 — event log + daily rollup. replaces the old single
-- `views (country, count)` table (drop it if you deployed v1:
--   npx wrangler d1 execute cv-views --remote --command "DROP TABLE IF EXISTS views")

-- one row per recorded page view (bots are skipped by the worker)
CREATE TABLE IF NOT EXISTS view_events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  ts          TEXT NOT NULL,              -- 'YYYY-MM-DD HH:MM:SS' UTC
  day         TEXT NOT NULL,              -- 'YYYY-MM-DD' UTC (query convenience)
  country     TEXT NOT NULL DEFAULT 'ZZ', -- ISO 3166-1 alpha-2, ZZ unknown, T1 Tor
  city        TEXT,
  continent   TEXT,
  path        TEXT NOT NULL DEFAULT '/',  -- which page (?p= from the client)
  referrer    TEXT,                       -- external referer host only, no full URL
  device      TEXT NOT NULL DEFAULT 'desktop', -- desktop | mobile | tablet
  visitor_day TEXT NOT NULL,              -- 8 hex of salted hash(ip+ua+day): unique estimate
  is_unique   INTEGER NOT NULL DEFAULT 0  -- 1 = first hit of this visitor today
);

CREATE INDEX IF NOT EXISTS idx_events_ts       ON view_events (ts);
CREATE INDEX IF NOT EXISTS idx_events_visitor  ON view_events (visitor_day, day);
CREATE INDEX IF NOT EXISTS idx_events_referrer ON view_events (referrer);

-- aggregate per day+country: what /stats reads (no event-table scans)
CREATE TABLE IF NOT EXISTS daily_stats (
  day      TEXT NOT NULL,
  country  TEXT NOT NULL,
  hits     INTEGER NOT NULL DEFAULT 0,
  uniques  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, country)
);
CREATE INDEX IF NOT EXISTS idx_daily_day ON daily_stats (day);

-- schema versioning / install markers
CREATE TABLE IF NOT EXISTS meta (
  key   TEXT PRIMARY KEY,
  value TEXT
);
INSERT OR IGNORE INTO meta (key, value) VALUES ('schema_version', '2');
