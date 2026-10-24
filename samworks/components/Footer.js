import { html, Fragment } from './preact.js';
import { PROFILE } from './data.js';

export default function Footer() {
  return html`
    <${Fragment}>
      <footer>
        <div class="foot-quote">
          <div class="foot-mark">“</div>
          <p>${PROFILE.quote.text}</p>
          <div class="foot-attr"><span>${PROFILE.quote.by}</span></div>
        </div>
      </footer>
      <div class="band"></div>
      <div class="foot-bottom">
        <span>Designed & Developed by <b>${PROFILE.name}</b></span>
        <span>© 2026 · Built with vanilla HTML, CSS & JS</span>
      </div>
    <//>`;
}
