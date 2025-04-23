import { formacion } from 'formacion.js';

export function renderFormacion(containerId = "formacion") {
  const container = document.getElementById(containerId);
  if (!container) return;

  formacion.forEach(item => {
    const bloque = document.createElement("div");
    bloque.classList.add("mb-3");

    bloque.innerHTML = `
      <div class="row">
        <p class="col-8 m-0 edu-title">${item.titulo}</p>
        <p class="col-12 col-md-4 m-0 edu-date">${item.fecha}</p>
      </div>
      <p class="edu-institution">${item.institucion}</p>
    `;

    container.appendChild(bloque);
  });
}
