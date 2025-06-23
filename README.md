# PROY-2025-GRUPO10

Repositorio del grupo 10 para el proyecto del ramo *Proyecto Inicial* – 2025.

## 👥 Integrantes del grupo

| Nombre y Apellido | Usuario GitHub | Correo USM               | Rol          |
| ----------------- | -------------- | ------------------------ | ------------ |
| Gabriel   Nieto   | @Xandelr       | gnieto@usm.cl            | 202530008-7  |
| Álvaro    Machuca | @Pekoragaming  | amachuca@usm.cl          | 202530009-5  |
| Felipe    Urbina  | @ElectroNightMD| furbinao@usm.cl          | 202530037-0  |
| Gustavo   Gaete   | @08gustavooo   | ggaetel@usm.cl           | 202530030-3  |

---

## 📝 Descripción breve del proyecto
> El proyecto, se centra en la facilitacion en la busqueda de puestos/mesas en la biblioteca, junto a una Web donde nos muestre las mesas ocupadas y libres ademas de mostrar la temperatura general de la biblioteca. para eliminar la accion de buscar mesas por los pisos que esten todas ocupadas asi evitar perdidas de tiempo y frustraciones.
---

## 🎯 Objetivos

- Objetivo general:
  - El objetivo que nosotros tenemos es conseguir crear una base de datos que nos permita ver el estado de las mesas de la biblioteca (OCUPADO/LIBRE)
  - Objetivo que la base de datos muestre la temperatura general de la biblioteca.
  
- Objetivos específicos:
  - Los objetivo especificos que queremos lograr serian , lograr que una gran parte de las mesas de la biblioteca contengan los "stickers" de NFC (near field communication)

  - Usar la Rasp Berry Pi como transitor y fuente de poder para el sensor de temperatura (Bmp 280) 

  - Lograr modificar los NFC para que un telefono (con tecnologia de NFC) sea capaz de leerlos y mandar informacion.

  - Lograr realizar la base de datos que registre el uso de dichas mesas.

  - Lograr un minimo de 2 pisos con estos "stickers" con un funcionamiento eficiente y sencillo
---

## 🧩 Alcance del proyecto

> El proyecto puede alcanzar un mundo muy amplio ejemplo a patios de comidas de malls entre otros lugares donde se deben buscar mesas para descansar/trabajar, pero en nuestro caso primero haremos una pequeña versión donde solo probaremos con 1 piso de la biblioteca para ver que el funcionamiento y el objetivo de nuestro proyecto este bien logrado. y si funciona correctamente intentaremos implementar este sistema a toda la biblioteca para que los alumnos tengan buena comodidad y ahorren su tiempo claramente.

---

## 🛠️ Tecnologías y herramientas utilizadas

- Lenguaje(s) de programación:
- Javascript, HTML, CSS, PYTHON

- Objetos Físicos:
- Pegatinas NFC
- Telefono Celular
- Rasp Berry Pi
- Micro USB
- Sensor de Temperatura Bmp 280
- Cable Hembra y Macho

- Web utilizadas:
- Github & Github Pages
- Google FireBase
- Google AppScripts
- Google sheets

---
## ✅ Instrucciones de Uso

### 1. Configurar Firebase

- Crea un proyecto en Firebase desde https://console.firebase.google.com.
- Activa Firestore Database.
- Copia la configuración del proyecto (`apiKey`, `authDomain`, etc.) y pégala en los archivos: `activar.js`, `liberar.js` y `script.js`.
- Establece reglas de seguridad en Firestore para proteger los datos. Un ejemplo de regla útil:
  - Permitir lectura pública.
  - Permitir modificar únicamente el campo `estado` si el documento ya existe.
  - Restringir otras acciones a un usuario autenticado específico.

### 2. Preparar Firestore

- Crea documentos en la colección `mesas` con nombres como: `piso1-mesa01`, `piso1-mesa02`, ..., `piso3-mesa10`.
- A cada documento asígnale un campo llamado `estado` que contenga como valor "libre" o "ocupada".

### 3. Archivos del Proyecto

- `index.html`: Página principal que muestra todas las mesas por piso (en filas de 5).
- `script.js`: Carga automáticamente el estado de las mesas desde Firebase y actualiza la vista.
- `estilos.css`: Estiliza la interfaz, mostrando mesas verdes si están libres y rojas si están ocupadas.
- `activar.html` y `liberar.html`: Modifican el estado de una mesa usando un parámetro `id` en la URL.
- `activar.js` y `liberar.js`: Se conectan con Firebase y realizan la acción correspondiente.

### 4. Publicar la Web

