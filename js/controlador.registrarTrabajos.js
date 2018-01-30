document.querySelector('#btnRegistrarTrabajo').addEventListener('click', obtenerDatosRegistroTrabajo);

function obtenerDatosRegistroTrabajo(){
    let matricula = localStorage.getItem('matriculaSeleccionadaLS');
    let nombre = document.querySelector('#txtNombre').value;
    let descripcion = document.querySelector('#txtDescripcion').value;
    let fecha = document.querySelector('#txtFecha').value;
    let estado = document.querySelector('#txtEstado').value;
    let costo = document.querySelector('#txtCosto').value;

    let objTrabajo = new Trabajo(nombre, descripcion, fecha, estado, costo);
    let objVehiculo = buscarVehiculoPorMatricula(matricula);

    objVehiculo.agregarTrabajo(objTrabajo);
    actualizarVehiculo(objVehiculo);
    mostrarDatosTablaTrabajos();
}