// Función para agregar una nueva tarea
const agregarTarea = async () => {
    const descripcion = document.querySelector('#nuevaTarea').value;

    // Validar entrada
    if (descripcion.trim() === '') {
        alert('Por favor, ingresa una descripción para la tarea');
        return;
    }

    try {
        // Realizar solicitud al backend
        const response = await fetch('http://localhost:3000/tareas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ descripcion }),
        });

        // Manejar respuesta del servidor
        if (!response.ok) {
            throw new Error('Error al agregar la tarea');
        }

        const tarea = await response.json();
        agregarTareaALista(tarea); // Agregar tarea a la lista en el frontend
        document.querySelector('#nuevaTarea').value = ''; // Limpiar input
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

// Función para obtener todas las tareas
const obtenerTareas = async () => {
    try {
        const response = await fetch('http://localhost:3000/tareas');

        // Manejar respuesta del servidor
        if (!response.ok) {
            throw new Error('Error al obtener las tareas');
        }

        const data = await response.json();
        data.tareas.forEach((tarea) => agregarTareaALista(tarea)); // Mostrar tareas en la lista
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

// Función para eliminar una tarea
const eliminarTarea = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/tareas/${id}`, {
            method: 'DELETE',
        });

        // Manejar respuesta del servidor
        if (!response.ok) {
            throw new Error('Error al eliminar la tarea');
        }

        // Eliminar la tarea del frontend
        document.querySelector(`#tarea-${id}`).remove();
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

// Función para agregar una tarea al DOM
const agregarTareaALista = (tarea) => {
    const lista = document.querySelector('#listaTareas');
    const elemento = document.createElement('li');
    elemento.id = `tarea-${tarea.id}`;
    elemento.innerHTML = `
        <span>${tarea.descripcion}</span>
        <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
    `;
    lista.appendChild(elemento);
};

// Evento al cargar el documento
document.addEventListener('DOMContentLoaded', obtenerTareas);
