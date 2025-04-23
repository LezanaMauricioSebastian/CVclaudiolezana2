function renderCourses(containerId = "cursos") {
const contenedor = document.getElementById(containerId);

    cursos.forEach(curso => {
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `
        <p class="col-9 font-weight-bold m-0">${curso.titulo}</p>
        <p class="col-3 m-0">${curso.fecha}</p>
      `;
      
      const desc = document.createElement("p");
      desc.className = "text-muted";
      desc.textContent = curso.descripcion;
  
      contenedor.appendChild(row);
      contenedor.appendChild(desc);
    })};
