mostrarDatosTablaTrabajos();

function mostrarDatosTablaTrabajos(){
    let trabajos = getTrabajos();
    let tbody = document.querySelector('#tblTrabajos tbody');

    tbody.innerHTML = '';

    trabajos.forEach(objTrabajo => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = objTrabajo.nombre;
        fila.insertCell().innerHTML = objTrabajo.descripcion;
        fila.insertCell().innerHTML = objTrabajo.fecha;
        fila.insertCell().innerHTML = objTrabajo.estado;
        fila.insertCell().innerHTML = objTrabajo.costo;
    });   
}