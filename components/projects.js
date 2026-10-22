const PROJECTS = [
  { rank:'01', tier:'tier-1', title:'Plyntar — Magic Image Editor', desc:'Web image editor with bg removal & text overlays. Supabase + Cloudflare Workers, AdonisJS backend, MinIO.', tags:['React','TS','Supabase','Cloudflare'], seed:'plyntar' },
  { rank:'02', tier:'tier-1', title:'Yaukos Express Web', desc:'Marketplace (Astro+React) with Supabase, R2, Playwright E2E, Vitest.', tags:['Astro','React','Supabase'], seed:'yaukos' },
  { rank:'03', tier:'tier-1', title:'Yaukos POS Desktop', desc:'Desktop POS in Go, SQLite, cloud sync (outbox, dead-letter, migrations).', tags:['Go','SQLite','Desktop'], seed:'posdesktop' },
  { rank:'04', tier:'tier-1', title:'Enigmatic — Loto Oracle', desc:'AI agent forecasting lottery via high-dim model (weather/lunar/seasonal). Bun/TS.', tags:['Bun','TS','AI'], seed:'enigmatic' },
  { rank:'05', tier:'tier-1', title:'EncorePad', desc:'Windows desktop widget (Tauri) for notes + global text expansion. v0.8.x.', tags:['Tauri','Rust','Windows'], seed:'encorepad' },
  { rank:'06', tier:'tier-2', title:'Noventa Nueve POS', desc:'Premium POS (Expo/RN) with Supabase realtime inventory, barcode, multilingual.', tags:['Expo','RN','Supabase'], seed:'noventaynueve' },
  { rank:'07', tier:'tier-2', title:'Securedrop', desc:'Zero-knowledge secret sharing, browser-side encryption, self-destructing links. Laravel 11.', tags:['Laravel','PHP','Crypto'], seed:'securedrop' },
  { rank:'08', tier:'tier-2', title:'SurveyPulse', desc:'Multi-tenant survey engine, tenant isolation at data layer, JWT auth.', tags:['Node','TS','Drizzle'], seed:'surveypulse' },
  { rank:'09', tier:'tier-2', title:'Spot-the-Difference Gen', desc:'Auto-generates puzzles via object detection + OpenCV inpainting.', tags:['Python','OpenCV','CV'], seed:'spotdiff' },
  { rank:'10', tier:'tier-2', title:'Cryptools', desc:'Crypto wallet scanner CLI & dashboard (Bun) with Tor/Warp.', tags:['Bun','TS','CLI'], seed:'cryptools' },
  { rank:'11', tier:'tier-2', title:'Hatorreyes', desc:'Mobile livestock records (Expo), offline-first, messaging mental model.', tags:['Expo','RN','Offline'], seed:'hatorreyes' },
  { rank:'12', tier:'tier-2', title:'LinkedIn Hide Extension', desc:'Chrome ext restoring Hide button, blocking users/companies, premium cloud sync.', tags:['Chrome Ext','JS','Cloud'], seed:'linkedinhide' },
  { rank:'13', tier:'tier-3', title:'Prompt Hub PWA', desc:'Private E2E-encrypted notes sync as PWA.', tags:['PWA','E2E','Sync'], seed:'prompthub' },
  { rank:'14', tier:'tier-3', title:'Middle-Men MCP', desc:'Middleware for multi-LLM communication via GitHub MCP.', tags:['Node','MCP','LLMs'], seed:'middlemen' },
  { rank:'15', tier:'tier-3', title:'Image Depth Effect', desc:'iPhone-clock-style depth effect on the web.', tags:['React','Canvas','FX'], seed:'depth' },
  { rank:'16', tier:'tier-3', title:'Footer Forge', desc:'Image → footer art, auto-compress ~100KB (WebP), 8 styles.', tags:['React','Vite','Img'], seed:'footerforge' },
  { rank:'17', tier:'tier-3', title:'Hiring Radar', desc:'Python job-post tracker vs profile, zero deps, SQLite, dashboard.', tags:['Python','SQLite','CLI'], seed:'hiringradar' },
  { rank:'18', tier:'tier-3', title:'CineBooker API', desc:'Laravel 11 REST API for cinema booking, Sanctum auth.', tags:['Laravel','PHP','REST'], seed:'cinebooker' },
  { rank:'19', tier:'tier-3', title:'AliExpress Crawler', desc:'Product & image crawler with local dashboard and CLI.', tags:['Node','Express','Crawler'], seed:'aliexpress' },
  { rank:'20', tier:'tier-3', title:'AudioRecorder (Android)', desc:'Android audio recorder in Kotlin.', tags:['Kotlin','Android'], seed:'audiorec' },
];

