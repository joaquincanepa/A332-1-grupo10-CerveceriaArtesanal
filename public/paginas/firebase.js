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

const db = getFirestore(app);

