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
});
