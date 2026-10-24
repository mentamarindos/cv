import { html, useState } from './preact.js';
import { SKILLS, STACK_CATS } from './data.js';

/* 4 copies per row = two identical halves, so the -50% keyframe
   loops seamlessly even when a filter leaves only a handful of chips */
const COPIES = [0, 1, 2, 3];

const Marquee = ({ items, reverse, playing, onToggle }) => html`
  <div class="marquee-clip">
    <div class=${'marquee ' + (reverse ? 'tgl' : 'hov') + (playing ? ' playing' : '')} onClick=${onToggle}>
      ${COPIES.flatMap((copy) => items.map(([name, , level], i) => html`
        <span key=${copy + '-' + i} class="tech">${name} <em>${level}%</em></span>`))}
    </div>
  </div>`;

export default function TechStack() {
  const [cat, setCat] = useState('all');
  const [playing, setPlaying] = useState(false); /* row 2: click to play */
  const list = cat === 'all' ? SKILLS : SKILLS.filter((s) => s[1] === cat);
  const half = Math.ceil(list.length / 2);

  return html`
    <section id="stack">
      <div class="sec-head">
        <h2>Tech Stack</h2>
        <span class="sec-note">( hover to play ↓ / click to play ↑ )</span>
      </div>
      <div class="tabs" role="group" aria-label="Filter skills by category">
        ${STACK_CATS.map(([id, label]) => html`
          <button key=${id} class=${'tab' + (id === cat ? ' on' : '')}
            aria-pressed=${String(id === cat)} onClick=${() => setCat(id)}>${label}</button>`)}
      </div>
      <${Marquee} items=${list.slice(0, half)} />
      <${Marquee} items=${list.slice(half)} reverse=${true} playing=${playing}
        onToggle=${() => setPlaying((p) => !p)} />
    </section>`;
}
