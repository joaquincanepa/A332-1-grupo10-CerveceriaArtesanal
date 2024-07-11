


// Validacion y envio del formulario Registro

const loginForm = document.getElementById("formulario");


loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

 const {nombreUser,apellidoUser, emailUser, passwordUser } = loginForm.elements;
 
  if (!nombreUser.value.trim() || nombreUser.value.lenght <= 2) {
    alert("Se requiere su nombre");
    return;
  }

  if (!apellidoUser.value.trim() || apellidoUser.value.lenght <= 2) {
    alert("Se requiere su apellido");
    return;
  }

  if (!emailUser.value.trim() || !isValidEmail(emailUser.value)) {
    alert("Ingrese un email válido.");
    return;
  }

  if (!passwordUser.value.trim() || passwordUser.value.lenght <= 5) {
    alert(
      "La contraseña no puede estar vacía o es corta"
    );
    return;
  }

  alert("Registro efectuado! Bienvenido" +" "+ nombreUser.value +" " + apellidoUser.value);
  loginForm.reset();

  
});



function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}




