import { html } from './preact.js';
import { PROFILE } from './data.js';
import { ArrowRight } from './icons.js';

export default function CTA() {
  return html`
    <div class="cta">
      <div class="sec-head"><h2>Scrolled Too Far</h2></div>
      <div class="cta-inner">
        <p class="cta-sub">${PROFILE.ctaLine}</p>
        <a class="btn-talk" href="mailto:${PROFILE.email}">
          <span class="btn-shine"></span>
          Let's Talk <${ArrowRight} />
        </a>
      </div>
    </div>`;
}
