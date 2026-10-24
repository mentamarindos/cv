import { html } from './preact.js';
import { ABOUT } from './data.js';

export default function About() {
  return html`
    <section id="about">
      <div class="sec-head"><h2>About</h2></div>
      <ul class="about-list">
        ${ABOUT.bullets.map((segs, bi) => html`
          <li key=${bi}><span>
            ${segs.map((seg, si) => seg.href
              ? html`<a key=${si} href=${seg.href}>${seg.t}</a>`
              : seg.t)}
          </span></li>`)}
      </ul>
      <div class="about-stats">
        ${ABOUT.stats.map(([num, label]) => html`
          <div key=${label}><b>${num}</b><span>${label}</span></div>`)}
      </div>
    </section>`;
}
