document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }

  const registroForm = document.getElementById("registroForm");
  if (registroForm) {
    registroForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const newUser = document.getElementById("newUser").value;
      const newPassword = document.getElementById("newPassword").value;

      alert("Usuario registrado: " + newUser);
      window.location.href = "index.html";
    });
  }

  const linkEstudiantes = document.getElementById("linkEstudiantes");
  const linkAsignaturas = document.getElementById("linkAsignaturas");

  const contenedorEstudiantes = document.getElementById(
    "contenedorEstudiantes"
  );
  const contenedorAsignaturas = document.getElementById(
    "contenedorAsignaturas"
  );

  if (linkEstudiantes) {
    linkEstudiantes.addEventListener("click", (event) => {
      event.preventDefault();
      contenedorEstudiantes.classList.add("active");
      contenedorAsignaturas.classList.remove("active");
    });
  }

  if (linkAsignaturas) {
    linkAsignaturas.addEventListener("click", (event) => {
      event.preventDefault();
      contenedorAsignaturas.classList.add("active");
      contenedorEstudiantes.classList.remove("active");
    });
  }
});

function agregarFila(tabla, id, nombre) {
  const row = tabla.insertRow();
  const cellId = row.insertCell(0);
  const cellNombre = row.insertCell(1);
  const cellAcciones = row.insertCell(2);

  cellId.textContent = id;
  cellNombre.textContent = nombre;
  cellAcciones.innerHTML =
    '<button class="btn-editar">Editar</button><button class="btn-eliminar">Eliminar</button>';
}

const tablaEstudiantes = document.querySelector(
  "#contenedorEstudiantes table tbody"
);
const btnAgregarEstudiante = document.getElementById("agregarEstudiante");
if (btnAgregarEstudiante) {
  btnAgregarEstudiante.addEventListener("click", () => {
    const id = tablaEstudiantes.rows.length + 1;
    const nombre = prompt("Ingrese el nombre del estudiante:");
    if (nombre) {
      agregarFila(tablaEstudiantes, id, nombre);
    }
  });
}

const tablaAsignaturas = document.querySelector(
  "#contenedorAsignaturas table tbody"
);
const btnAgregarAsignatura = document.getElementById("agregarAsignatura");

if (btnAgregarAsignatura) {
  btnAgregarAsignatura.addEventListener("click", () => {
    const id = tablaAsignaturas.rows.length + 1;
    const nombre = prompt("Ingrese el nombre de la asignatura:");
    if (nombre) {
      agregarFila(tablaAsignaturas, id, nombre);
    }
  });
}
