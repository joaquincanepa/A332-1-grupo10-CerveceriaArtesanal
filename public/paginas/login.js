
// Validacion y envio del formulario Login

const loginForm = document.getElementById("formulario");


loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

 const { nombre,apellido, email, password } = loginForm.elements;
 
  if (!nombre.value.trim() || nombre.value.lenght <= 2) {
    alert("Se requiere su nombre");
    return;
  }

  if (!apellido.value.trim() || apellido.value.lenght <= 2) {
    displayError("Se requiere su apellido");
    return;
  }

  if (!email.value.trim() || !isValidEmail(email.value)) {
    alert("Ingrese un email válido.");
    return;
  }

  if (!password.value.trim() || password.value.lenght <= 5) {
    alert(
      "La contraseña es incorrecta"
    );
    return;
  }
    

  alert("Login efectuado! Bienvenido" +" "+ nombre.value +" " + apellido.value);
  loginForm.reset();
}); 


function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}




