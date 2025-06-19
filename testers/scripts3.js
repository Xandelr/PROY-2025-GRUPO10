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
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para cargar las mesas
async function cargarMesas() {
  const contenedor = document.getElementById("contenedorMesas");

  // Definir número de pisos y mesas por piso
  const pisos = 2;
  const mesasPorPiso = 10;

  for (let piso = 1; piso <= pisos; piso++) {
    const pisoContenedor = document.createElement("div");
    pisoContenedor.classList.add("piso");
    contenedor.appendChild(pisoContenedor);

    const tituloPiso = document.createElement("h2");
    tituloPiso.innerText = `Piso ${piso}`;
    pisoContenedor.appendChild(tituloPiso);

    // Crear filas de 5 mesas
    for (let fila = 0; fila < 2; fila++) {
      const filaContenedor = document.createElement("div");
      filaContenedor.classList.add("fila");
      pisoContenedor.appendChild(filaContenedor);

      for (let mesa = 1; mesa <= 5; mesa++) {
        const numeroMesa = (fila * 5 + mesa).toString().padStart(2, '0');
        const mesaId = `piso${piso}-mesa${numeroMesa}`;
        
        // Crear el div de la mesa
        const mesaElemento = document.createElement("div");
        mesaElemento.classList.add("mesa");
        mesaElemento.innerText = `Mesa ${numeroMesa}`;
        filaContenedor.appendChild(mesaElemento);

        // Obtener el estado de la mesa desde Firestore
        const mesaRef = doc(db, "mesas", mesaId);
        const mesaDoc = await getDoc(mesaRef);

        if (mesaDoc.exists()) {
          const estado = mesaDoc.data().estado;
          if (estado === "ocupada") {
            mesaElemento.classList.add("ocupada");
          }
        }
      }
    }
  }
}

// Llamar la función para cargar las mesas cuando la página esté cargada
window.onload = cargarMesas;