export function render(container) {
  const glyphs = {
    plyntar:'Pl',yaukos:'Yx',posdesktop:'POS',enigmatic:'En',encorepad:'Ep',
    noventaynueve:'99',securedrop:'Sd',surveypulse:'Sv',spotdiff:'Sp',cryptools:'Cr',
    hatorreyes:'Ht',linkedinhide:'in',prompthub:'Ph',middlemen:'Mm',depth:'3D',
    footerforge:'Ff',hiringradar:'Hr',cinebooker:'Cb',aliexpress:'Ae',audiorec:'Ar'
  };
  const tierOne = PROJECTS.filter(p => p.tier === 'tier-1');
  const apps = PROJECTS.filter(p => p.tier !== 'tier-1');
  const projectIndex = p => PROJECTS.indexOf(p);
  const icon = p => `<span class="launch-icon launch-tone-${projectIndex(p) % 8}" aria-hidden="true"><span>${glyphs[p.seed] || p.title.slice(0, 2)}</span></span>`;
  const widgets = tierOne.map((p, i) => `
    <button class="launch-widget ${i === 0 ? 'launch-widget--lead' : ''}" type="button"
      data-project="${projectIndex(p)}" aria-label="Open ${p.title} details">
      <span class="launch-widget-top">${icon(p)}<span class="launch-widget-label">${i === 0 ? 'Big idea' : p.tags[0]}</span><span class="launch-widget-rank">${p.rank}</span></span>
      <span class="launch-widget-title">${p.title}</span>
      <span class="launch-widget-desc">${p.desc}</span>
      ${i === 0 ? `<span class="launch-widget-tags">${p.tags.slice(0, 4).map(t => `<i>${t}</i>`).join('')}</span>` : ''}
    </button>`).join('');
  const appTiles = apps.map(p => `
    <button class="launch-app" type="button" data-project="${projectIndex(p)}"
      aria-label="Open ${p.title} details">
      ${icon(p)}<span class="launch-app-name">${p.title}</span>
    </button>`).join('');

  container.innerHTML = `
  <section class="section section-full" id="projects">
    <div class="section-inner-full">
      <div class="project-playground">
        <header class="launch-head">
          <div class="launch-head-copy"><h2>Pick a project<span>.</span></h2>
            <p>Five big ideas. Fifteen more rabbit holes.</p></div>
          <div class="launch-count"><strong>${PROJECTS.length}</strong><span>things<br>made</span></div>
        </header>
        <div class="launch-layout">
          <section class="launch-widgets" aria-label="Featured projects">
            <div class="launch-section-heading"><h3>Big builds</h3><span>Worth a closer look</span></div>
            <div class="launch-widget-grid">${widgets}</div>
          </section>
          <section class="launch-apps" aria-label="More projects">
            <div class="launch-section-heading"><h3>Explore the rest</h3><span>${apps.length} tiny doors</span></div>
            <div class="launch-app-grid">${appTiles}</div>
          </section>
        </div>
        <dialog class="project-detail" aria-labelledby="project-detail-title">
          <form method="dialog"><button class="project-detail-close" aria-label="Close details">x</button></form>
          <div class="project-detail-heading"><span class="project-detail-icon"></span><div><span class="project-detail-tier"></span><h3 id="project-detail-title"></h3></div></div>
          <p class="project-detail-desc"></p><div class="project-detail-tags"></div>
        </dialog>
      </div>
    </div>
  </section>`;

  const dialog = container.querySelector('.project-detail');
  container.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      const p = PROJECTS[Number(button.dataset.project)];
      const detailGlyph = dialog.querySelector('.project-detail-icon');
      detailGlyph.className = `project-detail-icon launch-tone-${projectIndex(p) % 8}`;
      detailGlyph.textContent = glyphs[p.seed] || p.title[0];
      dialog.querySelector('.project-detail-tier').textContent = p.tier.replace('tier-', 'Tier ');
      dialog.querySelector('#project-detail-title').textContent = p.title;
      dialog.querySelector('.project-detail-desc').textContent = p.desc;
      dialog.querySelector('.project-detail-tags').innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');
      dialog.showModal();
    });
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
}
