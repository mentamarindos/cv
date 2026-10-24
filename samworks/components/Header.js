import { html, useState, useEffect } from './preact.js';
import { PROFILE } from './data.js';
import { Sun, Moon, Chevron } from './icons.js';

const NAV = [['#top', 'Home'], ['#projects', 'Projects'], ['#stack', 'Stack']];
const MENU = [['#about', 'About'], ['#projects', 'Projects'], ['#stack', 'Tech Stack'], ['#activity', 'GitHub Activity'], ['#contact', 'Contact']];

export default function Header({ theme, onToggle }) {
  const [open, setOpen] = useState(false);

  /* any click outside the dropdown closes it */
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);

  return html`
    <header>
      <div class="header-in">
        <a class="logo" href="#top">${PROFILE.logo}</a>
        <nav>
          ${NAV.map(([href, label], i) => html`
            <a key=${href} class=${'nav-link' + (i === 0 ? ' active' : '')} href=${href}>${label}</a>`)}
          <div class=${'more-wrap' + (open ? ' open' : '')}>
            <button aria-haspopup="true" aria-expanded=${String(open)}
              onClick=${(e) => { e.stopPropagation(); setOpen(!open); }}>
              More <${Chevron} />
            </button>
            <div class="more-menu">
              ${MENU.map(([href, label]) => html`<a key=${href} href=${href}>${label}</a>`)}
            </div>
          </div>
          <button class="icon-btn" onClick=${onToggle} title="Toggle theme" aria-label="Toggle theme">
            <${theme === 'light' ? Moon : Sun} />
          </button>
        </nav>
      </div>
    </header>`;
}
