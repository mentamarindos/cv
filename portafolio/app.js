import { html, render, useState, useEffect } from './components/preact.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
import TechStack from './components/TechStack.js';
import GitHubActivity from './components/GitHubActivity.js';
import CTA from './components/CTA.js';
import Footer from './components/Footer.js';

const Rule = () => html`<div class="rule"></div>`;
const Band = () => html`<div class="band"></div>`;

function App() {
  /* initial class was set by the inline bootstrap in index.html;
     read it here so the toggle state matches the pre-paint theme */
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('light') ? 'light' : 'dark'
  );
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('cv-theme', theme);
  }, [theme]);

  return html`
    <${Header} theme=${theme} onToggle=${() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))} />
    <main id="top">
      <div class="col">
        <${Hero} />
        <${Rule} />
        <${About} />
        <${Rule} />
        <${Contact} />
        <${Band} />
        <${Projects} />
        <${Band} />
        <${TechStack} />
        <${Rule} />
        <${GitHubActivity} />
        <${Band} />
        <${CTA} />
        <${Rule} />
        <${Footer} />
      </div>
    </main>`;
}

render(html`<${App} />`, document.getElementById('app'));
