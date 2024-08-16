
// Función para obtener la fecha actual y formatearla
function obtenerFechaActual() {
    const hoy = new Date();
    const opciones = { year: 'numeric', month: 'long' };
    return hoy.toLocaleDateString('es-ES', opciones);
}

// Función para actualizar el título de la página
function actualizarTituloConFecha() {
    const titulo = document.getElementById('page-title');
    titulo.textContent = `Titulo - ${obtenerFechaActual()}`;
}


// Función para obtener el mes y el año actual
//function obtenerMesYAnioActual() {
//    const hoy = new Date();
//    const opciones = { year: 'numeric', month: 'long' };
//    return hoy.toLocaleDateString('es-ES', opciones);
//}

// Función para actualizar el título de la página

function actualizarTitulo() {
    const titulo = document.getElementById('presupuesto-titulo');
    titulo.textContent = `Presupuesto de ${obtenerMesYAnioActual()}`;
}

// Ejecutar la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', actualizarTitulo);

// Ejecutar la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', actualizarTituloConFecha);



