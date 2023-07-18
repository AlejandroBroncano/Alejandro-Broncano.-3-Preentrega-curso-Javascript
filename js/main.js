// Obtener referencias a los elementos del formulario
const form = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const tratamientoSelect = document.getElementById("tratamiento");

// Escuchar el evento submit del formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const nombre = nombreInput.value;
    const edad = edadInput.value;
    const tratamiento = tratamientoSelect.value;

    // Mostrar los valores seleccionados en el DOM
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Nombre: ${nombre}<br>Edad: ${edad}<br>Tratamiento seleccionado: ${tratamiento}`;
});