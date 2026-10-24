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
