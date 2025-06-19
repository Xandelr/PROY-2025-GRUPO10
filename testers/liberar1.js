import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/xxxxxxxxxxxx.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.10.0/xxxxxxxxxxxxx.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxx"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener el ID de la mesa desde la URL
const params = new URLSearchParams(window.location.search);
const mesaId = params.get("id");

if (mesaId) {
  // Cambiar el estado de la mesa a "libre"
  await setDoc(doc(db, "mesas", mesaId), { estado: "libre" });
  alert(`¡Mesa ${mesaId} liberada con éxito!`);
} else {
  alert("No se especificó ninguna mesa en la URL.");
}
