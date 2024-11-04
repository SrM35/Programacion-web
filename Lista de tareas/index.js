document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('boton');
    const tareas = document.getElementById('tareas');

    // eliminar tareas
    function eliminarTarea(id) {
        const elemento = document.getElementById(id);
        elemento.remove();
    }

    // Crear tareas
    function crearTarea() {
        const checkbox = document.createElement("input");
        const etiquetaCheckbox = document.createElement("label");
        const nuevoElemento = document.createElement("div");
        const nuevoElemento2 = document.createElement("div");
        const botonDentro = document.createElement("button");
        const textoInput = document.getElementById('nuevaT');
        const icono = document.createElement("i");

        checkbox.type = "checkbox";
        checkbox.id = "checkbox_" + Math.random();
        etiquetaCheckbox.innerText = `${textoInput.value}`;
        icono.className = "fa fa-trash";
        nuevoElemento.className = "mi-clase";
        nuevoElemento.id = checkbox.id;
        nuevoElemento2.className = "clase2";
        botonDentro.className = "boton";
        botonDentro.innerText = ``;
        botonDentro.id = checkbox.id;

        botonDentro.addEventListener("click", function() {
            eliminarTarea(this.id);
        });

        if (textoInput.value !== '') {
            textoInput.value = '';
            nuevoElemento2.appendChild(checkbox);
            nuevoElemento2.appendChild(etiquetaCheckbox);
            botonDentro.appendChild(icono);
            nuevoElemento.appendChild(nuevoElemento2);
            nuevoElemento.appendChild(botonDentro);
            tareas.appendChild(nuevoElemento);
        }

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                etiquetaCheckbox.classList.add("tachado");
            } else {
                etiquetaCheckbox.classList.remove("tachado");
            }
        });
    }

    


    boton.addEventListener('click', crearTarea);
});
