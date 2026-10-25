/* ============================================================
   Central content source — edit this file to update the CV.
   Identity fields stay bracketed on purpose; fill them in
   once, here, and the whole page follows.
   Data mirrors ../horizontal/components/.
   ============================================================ */

export const PROFILE = {
  logo: 'CV',
  name: '[Your Name]',
  avatarInitial: 'Y',
  city: '[Your City]',
  country: '[Your Country]',
  available: true,
  /* cycled by the hero typewriter */
  roles: ['Full-Stack Developer.', 'Multi-Platform Builder.', 'AI Agent Builder.'],
  email: '[your@email.com]',
  github: '[your-github]',
  linkedin: '[your-linkedin]',
  website: '[your-website]',
  ctaLine: 'Open to full-time roles, freelance and collaborations. Available for remote work worldwide.',
  quote: { text: "As long as I'm alive, there are infinite chances!", by: 'Monkey D. Luffy' },
};

/* each bullet is a list of segments; href segments render as links */
export const ABOUT = {
  bullets: [
    [
      { t: 'I design and ship ' },
      { t: 'web, mobile and desktop applications', href: '#projects' },
      { t: ' — from AI agents and marketplaces to POS systems and image editors.' },
    ],
    [
      { t: 'I work across the ' },
      { t: 'full stack', href: '#stack' },
      { t: ' — frontend, backend, mobile, desktop and AI — turning ideas into production-grade products, from database schema to polished UI.' },
    ],
    [
      { t: 'Pragmatic and quality-driven: clean architecture, tested with Vitest and Playwright, shipped as web apps, native mobile, desktop apps and Chrome extensions.' },
    ],
  ],
  stats: [
    ['20+', 'Projects shipped'],
    ['6+', 'Tech stacks'],
    ['3+', 'Platforms'],
  ],
};

export const CONTACTS = [
  { label: 'Mail', handle: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: 'mail', external: false },
  { label: 'GitHub', handle: PROFILE.github, href: `https://github.com/${PROFILE.github}`, icon: 'github', external: true },
  { label: 'LinkedIn', handle: PROFILE.linkedin, href: `https://linkedin.com/in/${PROFILE.linkedin}`, icon: 'linkedin', external: true },
  { label: 'Website', handle: PROFILE.website, href: PROFILE.website, icon: 'globe', external: true },
];

