let estudianteSeleccionado = -1;

function EstudianteSeleccionadoChange(e) { 
    estudianteSeleccionado = document.getElementById("EstudianteSeleccionado").value - 1;
    MostrarPuntosDelEstudianteSeleccionado();
    document.getElementById("imagengJuan").src = "Imagenes" + "/" + (estudianteSeleccionado + 1) + ".png";
}