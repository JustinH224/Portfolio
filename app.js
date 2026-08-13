
const grid = document.getElementById("project-grid");

function projectCard(project) {
  const image = project.image
    ? `<img src="${project.image}" alt="${project.imageAlt || project.title}">`
    : `<div class="project-placeholder">${project.title.split(" ").slice(0,2).map(w => w[0]).join("")}</div>`;

  return `
    <a class="project-card" href="project.html?p=${encodeURIComponent(project.slug)}">
      <div class="project-image">${image}</div>
      <div class="project-body">
        <span class="project-kicker">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="card-footer">
          <span>${project.year}</span>
          <span class="open-label">Open project →</span>
        </div>
      </div>
    </a>
  `;
}

grid.innerHTML = PROJECTS.map(projectCard).join("");
