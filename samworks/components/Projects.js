import { html, Fragment, useState } from './preact.js';
import { PROJECTS, TIERS, GLYPHS } from './data.js';

const INTRO = 'Twenty shipped builds across web, desktop, mobile and CLI.';
const TABS = [
  { id: 'all', label: 'All', count: PROJECTS.length },
  ...Object.entries(TIERS).map(([id, m]) => ({
    id, label: m.plural, count: PROJECTS.filter((p) => p.tier === id).length,
  })),
];

function splitTitle(title) {
  const at = title.indexOf(' — ');
  return at === -1 ? [title, ''] : [title.slice(0, at), title.slice(at + 3)];
}

const ProjectCard = ({ p }) => {
  const [name, tagline] = splitTitle(p.title);
  const glyph = GLYPHS[p.seed] || name.slice(0, 2);
  return html`
    <article class="proj-card">
      <div class="thumb">
        <div class=${'thumb-art tt' + p.tier.slice(1)}><span>${glyph}</span></div>
        <span class="thumb-pill">${TIERS[p.tier].label}</span>
      </div>
      <div class="proj-top">
        <span class="proj-name">${name}</span>
        ${tagline && html`<span class="proj-tag">${tagline}</span>`}
        <span class="proj-rank">${p.rank} / ${PROJECTS.length}</span>
      </div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">
        ${p.tags.map((t, i) => html`
          <${Fragment} key=${t}>${i > 0 && html`<i>·</i>`}<span>${t}</span><//>`)}
      </div>
    </article>`;
};

export default function Projects() {
  const [tier, setTier] = useState('all');
  const list = tier === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tier === tier);

  return html`
    <section id="projects">
      <div class="sec-head"><h2>Projects</h2></div>
      <p class="sec-intro">${tier === 'all' ? INTRO : TIERS[tier].line}</p>
      <div class="tabs" role="group" aria-label="Filter projects by tier">
        ${TABS.map((t) => html`
          <button key=${t.id} class=${'tab' + (t.id === tier ? ' on' : '')}
            aria-pressed=${String(t.id === tier)} onClick=${() => setTier(t.id)}>
            ${t.label}<b>${t.count}</b>
          </button>`)}
      </div>
      <div class="proj-grid">
        ${list.map((p) => html`<${ProjectCard} key=${p.rank} p=${p} />`)}
      </div>
    </section>`;
}
