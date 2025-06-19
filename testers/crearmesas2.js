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

// Crear 10 mesas con padding
const crearMesas = async () => {
  for (let i = 1; i <= 10; i++) {
    const id = `mesa${String(i).padStart(2, "0")}`;
    await setDoc(doc(db, "mesas", id), { estado: "libre" });
    console.log(`Mesa ${id} creada`);
  }
  alert("¡10 mesas creadas correctamente con IDs ordenados!");
};

crearMesas();
