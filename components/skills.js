export function render(container) {
  container.innerHTML = `
  <section class="section" id="skills">
    <div class="section-inner">
      <div class="section-head">
        <div class="section-label">02 / Skills</div>
        <div><h2 class="section-title">Tools of the <span class="accent">trade</span>.</h2></div>
      </div>
      <div class="skills-container">
        <div class="skill-block">
          <h4>Frontend</h4>
          <div class="skill-items">
            <div class="skill-item"><span class="name">TypeScript</span><div class="bar w90"></div></div>
            <div class="skill-item"><span class="name">React / Next.js</span><div class="bar w85"></div></div>
            <div class="skill-item"><span class="name">Astro / SolidJS</span><div class="bar w80"></div></div>
            <div class="skill-item"><span class="name">Tailwind CSS</span><div class="bar w85"></div></div>
          </div>
        </div>
        <div class="skill-block">
          <h4>Backend</h4>
          <div class="skill-items">
            <div class="skill-item"><span class="name">Node.js / Bun</span><div class="bar w90"></div></div>
            <div class="skill-item"><span class="name">Laravel / PHP</span><div class="bar w80"></div></div>
            <div class="skill-item"><span class="name">Go</span><div class="bar w75"></div></div>
            <div class="skill-item"><span class="name">Supabase / Postgres</span><div class="bar w85"></div></div>
          </div>
        </div>
        <div class="skill-block">
          <h4>Mobile & Desktop</h4>
          <div class="skill-items">
            <div class="skill-item"><span class="name">React Native / Expo</span><div class="bar w85"></div></div>
            <div class="skill-item"><span class="name">Tauri / Rust</span><div class="bar w80"></div></div>
            <div class="skill-item"><span class="name">Kotlin / Android</span><div class="bar w70"></div></div>
            <div class="skill-item"><span class="name">SQLite</span><div class="bar w85"></div></div>
          </div>
        </div>
        <div class="skill-block">
          <h4>AI & Data</h4>
          <div class="skill-items">
            <div class="skill-item"><span class="name">LLMs / MCP</span><div class="bar w80"></div></div>
            <div class="skill-item"><span class="name">OpenCV</span><div class="bar w75"></div></div>
            <div class="skill-item"><span class="name">Drizzle ORM</span><div class="bar w85"></div></div>
            <div class="skill-item"><span class="name">Cloudflare</span><div class="bar w80"></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}