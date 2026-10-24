export function render(container) {
  container.innerHTML = `
  <section class="contact" id="contact">
    <canvas class="contact-canvas" id="contactCanvas"></canvas>
    <div class="contact-layout">
      <div class="contact-big">
        <h2>Let's work<br/><span class="accent">together.</span></h2>
        <p>Open to full-time roles, freelance and collaborations. Available for remote work worldwide.</p>
      </div>
      <div class="contact-links">
        <a class="contact-link" href="mailto:[your@email.com]"><span>[your@email.com]</span><span class="arrow">↗</span></a>
        <a class="contact-link" href="https://github.com/[your-github]"><span>github.com/[your-github]</span><span class="arrow">↗</span></a>
        <a class="contact-link" href="https://linkedin.com/in/[your-linkedin]"><span>linkedin.com/in/[your-linkedin]</span><span class="arrow">↗</span></a>
        <a class="contact-link" href="[your-website]"><span>[your-website]</span><span class="arrow">↗</span></a>
      </div>
    </div>
    <div class="contact-footer">© 2026 [Your Name] · Built with vanilla HTML, CSS & JS</div>
  </section>`;

  // Wavy dither canvas (moved from footer)
  const canvas = container.querySelector('#contactCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, t = 0;
  const DOT = 6;
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
        const wave = Math.sin(x * 0.07 + t) * 0.5 +
                     Math.sin(y * 0.05 + t * 0.6) * 0.3 +
                     Math.sin((x + y) * 0.035 + t * 1.1) * 0.2;
        const v = (wave + 1) * 0.5;
        const threshold = BAYER[y % 4][x % 4] / 16;
        if (v > threshold) {
          const bright = 0.2 + v * 0.2;
          ctx.fillStyle = `rgba(34, 211, 238, ${bright})`;
          ctx.fillRect(x, y, 1, 1);
        } else {
          if (v > threshold - 0.08) {
            ctx.fillStyle = `rgba(167, 139, 250, ${v * 0.2})`;
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