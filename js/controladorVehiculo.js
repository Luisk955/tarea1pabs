llenarSltCliente();
let btnRegistrarVehiculo = document.querySelector("#btnRegistrarVehiculo");
btnRegistrarVehiculo.addEventListener('click', obtenerDatosRegistroVehiculo);

function obtenerDatosRegistroVehiculo(){
    let = cliente = document.querySelector('#sltCliente').value;
    let matricula = document.querySelector('#txtMatricula').value;
    let marca = document.querySelector('#txtMarca').value;
    let modelo = document.querySelector('#txtModelo').value;
    let anno = document.querySelector('#txtAnno').value;
    let capacidad = Number(document.querySelector('#txtCapacidad').value);
    let kilometraje = Number(document.querySelector('#txtKilometraje').value);
    //let aire = document.querySelector('#txtAire').value;

    let objVehiculo = new Vehiculo(cliente, matricula, marca, modelo, anno, capacidad, kilometraje);
    let listaClientes = getClientes();
    registrarVehiculo(objVehiculo);
    console.log(objVehiculo);

}



function llenarSltCliente(){
    let clientes = getClientes();
    let sltCliente = document.querySelector('#sltCliente');
    
    clientes.forEach(obj => {
        let option = document.createElement('option');
        option.innerHTML = obj.cedula + " " + obj.nombre;
        option.value = obj.cedula;
        sltCliente.add(option);

    });

}