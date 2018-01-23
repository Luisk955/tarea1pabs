function registrarTrabajo(pObjTrabajo){
    let listaTrabajos = getTrabajos();
    
    listaTrabajos.push(pObjTrabajo);
    localStorage.setItem('listaTrabajosLS', JSON.stringify(listaTrabajos));
    mostrarDatosTablaTrabajos();

}

function getTrabajos(){
    let listaTrabajos = JSON.parse(localStorage.getItem('listaTrabajosLS'));
    let trabajos = [];

    if(listaTrabajos == null){
        trabajos = [];
    }else{
        listaTrabajos.forEach(obj =>{
            let objTrabajo = new Trabajo(obj.vehiculo, obj.nombreTrabajo, obj.descripcionTrabajo, obj.fecha, obj.estado, obj.costo);    
            trabajos.push(objTrabajo);
        })
    }

    return trabajos;
}