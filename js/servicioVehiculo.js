function registrarVehiculo(pObjVehiculo){
    let listaVehiculos = getVehiculos();
    listaVehiculos.push(pObjVehiculo);
    localStorage.setItem('listaVehiculosLS', JSON.stringify(listaVehiculos));
    mostrarDatosTablaVehiculos();
}

function getVehiculos(){
    let listaVehiculos = JSON.parse(localStorage.getItem('listaVehiculosLS'));
    let vehiculos = [];

    if(listaVehiculos == null){
        vehiculos = [];
    }else{
        listaVehiculos.forEach(obj =>{
            let objVehiculo = new Vehiculo(obj.cliente, obj.matricula, obj.marca, obj.modelo, obj.anno, obj.capacidad, obj.kilometraje);  
            vehiculos.push(objVehiculo);
        })
    }

    return vehiculos;
}
