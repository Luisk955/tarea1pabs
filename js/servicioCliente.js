function registrarCliente(pObjCliente){
    let listaClientes = getClientes();
    
    listaClientes.push(pObjCliente);
    localStorage.setItem('listaClientesLS', JSON.stringify(listaClientes));

}

function getClientes(){
    let listaClientes = JSON.parse(localStorage.getItem('listaClientesLS'));
    let clientes = [];

    if(listaClientes == null){
        clientes = [];
    }else{
        listaClientes.forEach(obj =>{
            let objCliente = new Cliente(obj.cedula, obj.nombre, obj.primerApellido, obj.segundoApellido, obj.telefono, obj.email);    
            clientes.push(objCliente);
        })
    }

    return clientes;
}