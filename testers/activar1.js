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

// Leer el ID de la mesa desde la URL
const params = new URLSearchParams(window.location.search);
const mesaId = params.get("id");

const activarMesa = async () => {
  if (!mesaId) {
    alert("No se encontró el ID de la mesa en la URL");
    return;
  }

  try {
    const ref = doc(db, "mesas", mesaId);
    await updateDoc(ref, {
      estado: "ocupada"
    });
    alert(`¡Mesa ${mesaId} activada correctamente!`);
  } catch (error) {
    console.error("Error al activar la mesa:", error);
    alert("Hubo un error al activar la mesa.");
  }
};

activarMesa();
