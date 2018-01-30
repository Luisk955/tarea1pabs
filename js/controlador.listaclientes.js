mostrarDatosTablaClientes();
function mostrarDatosTablaClientes(){
    let clientes = getClientes();
    let tbody = document.querySelector('#tblClientes tbody');
    tbody.innerHTML = "";
    
    clientes.forEach(objCliente => {
        let fila = tbody.insertRow();
        
        let celdaAgregarVehiculo = fila.insertCell();
        
        let btnAgregarVehiculoCliente = document.createElement('button');
        btnAgregarVehiculoCliente.type = 'button';
        btnAgregarVehiculoCliente.innerHTML = 'Registrar Vehiculo';
        btnAgregarVehiculoCliente.className = 'btn btn-default';
        btnAgregarVehiculoCliente.dataset.cedulaCliente = objCliente.cedula;
        
        celdaAgregarVehiculo.appendChild(btnAgregarVehiculoCliente);

        fila.insertCell().innerHTML = objCliente.cedula;
        fila.insertCell().innerHTML = objCliente.nombre;
        fila.insertCell().innerHTML = objCliente.primerApellido;
        fila.insertCell().innerHTML = objCliente.segundoApellido;
        fila.insertCell().innerHTML = objCliente.telefono;
        fila.insertCell().innerHTML = objCliente.email;          
        
        btnAgregarVehiculoCliente.addEventListener('click', agregarVehiculoCliente);
    });
}

function agregarVehiculoCliente(){
    let cedula = this.dataset.cedulaCliente;
    localStorage.setItem('cedulaSeleccionadaLS', cedula);
    window.location.href = 'listaVehiculos.html';
}