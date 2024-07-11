
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  measurementId:
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Obtengo los usuarios de la base de datos 
async function obtenerUsuarios(db) {
  const usuariosCol = collection(db,'usuarios');
  const usuarioSnapshot = await getDocs(usuariosCol);
  const usuariosList = citySnapshot.docs.map(doc => doc.data());
  return usuariosList;
}

// Validacion y envio del formulario Login

const loginForm = document.getElementById("formulario");


loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //const { nombre,apellido, email, password } = loginForm.elements;
 const {email, password } = loginForm.elements;
 
 /* if (!nombre.value.trim() || nombre.value.lenght <= 2) {
    alert("Se requiere su nombre");
    return;
  }

  if (!apellido.value.trim() || apellido.value.lenght <= 2) {
    displayError("Se requiere su apellido");
    return;
  }

    listaUsuarios = obtenerUsuarios();


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



  listaUsuarios.forEach(element => {
    if(element.email == email && element.password == password)
        {
            alert("Login efectuado! Bienvenido" +" "+ element.nombre +" "+element.apellido);
            loginForm.reset();
        }
  });   

}); 


function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
*/



