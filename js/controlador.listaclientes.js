mostrarDatosTablaClientes();
function mostrarDatosTablaClientes(){
    let clientes = getClientes();
    let tbody = document.querySelector('#tblClientes tbody');
    tbody.innerHTML = "";
    
    clientes.forEach(objCliente => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = objCliente.cedula;
        fila.insertCell().innerHTML = objCliente.nombre;
        fila.insertCell().innerHTML = objCliente.primerApellido;
        fila.insertCell().innerHTML = objCliente.segundoApellido;
        fila.insertCell().innerHTML = objCliente.telefono;
        fila.insertCell().innerHTML = objCliente.email;           
    });
}