- Sube los archivos a un repositorio de GitHub.
- Activa GitHub Pages en la pestaña “Settings > Pages” y elige la rama que contiene tu web.
- El enlace de tu web tendrá la forma:
  - `https://tu_usuario.github.io/Take-pi/index.html`

### 5. Uso

- Abre `index.html` para ver el estado de las mesas en tiempo real.
- Usa enlaces del tipo:
  - `https://tu_usuario.github.io/Take-pi/activar.html?id=piso1-mesa01`
  - `https://tu_usuario.github.io/Take-pi/liberar.html?id=piso1-mesa01`
- Estos enlaces se pueden grabar en etiquetas NFC para facilitar la activación o liberación de mesas desde un celular con NFC.

### 6. Mostrar Temperatura con Raspberry Pi Pico W 2

Puedes medir la temperatura ambiente usando una Raspberry Pi Pico W 2 con un sensor BME280 y mostrarla en la web.

**Funcionamiento:**
- La Raspberry envía la temperatura y la hora a una hoja de cálculo de Google Sheets.
- Un Apps Script convierte esos datos en una API pública.
- La web consulta esta API para mostrar la temperatura actual.

**Conexiones entre Raspberry y BME280 usando cables macho-macho:**

| Pico W 2 (Pin) | BME280 (Pin) |
|----------------|--------------|
| 1I (GPIO 0)    | SDA (27G)    |
| 1B (GND)       | GND (30G)    |
| 2B (3V3)       | VCC (29G)    |
| 3I (GPIO 1)    | SCL (28G)    |

**Requisitos:**
- Que el script en Google esté publicado como web app.
- Que la web esté configurada para consultar esa API con `fetch()`.

---

## 🗂️ Estructura del repositorio

```
/PROY-2025-GRUPO10
│
├── carpeta docs/ # carpeta con todo los documentos del proyecto
├── carpeta raspberry/ # carpeta con todos los codigos de la raspberry pi
├── carpeta src/ # carpeta con todos los codigos de la pagina del proyecto
├── carpeta testers/ # carpeta con todos los codigos de prueba del proyecto
└── README.md/ # Este archivo
```

---

## 🧪 Metodología

> *La metodologia que se uso en el proyecto es el Modelo de Cascada, la cual se basa en un trabajo hecho de forma escalonada y lineal. El flujo de trabajo empleado en el proyecto es Trunk-Based Development, la cual se basa en un trabajo unico en la rama main, con ramas de vida bastante cortas. Se selecciono este, debido a el proposito del proyecto y el periodo limitado de desarrollo.*

---

## 🛡️ Seguridad del proyecto

> *La seguridad es de lo mas importante en el proyecto, ya que este presenta api-keys las cuales son vulnerables a ataques. Para ello las api-keys utilizadas estan seguras auque esten visibles gracias a las reglas de firebase, las cuales fueron modificadas para que solo los administradores identificados con ciertos UID pueden modificar las variables y la creacion de nuevas, pero que se permita que los usuarios publicos puedan cambiar el estado de las variables a "ocupada" o "libre".*

---

## 📅 Cronograma de trabajo

[Presentacion Ideas] https://www.canva.com/design/DAGi7pNhhMk/Hsu3KtiUx-I1pUMYP4cMGw/edit?utm_content=DAGi7pNhhMk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton  

[Carta Gantt] https://usmcl-my.sharepoint.com/:x:/g/personal/gnieto_usm_cl/EVeNQKD9C6tBvRJiTn4PwVcBgKFDHwVcBv-MJPKNyf0gZg?e=S5EHIZ 

---

## 📚 Bibliografía

[Enlace](https://github.com/ensarbooks/guides)
[Enlace](https://www.reddit.com/r/FlutterFlow/comments/1j60jua/i_just_realized_something_that_could_bankrupt/?utm_source=chatgpt.com)
[Enlace](https://www.youtube.com/watch?v=d4leg9WwS8M)
[Enlace](https://www.reddit.com/r/github/comments/ercxpd/how_to_set_up_a_website_with_github_pages/)
[Video](https://youtu.be/-22Gbac2GHM?si=RcmovkOX55tCUguv)
---

## 📌 Notas adicionales

> *Proyecto en fase inicial. Proyecto que probablemente quede en desuso luego del periodo indicado. Pegatinas NFC modificadicas para su lectura.*

## Links Importantes: ♟️

https://xandelr.github.io/Take-pi/
(pagina de las mesas )

https://github.com/Xandelr/Take-pi
(IMPORTANTE!! Este Git contiene el todos los codigos y es la que sostiene la pagina)
