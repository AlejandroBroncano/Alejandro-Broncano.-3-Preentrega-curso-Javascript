// Almacenamos el nombre del cliente y cómo nos ha conocido
let nombreCliente = prompt("Como te llamas?");
let como = prompt("Como nos has conocido?");
alert("Bienvenido " + nombreCliente + ". Esperamos que encuentres el tratamiento que más se acerque a ti.");

// Creamos objetos para representar los diferentes tipos de masajes
let masajes = [
    {
        nombre: "Deportivo",
        duracion: "60 minutos",
        terapeuta: "Blanca",
        precio: "35€"
    },
    {
        nombre: "Relajante",
        duracion: "45 minutos",
        terapeuta: "Carlos",
        precio: "30€"
    },
    {
        nombre: "Maderoterapia",
        duracion: "75 minutos",
        terapeuta: "María",
        precio: "40€"
    },
    {
        nombre: "Reflexología",
        duracion: "60 minutos",
        terapeuta: "Laura",
        precio: "35€"
    },
    {
        nombre: "Shiatsu",
        duracion: "90 minutos",
        terapeuta: "Pedro",
        precio: "50€"
    }
];

// Mostramos los diferentes tipos de masajes uno a uno
masajes.forEach(function (masaje, index) {
    let mensaje = `Tratamiento ${index + 1}: ${masaje.nombre}\nDuración: ${masaje.duracion}\nTerapeuta: ${masaje.terapeuta}\nPrecio: ${masaje.precio}`;
    alert(mensaje);
});

// Solicitamos al usuario la duración mínima de los masajes que desea ver
let duracionMinima = prompt("Ingresa la duración mínima en minutos de los masajes que deseas ver:");

// Filtramos los masajes cuya duración sea igual o superior a la duración mínima ingresada
let masajesFiltrados = masajes.filter(function (masaje) {
    let duracionNumerica = parseInt(masaje.duracion);
    return duracionNumerica >= duracionMinima;
});

// Mostramos los masajes filtrados
if (masajesFiltrados.length > 0) {
    alert(`Estos son los masajes con duración igual o superior a ${duracionMinima} minutos:`);
    masajesFiltrados.forEach(function (masaje) {
        let mensaje = `Nombre: ${masaje.nombre}\nDuración: ${masaje.duracion}\nTerapeuta: ${masaje.terapeuta}\nPrecio: ${masaje.precio}`;
        alert(mensaje);
    });
} else {
    alert(`No hay masajes con duración igual o superior a ${duracionMinima} minutos.`);
}

// Pedimos al usuario que elija un tratamiento
let tipoMasaje;

while (true) {
    tipoMasaje = prompt(`Elige el número correspondiente al tratamiento que deseas:\n\n1 - Deportivo\n2 - Relajante\n3 - Maderoterapia\n4 - Reflexología\n5 - Shiatsu`);

    tipoMasaje = parseInt(tipoMasaje); // Convertimos la opción ingresada a un número entero

    if (tipoMasaje >= 1 && tipoMasaje <= masajes.length) {
        let masajeElegido = masajes[tipoMasaje - 1];
        alert(`Has elegido el tratamiento de ${masajeElegido.nombre}. Disfruta de tu masaje.`);
        break; // Sale del bucle while
    } else {
        alert("Opción inválida. Por favor, elige nuevamente.");
    }
}

/*Calculamos el precio que se gastrá el cliente entre numero
de sesiones y precio por sesión*/
let sesiones = prompt("En cuantas sesiones estas interesad@?");
function calcular(sesiones, precioSesion) {
    let costoTotal = sesiones * precioSesion;
    return costoTotal;
}

let precioSesion = 35;
let costoTotal = calcular(sesiones, precioSesion);

alert(
    "El costo total de tus" +
    " " +
    sesiones +
    " sesiones es de €" +
    costoTotal +
    "."
);
