import { html } from './preact.js';
import { GITHUB_LEVELS } from './data.js';

const WEEKS = 52;
const DAYS = 7;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* deterministic placeholder so the section looks alive until the real
   matrix lands in data.js — same seed always draws the same grid */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const levels = GITHUB_LEVELS ?? (() => {
  const rnd = mulberry32(20261024);
  return Array.from({ length: WEEKS }, () =>
    Array.from({ length: DAYS }, () => {
      const r = rnd();
      return r > 0.94 ? 4 : r > 0.84 ? 3 : r > 0.68 ? 2 : r > 0.42 ? 1 : 0;
    })
  );
})();

const Cell = ({ l }) => html`<div class=${'gh-cell' + (l ? ' l' + l : '')}></div>`;

export default function GitHubActivity() {
  return html`
    <section id="activity">
      <div class="sec-head"><h2>GitHub Activity</h2></div>
      <div class="gh">
        <div class="gh-months" aria-hidden="true">
          ${MONTHS.map((m) => html`<span key=${m}>${m}</span>`)}
        </div>
        <div class="gh-grid" role="img" aria-label="Contribution activity for the last year">
          ${levels.map((week, w) => html`
            <div class="gh-week" key=${w}>${week.map((l, d) => html`<${Cell} key=${d} l=${l} />`)}</div>`)}
        </div>
      </div>
      <div class="gh-legend">
        Less
        ${[0, 1, 2, 3, 4].map((l) => html`<${Cell} key=${l} l=${l} />`)}
        More
      </div>
    </section>`;
}
