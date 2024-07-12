
            import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
            import { getFirestore, doc, collection, addDoc, query, where, setDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';
            
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
            
            const querySnapshot = await getDocs(collection(db, "reservas"));
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
                const data = doc.data();
                const tableBody = document.getElementById("table-body");
                    
              // Append data to the table
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${data.nombre}</td>
                    <td>${data.email}</td>
                    <td>${data.telefono}</td>
                    <td>${data.cantidad}</td>
                    <td>${data.fecha}</td>
                    <td>${data.hora}</td>
                    <td>${data.tipo}</td>
                    <td>${data.preferencia}</td>
                    <td>${data.comentarios}</td>
                `;
                tableBody.appendChild(row);
            });