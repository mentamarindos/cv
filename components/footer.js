export function render(container) {
  container.innerHTML = `
  <footer class="fun-footer">
    <canvas class="footer-canvas" id="footerCanvas"></canvas>
    <div class="footer-content">
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
    </div>
  </footer>`;

  const canvas = container.querySelector('#footerCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, t = 0;
  const DOT = 6; // pixel size
  const BAYER = [[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = Math.floor(rect.width / DOT);
    h = canvas.height = Math.floor(rect.height / DOT);
  }

  function draw() {
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, w, h);
    t += 0.02;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        // wave value
        const wave = Math.sin(x * 0.07 + t) * 0.5 +
                     Math.sin(y * 0.05 + t * 0.6) * 0.3 +
                     Math.sin((x + y) * 0.035 + t * 1.1) * 0.2;
        const v = (wave + 1) * 0.5; // 0..1
        const threshold = BAYER[y % 4][x % 4] / 16;
        if (v > threshold) {
          // soft cyan
          const bright = 0.25 + v * 0.25;
          ctx.fillStyle = `rgba(34, 211, 238, ${bright})`;
          ctx.fillRect(x, y, 1, 1);
        } else {
          // subtle violet
          if (v > threshold - 0.08) {
            ctx.fillStyle = `rgba(167, 139, 250, ${(v * 0.25)})`;
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
}