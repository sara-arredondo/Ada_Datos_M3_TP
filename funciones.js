// ---------------------------------------------inicio funcion para leer Local Storage ---------------------------------------------------
let datosTodasLasOperaciones = JSON.parse(localStorage.getItem("operaciones")) || []; 


function leerLocalStorage(key) {
    const datos = JSON.parse(localStorage.getItem(key));
    datosTodasLasOperaciones = datos;
    return datos ? datos : [];
}

function guardarLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

function agregarOperacion(objetoNuevaOperacion) {
    datosTodasLasOperaciones.push(objetoNuevaOperacion)
    guardarLocalStorage("operaciones", datosTodasLasOperaciones)
}

// ---------------------------------------------inicio funcion para exportar datos ---------------------------------------------------

export default {
    leerLocalStorage,
    guardarLocalStorage,
    agregarOperacion,
    datosTodasLasOperaciones,
}