export const PROJECTS = [
  { rank: '01', tier: 't1', seed: 'plyntar', title: 'Plyntar — Magic Image Editor', desc: 'Web image editor with bg removal & text overlays. Supabase + Cloudflare Workers, AdonisJS backend, MinIO.', tags: ['React', 'TS', 'Supabase', 'Cloudflare'] },
  { rank: '02', tier: 't1', seed: 'yaukos', title: 'Yaukos Express Web', desc: 'Marketplace (Astro+React) with Supabase, R2, Playwright E2E, Vitest.', tags: ['Astro', 'React', 'Supabase'] },
  { rank: '03', tier: 't1', seed: 'posdesktop', title: 'Yaukos POS Desktop', desc: 'Desktop POS in Go, SQLite, cloud sync (outbox, dead-letter, migrations).', tags: ['Go', 'SQLite', 'Desktop'] },
  { rank: '04', tier: 't1', seed: 'enigmatic', title: 'Enigmatic — Loto Oracle', desc: 'AI agent forecasting lottery via high-dim model (weather/lunar/seasonal). Bun/TS.', tags: ['Bun', 'TS', 'AI'] },
  { rank: '05', tier: 't1', seed: 'encorepad', title: 'EncorePad', desc: 'Windows desktop widget (Tauri) for notes + global text expansion. v0.8.x.', tags: ['Tauri', 'Rust', 'Windows'] },
  { rank: '06', tier: 't2', seed: 'noventaynueve', title: 'Noventa Nueve POS', desc: 'Premium POS (Expo/RN) with Supabase realtime inventory, barcode, multilingual.', tags: ['Expo', 'RN', 'Supabase'] },
  { rank: '07', tier: 't2', seed: 'securedrop', title: 'Securedrop', desc: 'Zero-knowledge secret sharing, browser-side encryption, self-destructing links. Laravel 11.', tags: ['Laravel', 'PHP', 'Crypto'] },
  { rank: '08', tier: 't2', seed: 'surveypulse', title: 'SurveyPulse', desc: 'Multi-tenant survey engine, tenant isolation at data layer, JWT auth.', tags: ['Node', 'TS', 'Drizzle'] },
  { rank: '09', tier: 't2', seed: 'spotdiff', title: 'Spot-the-Difference Gen', desc: 'Auto-generates puzzles via object detection + OpenCV inpainting.', tags: ['Python', 'OpenCV', 'CV'] },
  { rank: '10', tier: 't2', seed: 'cryptools', title: 'Cryptools', desc: 'Crypto wallet scanner CLI & dashboard (Bun) with Tor/Warp.', tags: ['Bun', 'TS', 'CLI'] },
  { rank: '11', tier: 't2', seed: 'hatorreyes', title: 'Hatorreyes', desc: 'Mobile livestock records (Expo), offline-first, messaging mental model.', tags: ['Expo', 'RN', 'Offline'] },
  { rank: '12', tier: 't2', seed: 'linkedinhide', title: 'LinkedIn Hide Extension', desc: 'Chrome ext restoring Hide button, blocking users/companies, premium cloud sync.', tags: ['Chrome Ext', 'JS', 'Cloud'] },
  { rank: '13', tier: 't3', seed: 'prompthub', title: 'Prompt Hub PWA', desc: 'Private E2E-encrypted notes sync as PWA.', tags: ['PWA', 'E2E', 'Sync'] },
  { rank: '14', tier: 't3', seed: 'middlemen', title: 'Middle-Men MCP', desc: 'Middleware for multi-LLM communication via GitHub MCP.', tags: ['Node', 'MCP', 'LLMs'] },
  { rank: '15', tier: 't3', seed: 'depth', title: 'Image Depth Effect', desc: 'iPhone-clock-style depth effect on the web.', tags: ['React', 'Canvas', 'FX'] },
  { rank: '16', tier: 't3', seed: 'footerforge', title: 'Footer Forge', desc: 'Image → footer art, auto-compress ~100KB (WebP), 8 styles.', tags: ['React', 'Vite', 'Img'] },
  { rank: '17', tier: 't3', seed: 'hiringradar', title: 'Hiring Radar', desc: 'Python job-post tracker vs profile, zero deps, SQLite, dashboard.', tags: ['Python', 'SQLite', 'CLI'] },
  { rank: '18', tier: 't3', seed: 'cinebooker', title: 'CineBooker API', desc: 'Laravel 11 REST API for cinema booking, Sanctum auth.', tags: ['Laravel', 'PHP', 'REST'] },
  { rank: '19', tier: 't3', seed: 'aliexpress', title: 'AliExpress Crawler', desc: 'Product & image crawler with local dashboard and CLI.', tags: ['Node', 'Express', 'Crawler'] },
  { rank: '20', tier: 't3', seed: 'audiorec', title: 'AudioRecorder (Android)', desc: 'Android audio recorder in Kotlin.', tags: ['Kotlin', 'Android'] },
];

export const TIERS = {
  t1: { label: 'Big build', plural: 'Big builds', line: 'The five that got the most attention.' },
  t2: { label: 'Workhorse', plural: 'Workhorses', line: 'Seven tools that earn their keep.' },
  t3: { label: 'Side quest', plural: 'Side quests', line: 'Eight rabbit holes worth the trip.' },
};

export const GLYPHS = {
  plyntar: 'Pl', yaukos: 'Yx', posdesktop: 'POS', enigmatic: 'En', encorepad: 'Ep',
  noventaynueve: '99', securedrop: 'Sd', surveypulse: 'Sv', spotdiff: 'Sp', cryptools: 'Cr',
  hatorreyes: 'Ht', linkedinhide: 'in', prompthub: 'Ph', middlemen: 'Mm', depth: '3D',
  footerforge: 'Ff', hiringradar: 'Hr', cinebooker: 'Cb', aliexpress: 'Ae', audiorec: 'Ar',
};

/* [name, category, proficiency %] — from horizontal skills bars */
export const SKILLS = [
  ['TypeScript', 'frontend', 90], ['React / Next.js', 'frontend', 85],
  ['Astro / SolidJS', 'frontend', 80], ['Tailwind CSS', 'frontend', 85],
  ['Node.js / Bun', 'backend', 90], ['Laravel / PHP', 'backend', 80],
  ['Go', 'backend', 75], ['Supabase / Postgres', 'backend', 85],
  ['React Native / Expo', 'mobile', 85], ['Tauri / Rust', 'mobile', 80],
  ['Kotlin / Android', 'mobile', 70], ['SQLite', 'mobile', 85],
  ['LLMs / MCP', 'ai', 80], ['OpenCV', 'ai', 75],
  ['Drizzle ORM', 'ai', 85], ['Cloudflare', 'ai', 80],
];

export const STACK_CATS = [
  ['all', 'All'],
  ['frontend', 'Frontend'],
  ['backend', 'Backend'],
  ['mobile', 'Mobile & Desktop'],
  ['ai', 'AI & Data'],
];

