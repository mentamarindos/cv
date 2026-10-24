const PROJECTS = [
  { rank:'01', tier:'tier-1', title:'Plyntar — Magic Image Editor', desc:'Web image editor with bg removal & text overlays. Supabase + Cloudflare Workers, AdonisJS backend, MinIO.', tags:['React','TS','Supabase','Cloudflare'] },
  { rank:'02', tier:'tier-1', title:'Yaukos Express Web', desc:'Marketplace (Astro+React) with Supabase, R2, Playwright E2E, Vitest.', tags:['Astro','React','Supabase'] },
  { rank:'03', tier:'tier-1', title:'Yaukos POS Desktop', desc:'Desktop POS in Go, SQLite, cloud sync (outbox, dead-letter, migrations).', tags:['Go','SQLite','Desktop'] },
  { rank:'04', tier:'tier-1', title:'Enigmatic — Loto Oracle', desc:'AI agent forecasting lottery via high-dim model (weather/lunar/seasonal). Bun/TS.', tags:['Bun','TS','AI'] },
  { rank:'05', tier:'tier-1', title:'EncorePad', desc:'Windows desktop widget (Tauri) for notes + global text expansion. v0.8.x.', tags:['Tauri','Rust','Windows'] },
  { rank:'06', tier:'tier-2', title:'Noventa Nueve POS', desc:'Premium POS (Expo/RN) with Supabase realtime inventory, barcode, multilingual.', tags:['Expo','RN','Supabase'] },
  { rank:'07', tier:'tier-2', title:'Securedrop', desc:'Zero-knowledge secret sharing, browser-side encryption, self-destructing links. Laravel 11.', tags:['Laravel','PHP','Crypto'] },
  { rank:'08', tier:'tier-2', title:'SurveyPulse', desc:'Multi-tenant survey engine, tenant isolation at data layer, JWT auth.', tags:['Node','TS','Drizzle'] },
  { rank:'09', tier:'tier-2', title:'Spot-the-Difference Gen', desc:'Auto-generates puzzles via object detection + OpenCV inpainting.', tags:['Python','OpenCV','CV'] },
  { rank:'10', tier:'tier-2', title:'Cryptools', desc:'Crypto wallet scanner CLI & dashboard (Bun) with Tor/Warp.', tags:['Bun','TS','CLI'] },
  { rank:'11', tier:'tier-2', title:'Hatorreyes', desc:'Mobile livestock records (Expo), offline-first, messaging mental model.', tags:['Expo','RN','Offline'] },
  { rank:'12', tier:'tier-2', title:'LinkedIn Hide Extension', desc:'Chrome ext restoring Hide button, blocking users/companies, premium cloud sync.', tags:['Chrome Ext','JS','Cloud'] },
  { rank:'13', tier:'tier-3', title:'Prompt Hub PWA', desc:'Private E2E-encrypted notes sync as PWA.', tags:['PWA','E2E','Sync'] },
  { rank:'14', tier:'tier-3', title:'Middle-Men MCP', desc:'Middleware for multi-LLM communication via GitHub MCP.', tags:['Node','MCP','LLMs'] },
  { rank:'15', tier:'tier-3', title:'Image Depth Effect', desc:'iPhone-clock-style depth effect on the web.', tags:['React','Canvas','FX'] },
  { rank:'16', tier:'tier-3', title:'Footer Forge', desc:'Image → footer art, auto-compress ~100KB (WebP), 8 styles.', tags:['React','Vite','Img'] },
  { rank:'17', tier:'tier-3', title:'Hiring Radar', desc:'Python job-post tracker vs profile, zero deps, SQLite, dashboard.', tags:['Python','SQLite','CLI'] },
  { rank:'18', tier:'tier-3', title:'CineBooker API', desc:'Laravel 11 REST API for cinema booking, Sanctum auth.', tags:['Laravel','PHP','REST'] },
  { rank:'19', tier:'tier-3', title:'AliExpress Crawler', desc:'Product & image crawler with local dashboard and CLI.', tags:['Node','Express','Crawler'] },
  { rank:'20', tier:'tier-3', title:'AudioRecorder (Android)', desc:'Android audio recorder in Kotlin.', tags:['Kotlin','Android'] },
];

const TIER_META = {
  'tier-1': { label:'Big build', plural:'Big builds', blurb:'Worth a closer look', line:'The five that got the most attention.' },
  'tier-2': { label:'Workhorse', plural:'Workhorses', blurb:'Shipped and running', line:'Seven tools that earn their keep.' },
  'tier-3': { label:'Side quest', plural:'Side quests', blurb:'Small but real', line:'Eight rabbit holes worth the trip.' }
};

const FILTERS = [
  { id:'all', label:'All' },
  { id:'tier-1', label:TIER_META['tier-1'].plural },
  { id:'tier-2', label:TIER_META['tier-2'].plural },
  { id:'tier-3', label:TIER_META['tier-3'].plural }
];

const INTRO_ALL = 'Twenty shipped builds across web, desktop, mobile and CLI.';

const esc = value => String(value)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const CHEVRON = dir => `<svg class="project-detail-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="${dir === 'prev' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'}"/></svg>`;

