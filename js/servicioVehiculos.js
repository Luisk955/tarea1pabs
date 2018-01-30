function getVehiculos(){
    let cedula = localStorage.getItem('cedulaSeleccionadaLS');
    let cliente = buscarClientePorCedula(cedula);
    let vehiculos = cliente.listaVehiculos;
    return vehiculos;
}



/*function actualizarVehiculo(pObjVehiculo){
    let listaVehiculos = getVehiculos();
    let listaClientes = getClientes();
    for (let i = 0; i < listaVehiculos.length; i++){
        if (listaVehiculos[i].matricula = pObjVehiculo.matricula){
            listaVehiculos[i] = pObjVehiculo;
            for (let i = 0; i < listaClientes.length; i++){
                let cedula = localStorage.getItem('cedulaSeleccionadaLS');
                if (listaClientes[i].cedula = cedula){
                    listaClientes[i].listaVehiculos = listaVehiculos;
                    actualizarCliente(listaClientes[i]);
                }    
            }
        }            
    }*/
function actualizarVehiculo(pObjVehiculo){
    let listaVehiculos = getVehiculos();
    let listaClientes = getClientes();
    let cedula = localStorage.getItem('cedulaSeleccionadaLS');
    for (let i = 0; i < listaVehiculos.length; i++){
        if (listaVehiculos[i].matricula == pObjVehiculo.matricula){
            listaVehiculos[i] = pObjVehiculo;
            let cliente = buscarClientePorCedula(cedula);
            cliente.listaVehiculos = listaVehiculos;
            actualizarCliente(cliente);
        }
    }
    /*for (let i = 0; i < listaClientes.length; i++) {
        if(listaClientes[i].cedula = cedula){
            listaClientes[i].listaVehiculos = listaVehiculos;

            localStorage.setItem('listaClientesLS', JSON.stringify(listaClientes));
        }
    }*/
}

function buscarVehiculoPorMatricula(pMatricula){
    let listaVehiculos = getVehiculos();
    let vehiculoEncontrado;

    listaVehiculos.forEach(objVehiculoTemp => {
        if(pMatricula == objVehiculoTemp.matricula){
            vehiculoEncontrado = objVehiculoTemp;
        }
    });
    return vehiculoEncontrado;
}