/* GitHub Activity contribution levels: 52 weeks × 7 days, 0 = none … 4 = peak.
   Column 0 is Sunday (GitHub's layout). While null, the section renders a
   seeded placeholder — paste the real matrix here (read off the profile
   screenshot, 52 columns left→right, 7 cells top→bottom) to replace it. */
export const GITHUB_LEVELS = null;

/* Views stats. Paste your deployed Worker URL into `api` (see
   cloudflare/README.md) to make the counter real. While `api` is
   null — or if the Worker is unreachable — the modal shows the
   placeholder numbers below instead. */
export const VIEWS = {
  api: 'https://cv-views.windenclientes.workers.dev',
  total: 1247,
  uniques: 812,
  devices: { desktop: 790, mobile: 398, tablet: 59 },
  /* 14-day trend for the modal sparkline (demo data) */
  recent: [
    ['2026-10-11', 41], ['2026-10-12', 28], ['2026-10-13', 66], ['2026-10-14', 52],
    ['2026-10-15', 38], ['2026-10-16', 25], ['2026-10-17', 31], ['2026-10-18', 74],
    ['2026-10-19', 58], ['2026-10-20', 47], ['2026-10-21', 39], ['2026-10-22', 83],
    ['2026-10-23', 61], ['2026-10-24', 44],
  ].map(([day, views]) => ({ day, views })),
  countries: [
    { flag: '🇮🇳', name: 'India', views: 486 },
    { flag: '🇺🇸', name: 'United States', views: 254 },
    { flag: '🇩🇪', name: 'Germany', views: 131 },
    { flag: '🇬🇧', name: 'United Kingdom', views: 97 },
    { flag: '🇧🇷', name: 'Brazil', views: 74 },
    { flag: '🇯🇵', name: 'Japan', views: 61 },
    { flag: '🇮🇩', name: 'Indonesia', views: 52 },
    { flag: '🇨🇦', name: 'Canada', views: 43 },
  ],
};

/* ISO 3166-1 alpha-2 → country name (for the views modal rows).
   Codes the Worker records but that aren't countries (ZZ unknown,
   T1 Tor) fall back to a generic label in ViewCounter. */
