export function render(container) {
  container.innerHTML = `
  <section class="contact" id="contact">
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
  </section>`;
}