// Datos de los tratamientos
const masajes = [
    {
        nombre: "Deportivo",
        duracion: "60 minutos",
        terapeuta: "Blanca",
        precio: "35€",
    },
    {
        nombre: "Relajante",
        duracion: "45 minutos",
        terapeuta: "Carlos",
        precio: "30€",
    },
    {
        nombre: "Maderoterapia",
        duracion: "75 minutos",
        terapeuta: "María",
        precio: "40€",
    },
    {
        nombre: "Reflexología",
        duracion: "60 minutos",
        terapeuta: "Laura",
        precio: "35€",
    },
    {
        nombre: "Shiatsu",
        duracion: "90 minutos",
        terapeuta: "Pedro",
        precio: "50€",
    },
];

// Obtener referencias a los elementos del formulario y del DOM
const form = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const tratamientoSelect = document.getElementById("tratamiento");
const carritoDiv = document.getElementById("carrito");
const montoTotalDiv = document.getElementById("montoTotal");
const borrarCarritoBtn = document.getElementById("borrarCarrito");

// Variables para almacenar las reservas y el monto total
let reservasGuardadas = [];
let montoTotal = 0;

// Función para mostrar el carrito
function mostrarCarrito() {
    carritoDiv.innerHTML = "";
    montoTotal = 0;

    reservasGuardadas.forEach((reserva, index) => {
        const carritoItem = document.createElement("div");
        carritoItem.classList.add("carrito-item");
        carritoItem.innerHTML = `
        <h2>Resumen de reserva ${index + 1}</h2>
        <p>Nombre: ${reserva.nombre}</p>
        <p>Edad: ${reserva.edad}</p>
        <p>Tratamiento seleccionado: ${reserva.tratamiento}</p>
        <p>Precio: ${reserva.precio}€</p>
        <button class="borrar-reserva" data-index="${index}">Borrar Reserva</button>
        `;
        carritoDiv.appendChild(carritoItem);

        // Sumar el precio del tratamiento al monto total
        const tratamientoElegido = masajes.find(
            (masaje) => masaje.nombre === reserva.tratamiento
        );
        if (tratamientoElegido) {
            const precioNumerico = parseInt(
                tratamientoElegido.precio.replace("€", "")
            );
            montoTotal += precioNumerico;
        }
    });

    // Actualizar el texto del monto total
    montoTotalDiv.textContent = `Monto total: ${montoTotal}€`;
}

// Generar las opciones de tratamiento en el select
masajes.forEach((masaje) => {
    const option = document.createElement("option");
    option.value = masaje.nombre;
    option.textContent = masaje.nombre;
    tratamientoSelect.appendChild(option);
});

// Escuchar el evento submit del formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const nombre = nombreInput.value;
    const edad = edadInput.value;
    const tratamientoSeleccionado = tratamientoSelect.value;

    // Buscar el tratamiento seleccionado para obtener su precio
    const tratamientoElegido = masajes.find(
        (masaje) => masaje.nombre === tratamientoSeleccionado
    );
    const precioTratamiento = tratamientoElegido.precio;

    // Guardar la información del usuario en el almacenamiento local
    const reserva = {
        nombre,
        edad,
        tratamiento: tratamientoSeleccionado,
        precio: precioTratamiento.replace("€", ""),
    };

    reservasGuardadas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

    // Actualizar el carrito con las reservas y el monto total
    mostrarCarrito();
});

// Escuchar el evento click del botón "Borrar Carrito"
borrarCarritoBtn.addEventListener("click", function () {
    // Borrar las reservas del almacenamiento local y actualizar el carrito
    localStorage.removeItem("reservas");
    reservasGuardadas = [];
    mostrarCarrito();
});

// Escuchar el evento click de los botones "Borrar Reserva"
carritoDiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("borrar-reserva")) {
        const index = event.target.dataset.index;
        reservasGuardadas.splice(index, 1);
        localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));
        mostrarCarrito();
    }
});

// Cargar la información del carrito desde el almacenamiento local al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const reservasGuardadasStr = localStorage.getItem("reservas");
    if (reservasGuardadasStr) {
        reservasGuardadas = JSON.parse(reservasGuardadasStr);
        mostrarCarrito();
    }
});
