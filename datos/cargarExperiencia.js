import { experiencia } from './experiencia.js';

export function renderExperience(containerId = "experiencia") {
const container = document.getElementById(containerId);

experiencia.forEach(item => {
  const bloque = document.createElement("div");
  bloque.classList.add("mb-4");

  bloque.innerHTML = `
    <div class="row">
      <p class="col-8 m-0 font-weight-bold job-title">${item.puesto}</p>
      <p class="col-12 col-md-4 m-0 job-date">${item.fecha}</p>
    </div>
    <p class="text-muted m-0 job-company">${item.empresa}</p>
    <p>${item.descripcion}</p>
  `;

  container.appendChild(bloque);
})};
