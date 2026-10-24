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

const GLYPHS = {
  plyntar:'Pl',yaukos:'Yx',posdesktop:'POS',enigmatic:'En',encorepad:'Ep',
  noventaynueve:'99',securedrop:'Sd',surveypulse:'Sv',spotdiff:'Sp',cryptools:'Cr',
  hatorreyes:'Ht',linkedinhide:'in',prompthub:'Ph',middlemen:'Mm',depth:'3D',
  footerforge:'Ff',hiringradar:'Hr',cinebooker:'Cb',aliexpress:'Ae',audiorec:'Ar'
};

const TIER_META = {
  'tier-1': { label:'Big builds', blurb:'Worth a closer look', line:'The five that got the most attention.' },
  'tier-2': { label:'Workhorses', blurb:'Shipped and running', line:'Seven tools that earn their keep.' },
  'tier-3': { label:'Side quests', blurb:'Small but real', line:'Eight rabbit holes worth the trip.' }
};

const FILTERS = [
  { id:'all', label:'All' },
  { id:'tier-1', label:TIER_META['tier-1'].label },
  { id:'tier-2', label:TIER_META['tier-2'].label },
  { id:'tier-3', label:TIER_META['tier-3'].label }
];

const esc = value => String(value)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const ARROW = `<svg class="launch-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6"/></svg>`;
const CHEVRON = dir => `<svg class="launch-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="${dir === 'prev' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'}"/></svg>`;

