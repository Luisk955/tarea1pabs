mostrarDatosTablaVehiculos();
function mostrarDatosTablaVehiculos(){
    let vehiculos = getVehiculos();
    let tbody = document.querySelector('#tblVehiculos tbody');
    tbody.innerHTML = "";
    
    vehiculos.forEach(objVehiculo => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = objVehiculo.cliente;
        fila.insertCell().innerHTML = objVehiculo.matricula;
        fila.insertCell().innerHTML = objVehiculo.marca;
        fila.insertCell().innerHTML = objVehiculo.modelo;
        fila.insertCell().innerHTML = objVehiculo.anno;
        fila.insertCell().innerHTML = objVehiculo.capacidad;
        fila.insertCell().innerHTML = objVehiculo.kilometraje;           
    });
}