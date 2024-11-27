# Gestor de Tareas con Node.js y SQLite

Este proyecto es una aplicación web simple que permite agregar, listar y eliminar tareas. Utiliza un backend con Node.js y SQLite para el almacenamiento de datos, y un frontend básico en HTML, CSS y JavaScript.

---

## **Requisitos**
Antes de comenzar, asegúrate de tener instalados:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## **Instalación y Ejecución**

### **Backend**
1. **Clona el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
Instala las dependencias necesarias:

bash
Copy code
npm install
Ejecuta el servidor:

bash
Copy code
node server.js
Verifica que el servidor está corriendo:

Abre tu navegador y ve a: http://localhost:3000.

Para probar el endpoint de las tareas:

GET: http://localhost:3000/tareas (obtiene todas las tareas).
POST: Agrega una nueva tarea enviando un JSON al endpoint http://localhost:3000/tareas.
Frontend
Abre el archivo index.html en tu navegador (puedes hacer doble clic sobre el archivo o usar una extensión de servidor local como "Live Server" en Visual Studio Code).
Interacción con la aplicación:
Escribe una tarea en el campo de texto y haz clic en "Agregar".
Las tareas aparecerán listadas debajo, y podrás eliminarlas con el botón "Eliminar".
