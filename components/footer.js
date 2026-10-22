export function render(container) {
  container.innerHTML = `
  <footer class="fun-footer">
    <canvas class="footer-canvas" id="footerCanvas"></canvas>
    <div class="footer-marquee">
      <div class="footer-track">
        <span>AVAILABLE FOR WORK ✦ OPEN TO COLLABORATIONS ✦ LET'S BUILD SOMETHING GREAT ✦ FULL-STACK DEVELOPER ✦ </span>
        <span>AVAILABLE FOR WORK ✦ OPEN TO COLLABORATIONS ✦ LET'S BUILD SOMETHING GREAT ✦ FULL-STACK DEVELOPER ✦ </span>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-big">[Your Name]</div>
      <div class="footer-links">
        <a href="mailto:[your@email.com]">Email</a>
        <a href="https://github.com/[your-github]">GitHub</a>
        <a href="https://linkedin.com/in/[your-linkedin]">LinkedIn</a>
        <a href="[your-website]">Website</a>
      </div>
      <div class="footer-copy">© 2026 · Built with vanilla HTML, CSS & JS · components</div>
    </div>
  </footer>`;

  // Soft floating particles animation
  const canvas = container.querySelector('#footerCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const PARTICLE_COUNT = 40;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width;
    h = canvas.height = rect.height;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        hue: Math.random() > 0.5 ? 50 : 320, // yellow or pink
        alpha: Math.random() * 0.4 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.alpha})`;
      ctx.fill();
      // soft glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.alpha * 0.15})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  initParticles();
  draw();
  window.addEventListener('resize', () => { resize(); initParticles(); });
}