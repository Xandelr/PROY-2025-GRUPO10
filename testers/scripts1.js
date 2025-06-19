import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/xxxxxxxxxxxxxxx.js";
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.10.0/xxxxxxxxxxxxxx.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxx"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const cargarMesas = () => {
  onSnapshot(collection(db, "mesas"), (snapshot) => {
    // Limpiar todos los contenedores de piso
    document.querySelectorAll(".contenedorMesas").forEach(div => div.innerHTML = "");

    snapshot.forEach((doc) => {
      const estado = doc.data().estado;
      const id = doc.id;

      const div = document.createElement("div");
      div.className = `mesa ${estado}`;
      div.innerText = id.split("-")[1]; // solo mostrar mesa01, mesa02...

      // Detectar a qué piso pertenece
      const piso = id.split("-")[0]; // "piso1" o "piso2"
      const contenedor = document.querySelector(`.contenedorMesas[data-piso="${piso}"]`);

      if (contenedor) {
        contenedor.appendChild(div);
      }
    });
  });
};

cargarMesas();
