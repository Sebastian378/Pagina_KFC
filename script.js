//Logica de archivo index.html
const formulario = document.getElementById('loginForm');
const userName = document.getElementById('username');
const password = document.getElementById('password')

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const datoUserName = userName.value;
  const datoPassword = password.value;


  if (datoUserName === "pollitofrito" && datoPassword === "12345") {
    alert("Acceso Concedido")
    window.location.href = "menu.html";
} else {
  alert("Acceso Denegado")
}
})



