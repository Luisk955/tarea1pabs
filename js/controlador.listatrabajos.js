mostrarDatosTablaTrabajos();
function mostrarDatosTablaTrabajos(){
    let trabajos = getTrabajos();
    let tbody = document.querySelector('#tblTrabajos tbody');
    tbody.innerHTML = "";
    
    trabajos.forEach(objTrabajo => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = objTrabajo.vehiculo;
        fila.insertCell().innerHTML = objTrabajo.nombreTrabajo;
        fila.insertCell().innerHTML = objTrabajo.descripcionTrabajo;
        fila.insertCell().innerHTML = objTrabajo.fecha;
        fila.insertCell().innerHTML = objTrabajo.estado;
        fila.insertCell().innerHTML = objTrabajo.costo;           
    });
}