import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getFirestore, doc, collection, addDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';

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

// Validacion y envio del formulario de reserva

const reservaForm = document.getElementById("formulario");

reservaForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const {nombreRes, emailRes, telefonoRes, cantidadPerRes, fechaRes, horaRes, tipoMesaRes, preferenciaRes, 
    comentarioRes} = reservaForm.elements;

  if (!nombreRes.value.trim() || nombreRes.value.length <= 2) {
    alert("Se requiere su nombre");
    return;
  }

  if (!emailRes.value.trim() || !isValidEmail(emailRes.value)) {
    alert("Ingrese un email válido.");
    return;
  }

  if (!telefonoRes.value.trim() || telefonoRes.value.length <= 2 || isNaN(telefonoRes.value)) {
    alert("Ingrese un telefono válido.");
    return;
  }

  if (cantidadPerRes.value.length <= 0) {
    alert("Ingrese un número válido de personas");
    return;
  }

  if (!fechaRes.value.trim()) {
    alert("Ingrese una fecha válida");
    return;
  }

  if (!horaRes.value.trim()) {
    alert("Ingrese una hora válida");
    return;
  }

  const db = getFirestore(app);
  try {
    await addDoc(collection(db, "reservas"), {
      nombre: nombreRes.value,
      email: emailRes.value,
      telefono: telefonoRes.value,
      cantidad: cantidadPerRes.value,
      fecha: fechaRes.value,
      hora: horaRes.value,
      tipo: tipoMesaRes.value,
      preferencia: preferenciaRes.value,
      comentarios: comentarioRes.value
    });

    Swal.fire({
      title: 'Reserva realizada',
      html: `
          <p><strong>Nombre:</strong> ${nombreRes.value}</p>
          <p><strong>Email:</strong> ${emailRes.value}</p>
          <p><strong>Teléfono:</strong> ${telefonoRes.value}</p>
          <p><strong>Cantidad de personas:</strong> ${cantidadPerRes.value}</p>
          <p><strong>Fecha:</strong> ${fechaRes.value}</p>
          <p><strong>Hora:</strong> ${horaRes.value}</p>
          <p><strong>Tipo de mesa:</strong> ${tipoMesaRes.value}</p>
          <p><strong>Preferencia:</strong> ${preferenciaRes.value}</p>
          <p><strong>Comentarios:</strong> ${comentarioRes.value}</p>
      `,
      icon: 'success',
      confirmButtonText: 'OK'
    });

    reservaForm.reset();

  } catch (error) {
    console.error("Error al añadir la reserva: ", error);
    Swal.fire({
      title: 'Error',
      text: 'Hubo un problema al realizar la reserva. Por favor, intente de nuevo.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