export function render(container) {
  const indexOf = p => PROJECTS.indexOf(p);
  const featured = PROJECTS.filter(p => p.tier === 'tier-1');
  const rest = PROJECTS.filter(p => p.tier !== 'tier-1');
  const countFor = id => id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.tier === id).length;
  const glyphFor = p => GLYPHS[p.seed] || p.title.slice(0, 2);
  const icon = p => `<span class="launch-icon launch-tone-${indexOf(p) % 8}"><span>${esc(glyphFor(p))}</span></span>`;

  const widgets = featured.map((p, i) => {
    const lead = i === 0;
    return `
    <button class="launch-widget launch-rise${lead ? ' launch-widget--lead' : ''}" type="button"
      style="--i:${i}" data-project="${indexOf(p)}" data-tier="${p.tier}"
      aria-label="Open details for ${esc(p.title)}">
      ${lead ? `
      <span class="launch-widget-lead">
        <span class="launch-widget-copy">
          <span class="launch-widget-top"><span class="launch-widget-label">Big idea</span></span>
          <span class="launch-widget-title">${esc(p.title)}</span>
          <span class="launch-widget-desc">${esc(p.desc)}</span>
          <span class="launch-widget-foot">
            <span class="launch-widget-tags">${p.tags.map(t => `<i>${esc(t)}</i>`).join('')}</span>
            <span class="launch-widget-cta">Open details ${ARROW}</span>
          </span>
        </span>
        <span class="launch-widget-poster launch-tone-${indexOf(p) % 8}" data-rank="${p.rank}" aria-hidden="true">${esc(glyphFor(p))}</span>
      </span>` : `
      <span class="launch-widget-top">${icon(p)}<span class="launch-widget-label">${esc(p.tags[0])}</span><span class="launch-widget-rank">${p.rank}</span></span>
      <span class="launch-widget-copy">
        <span class="launch-widget-title">${esc(p.title)}</span>
        <span class="launch-widget-desc">${esc(p.desc)}</span>
        <span class="launch-widget-tags">${p.tags.slice(0, 2).map(t => `<i>${esc(t)}</i>`).join('')}</span>
      </span>
      <span class="launch-widget-cta launch-widget-cta--ghost" aria-hidden="true">${ARROW}</span>`}
    </button>`;
  }).join('');

  const appTiles = rest.map((p, i) => `
    <button class="launch-app launch-rise" type="button" style="--i:${featured.length + i}"
      data-project="${indexOf(p)}" data-tier="${p.tier}"
      aria-label="Open details for ${esc(p.title)}">
      ${icon(p)}
      <span class="launch-app-name">${esc(p.title)}</span>
      <span class="launch-app-desc">${esc(p.desc)}</span>
      <span class="launch-app-meta">${esc(p.tags[0])}</span>
    </button>`).join('');

  const filterButtons = FILTERS.map(f => `
    <button class="launch-filter${f.id === 'all' ? ' is-active' : ''}" type="button"
      data-filter="${f.id}" aria-pressed="${f.id === 'all'}">${esc(f.label)}<b>${countFor(f.id)}</b></button>`).join('');

  container.innerHTML = `
  <section class="section section-full" id="projects">
    <div class="section-inner-full">
      <div class="project-playground">
        <header class="launch-head launch-rise" style="--i:0">
          <div class="launch-head-copy">
            <h2>Pick a project<span>.</span></h2>
            <p data-role="subtitle">Five big builds. Fifteen more rabbit holes.</p>
          </div>
          <div class="launch-tools">
            <div class="launch-filters" role="group" aria-label="Filter projects by tier">
              ${filterButtons}
            </div>
            <div class="launch-count"><strong>${PROJECTS.length}</strong><span>things<br>made</span></div>
          </div>
        </header>
        <div class="launch-layout" data-view="all">
          <section class="launch-widgets" aria-label="Featured projects">
            <div class="launch-section-heading"><h3>Big builds</h3><span>${TIER_META['tier-1'].blurb}</span></div>
            <div class="launch-widget-grid">${widgets}</div>
          </section>
          <section class="launch-apps" aria-label="All other projects">
            <div class="launch-section-heading"><h3>Explore the rest</h3><span>${rest.length} tiny doors</span></div>
            <div class="launch-app-grid">${appTiles}</div>
          </section>
        </div>
        <dialog class="project-detail" aria-labelledby="project-detail-title">
          <form method="dialog"><button class="project-detail-close" aria-label="Close details">&times;</button></form>
          <div class="project-detail-head">
            <span class="project-detail-icon"></span>
            <div class="project-detail-meta">
              <span class="project-detail-tier"></span>
              <h3 id="project-detail-title"></h3>
            </div>
          </div>
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
    </div>
  </section>`;

  const playground = container.querySelector('.project-playground');
  const layout = container.querySelector('.launch-layout');
  const appsGrid = container.querySelector('.launch-app-grid');
  const widgetsSection = container.querySelector('.launch-widgets');
  const appsSection = container.querySelector('.launch-apps');
  const appsTitle = appsSection.querySelector('h3');
  const appsNote = appsSection.querySelector('span');
  const subtitle = container.querySelector('[data-role="subtitle"]');
  const filterBtns = [...container.querySelectorAll('.launch-filter')];
  const cards = [...container.querySelectorAll('[data-project]')];
  const dialog = container.querySelector('.project-detail');
  const detailIcon = dialog.querySelector('.project-detail-icon');
  const detailTier = dialog.querySelector('.project-detail-tier');
  const detailTitle = dialog.querySelector('#project-detail-title');
  const detailDesc = dialog.querySelector('.project-detail-desc');
  const detailTags = dialog.querySelector('.project-detail-tags');
  const detailCounter = dialog.querySelector('.project-detail-counter');

  let active = 0;
  let lastTrigger = null;

  const fill = p => {
    detailIcon.className = `project-detail-icon launch-tone-${indexOf(p) % 8}`;
    detailIcon.textContent = glyphFor(p);
    detailTier.textContent = TIER_META[p.tier].label;
    detailTitle.textContent = p.title;
    detailDesc.textContent = p.desc;
    detailTags.innerHTML = p.tags.map(t => `<span>${esc(t)}</span>`).join('');
    detailCounter.textContent = `${String(indexOf(p) + 1).padStart(2,'0')} / ${PROJECTS.length}`;
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

  cards.forEach(card => {
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
  const wide = () => window.matchMedia('(min-width:901px)').matches;

  const layoutRestGrid = () => {
    const tiles = [...appsGrid.querySelectorAll('.launch-app')];
    const visible = tiles.filter(card => !card.classList.contains('is-hidden'));
    tiles.forEach(card => card.style.removeProperty('grid-column'));
    appsGrid.style.removeProperty('--cols');
    if (layout.dataset.view === 'featured' || !visible.length) return;
    const all = layout.dataset.view === 'all';
    const cols = all ? 4 : Math.max(1, Math.ceil(visible.length / 2));
    appsGrid.style.setProperty('--cols', cols);
    const remainder = visible.length % cols;
    if (remainder && (!all || wide())) {
      visible[visible.length - 1].style.gridColumn = `span ${cols - remainder + 1}`;
    }
  };

  const setFilter = id => {
    filterBtns.forEach(btn => {
      const on = btn.dataset.filter === id;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });
    widgetsSection.hidden = !(id === 'all' || id === 'tier-1');
    appsSection.hidden = id === 'tier-1';
    layout.dataset.view = id === 'all' ? 'all' : (id === 'tier-1' ? 'featured' : 'rest');
    cards.forEach(card => {
      const p = PROJECTS[Number(card.dataset.project)];
      card.classList.toggle('is-hidden', id !== 'all' && p.tier !== id);
    });
    if (id === 'all') {
      appsTitle.textContent = 'Explore the rest';
      appsNote.textContent = `${rest.length} tiny doors`;
      subtitle.textContent = 'Five big builds. Fifteen more rabbit holes.';
    } else {
      appsTitle.textContent = TIER_META[id].label;
      appsNote.textContent = TIER_META[id].blurb;
      subtitle.textContent = TIER_META[id].line;
    }
    layoutRestGrid();
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });
  window.addEventListener('resize', layoutRestGrid, { passive: true });
  layoutRestGrid();

  /* ---- one orchestrated entrance, played when the section arrives ---- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playground.classList.add('is-ready');
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(playground);
  } else {
    playground.classList.add('is-ready');
  }

  /* ---- pointer spotlight ---- */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf = null;
    playground.addEventListener('pointermove', event => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = playground.getBoundingClientRect();
        playground.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        playground.style.setProperty('--my', `${event.clientY - rect.top}px`);
        raf = null;
      });
    });
  }
}
