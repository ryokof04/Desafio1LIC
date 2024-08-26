
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

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isVisible = section.style.display === "block";
    // Oculta ambas secciones antes de mostrar la seleccionada
    document.querySelectorAll('.toggle-content').forEach(div => div.style.display = "none");
    // Alterna la visibilidad de la sección seleccionada
    section.style.display = isVisible ? "none" : "block";
}

let totalIngresos = 0;
        let totalEgresos = 0;

        document.getElementById('agregar').addEventListener('click', function() {
            const tipoTransaccion = document.getElementById('tipo').value;
            const descripcion = document.getElementById('descripcion').value;
            const monto = parseFloat(document.getElementById('monto').value);

            if (descripcion !== "" && !isNaN(monto) && monto > 0) {
                if (tipoTransaccion === "ingreso") {
                    totalIngresos += monto;
                    document.getElementById('lista-ingresos').innerHTML += `<li>${descripcion}: +${monto.toFixed(2)}</li>`;
                } else {
                    totalEgresos += monto;
                    document.getElementById('lista-egresos').innerHTML += `<li>${descripcion}: -${monto.toFixed(2)}</li>`;
                }

                actualizarTotales();
 //              limpiarCampos();
            }
        });

        function actualizarTotales() {
            const totalPresupuesto = totalIngresos - totalEgresos;

            document.getElementById('total-ingresos').innerText = `+ ${totalIngresos.toFixed(2)}`;
            document.getElementById('total-egresos').innerText = `- ${totalEgresos.toFixed(2)}`;
            document.getElementById('presupuesto-total').innerText = `${totalPresupuesto >= 0 ? '+' : ''} ${totalPresupuesto.toFixed(2)}`;
        }

        function limpiarCampos() {
            // Limpiamos los valores de los inputs
            document.getElementById('descripcion').value = '';
            document.getElementById('monto').value = '';
        }
