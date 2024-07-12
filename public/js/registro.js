import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAp75p-O1K8JN8xuiPzSunRKlU5Fag9Y7M",
    authDomain: "cerveceriaartesanal-9d7c7.firebaseapp.com",
    projectId: "cerveceriaartesanal-9d7c7",
    storageBucket: "cerveceriaartesanal-9d7c7.appspot.com",
    messagingSenderId: "656544704388",
    appId: "1:656544704388:web:07d33d75464c8436ed9fd1",
    measurementId: "G-4P6PE17L1R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loginForm = document.getElementById("formulario");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const { nombreUser, apellidoUser, emailUser, passwordUser } = loginForm.elements;

    if (!nombreUser.value.trim() || nombreUser.value.length <= 2) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Se requiere su nombre.'
        });
        return;
    }

    if (!apellidoUser.value.trim() || apellidoUser.value.length <= 2) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Se requiere su apellido.'
        });
        return;
    }

    if (!emailUser.value.trim() || !isValidEmail(emailUser.value)) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese un email válido.'
        });
        return;
    }

    if (!passwordUser.value.trim() || passwordUser.value.length <= 5) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña no puede estar vacía o es corta.'
        });
        return;
    }

    try {
        await addDoc(collection(db, "usuarios"), {
        nombre: nombreUser.value,
        apellido: apellidoUser.value,
        email: emailUser.value,
        password: passwordUser.value
        });

        Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: `Registro efectuado! Bienvenido ${nombreUser.value} ${apellidoUser.value}.`
        });
        loginForm.reset();
    } catch (error) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al enviar el formulario. Intente nuevamente.'
        });
    }
    });

    function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

// Mostrar/ocultar contraseña
const $password = document.getElementById("password");
const $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
    if ($visible.checked === false) $password.type = "password";
    else $password.type = "text";
    }
});
