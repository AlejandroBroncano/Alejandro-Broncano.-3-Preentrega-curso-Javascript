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

    // Crear un objeto con la información del usuario
    const usuario = {
        nombre: nombre,
        edad: edad,
        tratamiento: tratamiento
    };

    // Convertir el objeto a JSON
    const usuarioJSON = JSON.stringify(usuario);

    // Guardar la información del usuario en el LocalStorage
    localStorage.setItem("usuario", usuarioJSON);

    // Mostrar los valores seleccionados en el DOM
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Nombre: ${nombre}<br>Edad: ${edad}<br>Tratamiento seleccionado: ${tratamiento}`;
});

// Cargar datos del usuario al cargar la página
window.addEventListener("load", function () {
    const usuarioJSON = localStorage.getItem("usuario");
    if (usuarioJSON) {
        const usuario = JSON.parse(usuarioJSON);
        const { nombre, edad, tratamiento } = usuario;
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `Nombre: ${nombre}<br>Edad: ${edad}<br>Tratamiento seleccionado: ${tratamiento}`;
    }
});
