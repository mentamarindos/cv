import { html, Fragment, useState, useEffect } from './preact.js';
import { PROFILE } from './data.js';
import { Eye } from './icons.js';

/* Reproduces the original type/erase cycle: a role appears as a
   letter wave (staggered ch-in animation), holds, erases from the
   end, then the next role mounts. `gen` changes per role so all
   letter spans remount and the wave replays. */
function useTypewriter(roles, enabled) {
  const [st, setSt] = useState({ str: roles[0], shown: roles[0].length, gen: 0 });

  useEffect(() => {
    if (!enabled) return;
    let t, idx = 0, shown = roles[0].length, gen = 0;

    const show = () => {
      const str = roles[idx % roles.length];
      shown = str.length;
      setSt({ str, shown, gen });
      t = setTimeout(erase, str.length * 45 + 2200);
    };
    const erase = () => {
      shown--;
      setSt((s) => ({ ...s, shown }));
      if (shown <= 0) { gen++; idx++; t = setTimeout(show, 350); }
      else t = setTimeout(erase, 28);
    };

    t = setTimeout(show, 2200);
    return () => clearTimeout(t);
  }, [enabled]);

  return enabled ? st : { str: roles[0], shown: roles[0].length, gen: 0 };
}

export default function Hero() {
  const [views, setViews] = useState(0);
  const [reduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const { str, shown, gen } = useTypewriter(PROFILE.roles, !reduced);

  useEffect(() => {
    const n = parseInt(localStorage.getItem('cv-views') || '0', 10) + 1;
    localStorage.setItem('cv-views', String(n));
    setViews(19 + n);
  }, []);

  return html`
    <${Fragment}>
      <div class="banner" role="img" aria-label="Decorative banner">
        <div class="banner-art"></div>
        <div class="banner-grain"></div>
      </div>
      <section class="profile">
        <div class="avatar">${PROFILE.avatarInitial}</div>
        <div class="profile-main">
          ${PROFILE.available && html`
            <div class="greet"><i class="avail"></i> Available for work</div>`}
          <h1 class="name">${PROFILE.name}</h1>
          <div class="role" aria-label=${PROFILE.roles[0]}>
            ${[...str.slice(0, shown)].map((c, i) => html`
              <span key=${gen + '-' + i} class="ch" style=${{ animationDelay: i * 45 + 'ms' }}>${c}</span>`)}
            <i class="caret"></i>
          </div>
          <div class="loc">${PROFILE.city} · ${PROFILE.country}</div>
        </div>
        <div class="views" title="Profile views">
          <${Eye} /> <span>${views}</span>
        </div>
      </section>
    <//>`;
}
