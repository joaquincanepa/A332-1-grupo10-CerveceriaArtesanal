import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';

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

const contactoForm = document.getElementById("formulario");

contactoForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const { nombreCon, emailCon, telefonoCon, mensajeCon } = contactoForm.elements;

    if (!nombreCon.value.trim() || nombreCon.value.length <= 2) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Se requiere su nombre.'
    });
    return;
    }

    if (!emailCon.value.trim() || !isValidEmail(emailCon.value)) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese un email válido.'
        });
        return;
    }

    if (!telefonoCon.value.trim() || isNaN(telefonoCon.value)) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Se requiere un teléfono válido.'
        });
        return;
    }

    try {
        await addDoc(collection(db, "contactos"), {
        nombre: nombreCon.value,
        email: emailCon.value,
        telefono: telefonoCon.value,
        mensaje: mensajeCon.value
    });

    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Gracias por dejar su contacto. A la brevedad lo contactaremos.'
    });
    contactoForm.reset();
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
