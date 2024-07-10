// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp75p-O1K8JN8xuiPzSunRKlU5Fag9Y7M",
  authDomain: "cerveceriaartesanal-9d7c7.firebaseapp.com",
  projectId: "cerveceriaartesanal-9d7c7",
  storageBucket: "cerveceriaartesanal-9d7c7.appspot.com",
  messagingSenderId: "656544704388",
  appId: "1:656544704388:web:07d33d75464c8436ed9fd1",
  measurementId: "G-4P6PE17L1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);