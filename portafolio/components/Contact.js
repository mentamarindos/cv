import { html } from './preact.js';
import { CONTACTS } from './data.js';
import { icons, ArrowUpRight } from './icons.js';

export default function Contact() {
  return html`
    <section id="contact">
      <div class="sec-head"><h2>Contact</h2></div>
      <div class="contact-grid">
        ${CONTACTS.map((c) => html`
          <a key=${c.label} class="contact-cell" href=${c.href}
            target=${c.external ? '_blank' : undefined}
            rel=${c.external ? 'noopener' : undefined}>
            <span class="contact-ic"><${icons[c.icon]} /></span>
            <span class="contact-label"><b>${c.label}</b><span>${c.handle}</span></span>
            <${ArrowUpRight} />
          </a>`)}
      </div>
    </section>`;
}