export function render(container) {
  const indexOf = p => PROJECTS.indexOf(p);
  const countFor = id => id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.tier === id).length;

  const cards = PROJECTS.map(p => `
    <button class="proj-card" type="button" data-project="${indexOf(p)}" data-tier="${p.tier}"
      aria-label="Open details for ${esc(p.title)}">
      <span class="proj-card-top">
        <span class="proj-card-rank">${esc(p.rank)}</span>
        <span class="proj-card-tier">${esc(TIER_META[p.tier].label)}</span>
      </span>
      <span class="proj-card-title">${esc(p.title)}</span>
      <span class="proj-card-desc">${esc(p.desc)}</span>
      <span class="proj-card-tags">${p.tags.map(t => `<i>${esc(t)}</i>`).join('')}</span>
    </button>`).join('');

  const filterButtons = FILTERS.map(f => `
    <button class="proj-filter${f.id === 'all' ? ' is-active' : ''}" type="button"
      data-filter="${f.id}" aria-pressed="${f.id === 'all'}">${esc(f.label)}<b>${countFor(f.id)}</b></button>`).join('');

  container.innerHTML = `
  <section class="section section-full" id="projects">
    <div class="section-inner-full proj-wrap">
      <header class="proj-head reveal d1">
        <div class="proj-head-copy">
          <span class="section-label">Selected work</span>
          <h2 class="section-title">Projects<span class="accent">.</span></h2>
          <p class="section-intro" data-role="subtitle">${INTRO_ALL}</p>
        </div>
        <div class="proj-filters" role="group" aria-label="Filter projects by tier">${filterButtons}</div>
      </header>
      <div class="proj-board reveal d2">
        <div class="proj-grid">${cards}</div>
      </div>
      <dialog class="project-detail" aria-labelledby="project-detail-title">
        <form method="dialog"><button class="project-detail-close" aria-label="Close details">&times;</button></form>
        <span class="project-detail-tier"></span>
        <h3 id="project-detail-title"></h3>
        <p class="project-detail-desc"></p>
        <div class="project-detail-tags"></div>
        <div class="project-detail-foot">
          <button class="project-detail-nav" type="button" data-step="-1" aria-label="Previous project">${CHEVRON('prev')}</button>
          <span class="project-detail-counter"></span>
          <button class="project-detail-nav" type="button" data-step="1" aria-label="Next project">${CHEVRON('next')}</button>
          <span class="project-detail-hint">Arrow keys to browse</span>
        </div>
      </dialog>
    </div>
  </section>`;

  const subtitle = container.querySelector('[data-role="subtitle"]');
  const grid = container.querySelector('.proj-grid');
  const cardEls = [...grid.querySelectorAll('.proj-card')];
  const filterBtns = [...container.querySelectorAll('.proj-filter')];
  const dialog = container.querySelector('.project-detail');
  const detailTier = dialog.querySelector('.project-detail-tier');
  const detailTitle = dialog.querySelector('#project-detail-title');
  const detailDesc = dialog.querySelector('.project-detail-desc');
  const detailTags = dialog.querySelector('.project-detail-tags');
  const detailCounter = dialog.querySelector('.project-detail-counter');

  let active = 0;
  let lastTrigger = null;

  const fill = p => {
    detailTier.textContent = TIER_META[p.tier].label;
    detailTitle.textContent = p.title;
    detailDesc.textContent = p.desc;
    detailTags.innerHTML = p.tags.map(t => `<span>${esc(t)}</span>`).join('');
    detailCounter.textContent = `${p.rank} / ${PROJECTS.length}`;
  };

  const open = (p, trigger) => {
    active = indexOf(p);
    lastTrigger = trigger;
    fill(p);
    dialog.showModal();
  };

  const step = dir => {
    active = (active + dir + PROJECTS.length) % PROJECTS.length;
    fill(PROJECTS[active]);
  };

  cardEls.forEach(card => {
    card.addEventListener('click', () => open(PROJECTS[Number(card.dataset.project)], card));
  });

  dialog.querySelectorAll('.project-detail-nav').forEach(btn => {
    btn.addEventListener('click', () => step(Number(btn.dataset.step)));
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
    else if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (lastTrigger) lastTrigger.focus();
  });

  /* ---- filtering ---- */
  const colCount = () => getComputedStyle(grid)
    .gridTemplateColumns.split(' ').filter(Boolean).length;

  const layoutGrid = () => {
    const cols = colCount();
    const visible = cardEls.filter(card => !card.classList.contains('is-hidden'));
    cardEls.forEach(card => card.style.removeProperty('grid-column'));
    grid.style.setProperty('--rows', Math.max(1, Math.ceil(visible.length / cols)));
    const remainder = visible.length % cols;
    if (remainder) visible[visible.length - 1].style.gridColumn = `span ${cols - remainder + 1}`;
  };

  const setFilter = id => {
    filterBtns.forEach(btn => {
      const on = btn.dataset.filter === id;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });
    cardEls.forEach(card => {
      const p = PROJECTS[Number(card.dataset.project)];
      card.classList.toggle('is-hidden', id !== 'all' && p.tier !== id);
    });
    subtitle.textContent = id === 'all' ? INTRO_ALL : TIER_META[id].line;
    layoutGrid();
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });
  window.addEventListener('resize', layoutGrid, { passive: true });
  layoutGrid();
}
