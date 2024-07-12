import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getFirestore, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAp75p-O1K8JN8xuiPzSunRKlU5Fag9Y7M",
    authDomain: "cerveceriaartesanal-9d7c7.firebaseapp.com",
    projectId: "cerveceriaartesanal-9d7c7",
    storageBucket: "cerveceriaartesanal-9d7c7",
    messagingSenderId: "656544704388",
    appId: "1:656544704388:web:07d33d75464c8436ed9fd1",
    measurementId: "G-4P6PE17L1R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loginForm = document.getElementById("formulario");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const { emailLog, passwordLog } = loginForm.elements;

    if (!emailLog.value.trim() || !isValidEmail(emailLog.value)) {

        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese un email válido.'
    });
    return;
    }

    if (!passwordLog.value.trim() || passwordLog.value.length <= 5) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese una contraseña válida.'
        });
        return;
    }

    validarIngreso(emailLog.value, passwordLog.value);
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function validarIngreso(email, password) {
    const datosObtenidos = await getDataDb(email, password);
    console.log(datosObtenidos);

    if (datosObtenidos != null) {
        Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Login efectuado con éxito'
        });
        loginForm.reset();
    } else {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email o contraseña inválidos.'
        });
    }
}

async function getDataDb(emailCon, passwordCon) {
    let datos = null;
    const q = query(collection(db, "usuarios"), where("email", "==", emailCon), where("password", "==", passwordCon));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        datos = doc.data();
    });
    return datos;
}

// Mostrar/ocultar contraseña
const $password = document.getElementById("passwordLog");
const $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
    if ($visible.checked === false) $password.type = "password";
    else $password.type = "text";
    }
});

