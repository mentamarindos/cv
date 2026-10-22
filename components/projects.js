const PROJECTS = [
  { rank:'01', tier:'tier-1', title:'Plyntar — Magic Image Editor', desc:'Web image editor with bg removal & text overlays. Supabase + Cloudflare Workers, AdonisJS backend, MinIO.', tags:['React','TS','Supabase','Cloudflare'], seed:'plyntar', span:'wide-tall' },
  { rank:'02', tier:'tier-1', title:'Yaukos Express Web', desc:'Marketplace (Astro+React) with Supabase, R2, Playwright E2E, Vitest.', tags:['Astro','React','Supabase'], seed:'yaukos', span:'wide' },
  { rank:'03', tier:'tier-1', title:'Yaukos POS Desktop', desc:'Desktop POS in Go, SQLite, cloud sync (outbox, dead-letter, migrations).', tags:['Go','SQLite','Desktop'], seed:'posdesktop', span:'normal' },
  { rank:'04', tier:'tier-1', title:'Enigmatic — Loto Oracle', desc:'AI agent forecasting lottery via high-dim model (weather/lunar/seasonal). Bun/TS.', tags:['Bun','TS','AI'], seed:'enigmatic', span:'normal' },
  { rank:'05', tier:'tier-1', title:'EncorePad', desc:'Windows desktop widget (Tauri) for notes + global text expansion. v0.8.x.', tags:['Tauri','Rust','Windows'], seed:'encorepad', span:'normal' },
  { rank:'06', tier:'tier-2', title:'Noventa Nueve POS', desc:'Premium POS (Expo/RN) with Supabase realtime inventory, barcode, multilingual.', tags:['Expo','RN','Supabase'], seed:'noventaynueve', span:'wide' },
  { rank:'07', tier:'tier-2', title:'Securedrop', desc:'Zero-knowledge secret sharing, browser-side encryption, self-destructing links. Laravel 11.', tags:['Laravel','PHP','Crypto'], seed:'securedrop', span:'normal' },
  { rank:'08', tier:'tier-2', title:'SurveyPulse', desc:'Multi-tenant survey engine, tenant isolation at data layer, JWT auth.', tags:['Node','TS','Drizzle'], seed:'surveypulse', span:'normal' },
  { rank:'09', tier:'tier-2', title:'Spot-the-Difference Gen', desc:'Auto-generates puzzles via object detection + OpenCV inpainting.', tags:['Python','OpenCV','CV'], seed:'spotdiff', span:'normal' },
  { rank:'10', tier:'tier-2', title:'Cryptools', desc:'Crypto wallet scanner CLI & dashboard (Bun) with Tor/Warp.', tags:['Bun','TS','CLI'], seed:'cryptools', span:'normal' },
  { rank:'11', tier:'tier-2', title:'Hatorreyes', desc:'Mobile livestock records (Expo), offline-first, messaging mental model.', tags:['Expo','RN','Offline'], seed:'hatorreyes', span:'wide' },
  { rank:'12', tier:'tier-2', title:'LinkedIn Hide Extension', desc:'Chrome ext restoring Hide button, blocking users/companies, premium cloud sync.', tags:['Chrome Ext','JS','Cloud'], seed:'linkedinhide', span:'normal' },
  { rank:'13', tier:'tier-3', title:'Prompt Hub PWA', desc:'Private E2E-encrypted notes sync as PWA.', tags:['PWA','E2E','Sync'], seed:'prompthub', span:'normal' },
  { rank:'14', tier:'tier-3', title:'Middle-Men MCP', desc:'Middleware for multi-LLM communication via GitHub MCP.', tags:['Node','MCP','LLMs'], seed:'middlemen', span:'normal' },
  { rank:'15', tier:'tier-3', title:'Image Depth Effect', desc:'iPhone-clock-style depth effect on the web.', tags:['React','Canvas','FX'], seed:'depth', span:'normal' },
  { rank:'16', tier:'tier-3', title:'Footer Forge', desc:'Image → footer art, auto-compress ~100KB (WebP), 8 styles.', tags:['React','Vite','Img'], seed:'footerforge', span:'normal' },
  { rank:'17', tier:'tier-3', title:'Hiring Radar', desc:'Python job-post tracker vs profile, zero deps, SQLite, dashboard.', tags:['Python','SQLite','CLI'], seed:'hiringradar', span:'normal' },
  { rank:'18', tier:'tier-3', title:'CineBooker API', desc:'Laravel 11 REST API for cinema booking, Sanctum auth.', tags:['Laravel','PHP','REST'], seed:'cinebooker', span:'normal' },
  { rank:'19', tier:'tier-3', title:'AliExpress Crawler', desc:'Product & image crawler with local dashboard and CLI.', tags:['Node','Express','Crawler'], seed:'aliexpress', span:'wide' },
  { rank:'20', tier:'tier-3', title:'AudioRecorder (Android)', desc:'Android audio recorder in Kotlin.', tags:['Kotlin','Android'], seed:'audiorec', span:'normal' },
];

export function render(container) {
  const cards = PROJECTS.map(p => `
    <article class="bento-card bento-${p.span}">
      <div class="bento-img">
        <img src="https://picsum.photos/seed/${p.seed}/800/600" alt="${p.title}" loading="lazy" />
        <div class="bento-overlay"></div>
        <span class="bento-tier ${p.tier}">${p.tier.replace('tier-','Tier ')}</span>
      </div>
      <div class="bento-body">
        <div class="bento-rank">${p.rank}</div>
        <h3>${p.title}</h3>
        <p class="bento-desc">${p.desc}</p>
        <div class="bento-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      </div>
    </article>`).join('');

  container.innerHTML = `
  <section class="section" id="projects">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-label">03 / Projects</div>
        <div>
          <h2 class="section-title">Selected <span class="accent">work</span>.</h2>
          <p class="section-intro">Bento grid — asymmetric layout. Hover a card to reveal details.</p>
        </div>
      </div>
      <div class="bento-grid">${cards}</div>
    </div>
  </section>`;
}