export const COUNTRY_NAMES = {
  AD: 'Andorra', AE: 'United Arab Emirates', AF: 'Afghanistan', AG: 'Antigua and Barbuda',
  AI: 'Anguilla', AL: 'Albania', AM: 'Armenia', AO: 'Angola', AQ: 'Antarctica',
  AR: 'Argentina', AS: 'American Samoa', AT: 'Austria', AU: 'Australia', AW: 'Aruba',
  AX: 'Åland Islands', AZ: 'Azerbaijan', BA: 'Bosnia and Herzegovina', BB: 'Barbados',
  BD: 'Bangladesh', BE: 'Belgium', BF: 'Burkina Faso', BG: 'Bulgaria', BH: 'Bahrain',
  BI: 'Burundi', BJ: 'Benin', BL: 'Saint Barthélemy', BM: 'Bermuda', BN: 'Brunei',
  BO: 'Bolivia', BQ: 'Caribbean Netherlands', BR: 'Brazil', BS: 'Bahamas', BT: 'Bhutan',
  BW: 'Botswana', BY: 'Belarus', BZ: 'Belize', CA: 'Canada', CD: 'DR Congo',
  CF: 'Central African Republic', CG: 'Congo', CH: 'Switzerland', CI: 'Côte d’Ivoire',
  CK: 'Cook Islands', CL: 'Chile', CM: 'Cameroon', CN: 'China', CO: 'Colombia',
  CR: 'Costa Rica', CU: 'Cuba', CV: 'Cabo Verde', CW: 'Curaçao', CY: 'Cyprus',
  CZ: 'Czechia', DE: 'Germany', DJ: 'Djibouti', DK: 'Denmark', DM: 'Dominica',
  DO: 'Dominican Republic', DZ: 'Algeria', EC: 'Ecuador', EE: 'Estonia', EG: 'Egypt',
  EH: 'Western Sahara', ER: 'Eritrea', ES: 'Spain', ET: 'Ethiopia', FI: 'Finland',
  FJ: 'Fiji', FK: 'Falkland Islands', FM: 'Micronesia', FO: 'Faroe Islands',
  FR: 'France', GA: 'Gabon', GB: 'United Kingdom', GD: 'Grenada', GE: 'Georgia',
  GF: 'French Guiana', GG: 'Guernsey', GH: 'Ghana', GI: 'Gibraltar', GL: 'Greenland',
  GM: 'Gambia', GN: 'Guinea', GP: 'Guadeloupe', GQ: 'Equatorial Guinea', GR: 'Greece',
  GT: 'Guatemala', GU: 'Guam', GW: 'Guinea-Bissau', GY: 'Guyana', HK: 'Hong Kong',
  HN: 'Honduras', HR: 'Croatia', HT: 'Haiti', HU: 'Hungary', ID: 'Indonesia',
  IE: 'Ireland', IL: 'Israel', IM: 'Isle of Man', IN: 'India', IO: 'British Indian Ocean Territory',
  IQ: 'Iraq', IR: 'Iran', IS: 'Iceland', IT: 'Italy', JE: 'Jersey', JM: 'Jamaica',
  JO: 'Jordan', JP: 'Japan', KE: 'Kenya', KG: 'Kyrgyzstan', KH: 'Cambodia',
  KI: 'Kiribati', KM: 'Comoros', KN: 'Saint Kitts and Nevis', KP: 'North Korea',
  KR: 'South Korea', KW: 'Kuwait', KY: 'Cayman Islands', KZ: 'Kazakhstan',
  LA: 'Laos', LB: 'Lebanon', LC: 'Saint Lucia', LI: 'Liechtenstein', LK: 'Sri Lanka',
  LR: 'Liberia', LS: 'Lesotho', LT: 'Lithuania', LU: 'Luxembourg', LV: 'Latvia',
  LY: 'Libya', MA: 'Morocco', MC: 'Monaco', MD: 'Moldova', ME: 'Montenegro',
  MF: 'Saint Martin', MG: 'Madagascar', MH: 'Marshall Islands', MK: 'North Macedonia',
  ML: 'Mali', MM: 'Myanmar', MN: 'Mongolia', MO: 'Macao', MP: 'Northern Mariana Islands',
  MQ: 'Martinique', MR: 'Mauritania', MS: 'Montserrat', MT: 'Malta', MU: 'Mauritius',
  MV: 'Maldives', MW: 'Malawi', MX: 'Mexico', MY: 'Malaysia', MZ: 'Mozambique',
  NA: 'Namibia', NC: 'New Caledonia', NE: 'Niger', NF: 'Norfolk Island', NG: 'Nigeria',
  NI: 'Nicaragua', NL: 'Netherlands', NO: 'Norway', NP: 'Nepal', NR: 'Nauru',
  NU: 'Niue', NZ: 'New Zealand', OM: 'Oman', PA: 'Panama', PE: 'Peru',
  PF: 'French Polynesia', PG: 'Papua New Guinea', PH: 'Philippines', PK: 'Pakistan',
  PL: 'Poland', PM: 'Saint Pierre and Miquelon', PR: 'Puerto Rico', PS: 'Palestine',
  PT: 'Portugal', PW: 'Palau', PY: 'Paraguay', QA: 'Qatar', RE: 'Réunion',
  RO: 'Romania', RS: 'Serbia', RU: 'Russia', RW: 'Rwanda', SA: 'Saudi Arabia',
  SB: 'Solomon Islands', SC: 'Seychelles', SD: 'Sudan', SE: 'Sweden', SG: 'Singapore',
  SI: 'Slovenia', SK: 'Slovakia', SL: 'Sierra Leone', SM: 'San Marino', SN: 'Senegal',
  SO: 'Somalia', SR: 'Suriname', SS: 'South Sudan', ST: 'São Tomé and Príncipe',
  SV: 'El Salvador', SX: 'Sint Maarten', SY: 'Syria', SZ: 'Eswatini', TC: 'Turks and Caicos Islands',
  TD: 'Chad', TG: 'Togo', TH: 'Thailand', TJ: 'Tajikistan', TL: 'Timor-Leste',
  TM: 'Turkmenistan', TN: 'Tunisia', TO: 'Tonga', TR: 'Türkiye', TT: 'Trinidad and Tobago',
  TV: 'Tuvalu', TW: 'Taiwan', TZ: 'Tanzania', UA: 'Ukraine', UG: 'Uganda',
  US: 'United States', UY: 'Uruguay', UZ: 'Uzbekistan', VA: 'Vatican City',
  VC: 'Saint Vincent and the Grenadines', VE: 'Venezuela', VG: 'British Virgin Islands',
  VI: 'U.S. Virgin Islands', VN: 'Vietnam', VU: 'Vanuatu', WF: 'Wallis and Futuna',
  WS: 'Samoa', YE: 'Yemen', YT: 'Mayotte', ZA: 'South Africa', ZM: 'Zambia', ZW: 'Zimbabwe',
};
