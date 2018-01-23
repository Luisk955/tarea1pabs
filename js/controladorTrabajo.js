llenarSltVehiculo();
let btnRegistrarTrabajo = document.querySelector("#btnRegistrarTrabajo");
btnRegistrarTrabajo.addEventListener('click', obtenerDatosRegistroTrabajo);

function obtenerDatosRegistroTrabajo(){
    let vehiculo = document.querySelector('#sltVehiculo').value;
    let nombreTrabajo = document.querySelector('#txtNombreTrabajo').value;
    let descripcionTrabajo = document.querySelector('#txtDescripcionTrabajo').value;
    let fecha = document.querySelector('#txtFecha').value;
    let estado = document.querySelector('#txtEstado').value;
    let costo = Number(document.querySelector('#txtCosto').value);
    //let aire = document.querySelector('#txtAire').value;

    let objTrabajo = new Trabajo(vehiculo, nombreTrabajo, descripcionTrabajo, fecha, estado, costo);
    let listaVehiculos = getVehiculos();
    console.log(listaVehiculos);
    console.log(objTrabajo); 
    registrarTrabajo(objTrabajo);
    console.log(objTrabajo);

}



function llenarSltVehiculo(){
    let vehiculos = getVehiculos();
    let sltVehiculo = document.querySelector('#sltVehiculo');
    
    vehiculos.forEach(obj => {
        let option = document.createElement('option');
        option.innerHTML = obj.matricula + " " + obj.marca;
        option.value = obj.matricula;
        sltVehiculo.add(option);

    });

}