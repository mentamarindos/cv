import { html, Fragment, useState, useEffect } from './preact.js';
import { VIEWS, COUNTRY_NAMES } from './data.js';
import { Eye } from './icons.js';

/* Clickable views badge + stats modal.

   Live mode:  if VIEWS.api is set, the page calls GET {api}/hit on every
   visit — the Cloudflare Worker records country/device/referrer, dedupes
   repeat visitors per day (salted hash, no raw IP) and returns
   { total, uniques, countries, recent, devices }. Last good response is
   cached in localStorage so the badge paints instantly.

   Fallback:   api null or fetch failed → demo numbers from data.js +
   this browser's repeat visits (localStorage). */

const SPECIAL_NAMES = { ZZ: 'Unknown', T1: 'Tor' };
const flagOf = (code) =>
  code === 'ZZ' || code === 'T1' || !/^[A-Z]{2}$/.test(code)
    ? '🌍'
    : String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
const nameOf = (code) => SPECIAL_NAMES[code] || COUNTRY_NAMES[code] || code;

const TOP_N = 12;
const DEVICE_LABELS = { desktop: '🖥', mobile: '📱', tablet: '💻' };

export default function ViewCounter() {
  const [open, setOpen] = useState(false);
  const [visits, setVisits] = useState(0);
  const [stats, setStats] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cv-stats-cache')); } catch { return null; }
  });

  useEffect(() => {
    const n = parseInt(localStorage.getItem('cv-views') || '0', 10) + 1;
    localStorage.setItem('cv-views', String(n));
    setVisits(n);

    if (!VIEWS.api) return;
    const page = encodeURIComponent(location.pathname);
    fetch(`${VIEWS.api}/hit?p=${page}`, { cache: 'no-store' })
      .then((r) => r.ok ? r.json() : Promise.reject(r.status))
      .then((data) => {
        if (!data || !Array.isArray(data.countries)) return;
        setStats(data);
        localStorage.setItem('cv-stats-cache', JSON.stringify(data));
      })
      .catch(() => { /* offline or Worker not deployed → keep fallback */ });
  }, []);

  /* escape closes + page scroll locks while the modal is open */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const live = stats && stats.countries;
  const total = live ? stats.total : VIEWS.total + visits;
  const uniques = live ? stats.uniques : VIEWS.uniques;
  const recent = (live ? stats.recent : VIEWS.recent) || [];
  const devices = (live ? stats.devices : VIEWS.devices) || {};
  const deviceTotal = Object.values(devices).reduce((a, b) => a + b, 0) || 1;
  const peak = Math.max(...recent.map((d) => d.views), 1);

  function buildRows() {
    if (live) {
      const rows = stats.countries.slice(0, TOP_N).map((c) => ({
        flag: flagOf(c.code), name: nameOf(c.code), views: c.views,
      }));
      const rest = stats.countries.slice(TOP_N).reduce((a, c) => a + c.views, 0);
      if (rest > 0) rows.push({ flag: '🌍', name: 'Everywhere else', views: rest });
      return rows;
    }
    const named = VIEWS.countries.reduce((a, c) => a + c.views, 0);
    const rows = VIEWS.countries.map((c) => ({ ...c }));
    if (VIEWS.total + visits - named > 0) {
      rows.push({ flag: '🌍', name: 'Everywhere else', views: VIEWS.total + visits - named });
    }
    return rows;
  }

  return html`
    <${Fragment}>
      <button class="views" title="View stats" aria-haspopup="dialog"
        aria-expanded=${String(open)} onClick=${() => setOpen(true)}>
        <${Eye} /> <span>${total.toLocaleString()}</span>
      </button>
      ${open && html`
        <div class="vc-backdrop" onClick=${(e) => e.target === e.currentTarget && setOpen(false)}>
          <div class="vc-modal" role="dialog" aria-modal="true" aria-label="Profile views by country">
            <button class="vc-close" aria-label="Close" onClick=${() => setOpen(false)}>✕</button>
            <h3 class="vc-title">Profile Views</h3>
            <div class="vc-total">${total.toLocaleString()}</div>
            <div class="vc-total-label">
              ${uniques.toLocaleString()} unique${live ? '' : ' · demo data'}
            </div>
            ${recent.length > 0 && html`
              <div class="vc-spark" role="img" aria-label="Views per day, last ${recent.length} days">
                ${recent.map((d) => html`
                  <i key=${d.day} title=${`${d.day}: ${d.views} views`}
                    style=${{ height: Math.max(6, Math.round((d.views / peak) * 100)) + '%' }}></i>`)}
              </div>`}
            <div class="vc-rows">
              ${buildRows().map((c) => html`
                <div class="vc-row" key=${c.name}>
                  <span class="vc-flag" aria-hidden="true">${c.flag}</span>
                  <span class="vc-name">${c.name}</span>
                  <span class="vc-num">${c.views.toLocaleString()}</span>
                  <span class="vc-bar" aria-hidden="true">
                    <i style=${{ width: Math.max(4, Math.round((c.views / total) * 100)) + '%' }}></i>
                  </span>
                </div>`)}
            </div>
            ${deviceTotal > 0 && html`
              <div class="vc-devices">
                ${Object.entries(devices).map(([d, n]) => html`
                  <span key=${d}>${DEVICE_LABELS[d] || '🌐'} ${d} ${Math.round((n / deviceTotal) * 100)}%</span>`)}
              </div>`}
            <div class="vc-note">Your visits on this device: ${visits.toLocaleString()}</div>
          </div>
        </div>`}
    <//>`;
}
