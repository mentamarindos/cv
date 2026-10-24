export function render(container) {
  container.innerHTML = `
  <header class="hero">
    <div class="hero-grid"></div>
    <div class="hero-inner">
      <div class="hero-top">
        <div class="hero-tag"><span class="dot"></span>Available for work</div>
        <div class="hero-meta">[Your City] · [Your Country]<br/><strong>Full-Stack Developer</strong></div>
      </div>
      <h1>
        <span class="outline">Full-Stack</span><br/>
        <span class="accent">Developer.</span>
      </h1>
      <div class="hero-bottom">
        <p class="hero-desc">I design and ship web, mobile and desktop applications — from AI agents and marketplaces to POS systems and image editors.</p>
        <div class="hero-stats">
          <div class="hero-stat"><div class="num">20+</div><div class="lbl">Projects</div></div>
          <div class="hero-stat"><div class="num">6</div><div class="lbl">Stacks</div></div>
          <div class="hero-stat"><div class="num">3</div><div class="lbl">Platforms</div></div>
        </div>
        <div class="hero-cta">
          <a class="btn primary" href="#projects">View projects</a>
          <a class="btn" href="#contact">Get in touch</a>
        </div>
      </div>
    </div>
  </header>`;
}