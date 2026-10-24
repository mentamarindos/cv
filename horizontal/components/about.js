export function render(container) {
  container.innerHTML = `
  <section class="section" id="about">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-label">01 / About</div>
        <div>
          <h2 class="section-title">Crafting software<br/>with <span class="accent">intent</span>.</h2>
          <p class="section-intro">I work across the full stack — frontend, backend, mobile, desktop and AI — turning ideas into production-grade products.</p>
        </div>
      </div>
      <div class="about-layout">
        <div class="about-big">
          <h3>Building products that <span class="accent">matter</span> and ship.</h3>
          <p class="about-desc">End-to-end products: web apps, mobile (Expo/React Native), desktop (Tauri/Go), REST APIs, AI agents and Chrome extensions. From database schema to polished UI.</p>
        </div>
        <div class="about-features">
          <div class="about-feat"><div class="feat-num">01</div><h4>Full-Stack</h4><p>Frontend to backend, database to deploy.</p></div>
          <div class="about-feat"><div class="feat-num">02</div><h4>Ship-Focused</h4><p>Pragmatic, quality-driven. Clean architecture.</p></div>
          <div class="about-feat"><div class="feat-num">03</div><h4>Tested</h4><p>Unit + E2E. Vitest, Playwright.</p></div>
          <div class="about-feat"><div class="feat-num">04</div><h4>Multi-Platform</h4><p>Web, mobile, desktop, extensions.</p></div>
        </div>
      </div>
      <div class="about-stats">
        <div class="about-stat"><div class="num">20+</div><div class="lbl">Projects shipped</div></div>
        <div class="about-stat"><div class="num">6+</div><div class="lbl">Tech stacks</div></div>
        <div class="about-stat"><div class="num">3+</div><div class="lbl">Platforms</div></div>
      </div>
    </div>
  </section>`;
}