const PROJECTS = [
  { rank:'01', tier:'tier-1', title:'Plyntar — Magic Image Editor', desc:'Web image editor with bg removal & text overlays. Supabase + Cloudflare Workers, AdonisJS backend, MinIO.', tags:['React','TS','Supabase','Cloudflare'], seed:'plyntar' },
  { rank:'02', tier:'tier-1', title:'Yaukos Express Web', desc:'Marketplace (Astro+React) with Supabase, R2, Playwright E2E, Vitest. Deployed on Cloudflare.', tags:['Astro','React','Supabase'], seed:'yaukos' },
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
  const slides = PROJECTS.map((p, i) => `
    <div class="proj-slide" data-index="${i}">
      <div class="proj-visual">
        <div class="shot" style="background:linear-gradient(135deg,#1a1a1a,#111)">
          <img src="https://picsum.photos/seed/${p.seed}/640/400" alt="${p.title}" loading="lazy"
               style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55;mix-blend-mode:luminosity" />
          <span class="tier-badge ${p.tier}">${p.tier.replace('tier-','Tier ')}</span>
        </div>
        <div class="glow"></div>
      </div>
      <div class="proj-info">
        <div class="proj-rank">${p.rank} / ${String(PROJECTS.length).padStart(2,'0')}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  const dots = PROJECTS.map((_, i) => `<button class="proj-dot${i===0?' active':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('');

  container.innerHTML = `
  <section class="section" id="projects">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-label">03 / Projects</div>
        <div>
          <h2 class="section-title">Selected <span class="accent">work</span>.</h2>
          <p class="section-intro">A curated, ranked set of projects — from production apps to experiments. Use arrows, dots, or ←/→.</p>
        </div>
      </div>
      <div class="proj-carousel" id="projCarousel">
        <div class="proj-track" id="projTrack">${slides}</div>
        <div class="proj-controls">
          <div class="proj-dots" id="projDots">${dots}</div>
          <div style="display:flex;align-items:center">
            <span class="proj-counter" id="projCounter">01 / ${String(PROJECTS.length).padStart(2,'0')}</span>
            <div class="proj-arrows">
              <button class="proj-arrow" id="projPrev" aria-label="Previous">←</button>
              <button class="proj-arrow" id="projNext" aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  // Carousel logic
  const track = container.querySelector('#projTrack');
  const dotsEl = container.querySelector('#projDots');
  const counter = container.querySelector('#projCounter');
  const prevBtn = container.querySelector('#projPrev');
  const nextBtn = container.querySelector('#projNext');
  let idx = 0;
  let autoTimer = null;
  const total = PROJECTS.length;

  function goTo(i) {
    idx = (i + total) % total;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dotsEl.querySelectorAll('.proj-dot').forEach((d, j) => d.classList.toggle('active', j === idx));
    counter.textContent = `${String(idx+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
  }

  function next() { goTo(idx + 1); }
  function prev() { goTo(idx - 1); }

  prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
  dotsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.proj-dot');
    if (!btn) return;
    stopAuto(); goTo(parseInt(btn.dataset.i, 10)); startAuto();
  });

  function startAuto() { autoTimer = setInterval(next, 5000); }
  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

  const carousel = container.querySelector('#projCarousel');
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  // keyboard
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { stopAuto(); next(); startAuto(); }
    if (e.key === 'ArrowLeft') { stopAuto(); prev(); startAuto(); }
  });

  // parallax on shot
  container.querySelectorAll('.proj-visual').forEach(v => {
    v.addEventListener('mousemove', (e) => {
      const r = v.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const shot = v.querySelector('.shot');
      if (shot) shot.style.transform = `scale(1.04) translate(${x*8}px, ${y*8}px)`;
    });
    v.addEventListener('mouseleave', () => {
      const shot = v.querySelector('.shot');
      if (shot) shot.style.transform = '';
    });
  });

  startAuto();
}