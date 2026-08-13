
const params = new URLSearchParams(window.location.search);
const slug = params.get("p");
const project = PROJECTS.find(p => p.slug === slug) || PROJECTS[0];
const root = document.getElementById("project-detail");

document.title = `${project.title} | Justin Huang`;

const cover = project.image
  ? `<img src="${project.image}" alt="${project.imageAlt || project.title}">`
  : `<div class="detail-placeholder">Project image coming soon.</div>`;

const demoButton = project.demoUrl
  ? `<a class="button primary demo-button" href="${project.demoUrl}" target="_blank" rel="noopener">▶ Watch Flight Demo</a>`
  : "";

const gallery = project.gallery?.length
  ? `
    <section class="section shell">
      <div class="section-heading">
        <div>
          <span class="eyebrow">Build & testing</span>
          <h2>Project gallery</h2>
        </div>
      </div>
      <div class="gallery-grid">
        ${project.gallery.map(item => `
          <figure class="gallery-card">
            <img src="${item.src}" alt="${item.alt}">
            <figcaption>${item.caption}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `
  : "";

root.innerHTML = `
  <section class="project-hero shell">
    <a class="back-link" href="index.html#projects">← Back to projects</a>

    <div class="project-title-wrap">
      <div>
        <span class="eyebrow">${project.category} · ${project.year}</span>
        <h1>${project.title}</h1>
        <p class="project-lede">${project.summary}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-actions">
          ${demoButton}
        </div>
      </div>

      <div class="metrics">
        ${project.metrics.map(([value, label]) => `
          <div class="metric">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `).join("")}
      </div>
    </div>
  </section>

  <div class="detail-cover">${cover}</div>

  <section class="section shell">
    <div class="detail-grid">
      <article class="detail-block">
        <span class="eyebrow">Overview</span>
        <h2>What I built</h2>
        <p>${project.overview}</p>
      </article>

      <aside class="detail-block">
        <span class="eyebrow">Stack</span>
        <h2>Tools & technologies</h2>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </aside>
    </div>
  </section>

  <section class="section shell">
    <div class="detail-grid">
      <article class="detail-block">
        <span class="eyebrow">Engineering work</span>
        <h2>Highlights</h2>
        <ul>
          ${project.highlights.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </article>

      <aside class="detail-block">
        <span class="eyebrow">System view</span>
        <h2>Architecture</h2>
        <div class="architecture">
          ${project.architecture.map((item, i) =>
            `<div class="arch-node">${item}</div>${i < project.architecture.length - 1 ? '<div class="arch-arrow">↓</div>' : ''}`
          ).join("")}
        </div>
      </aside>
    </div>
  </section>

  ${gallery}
`;
