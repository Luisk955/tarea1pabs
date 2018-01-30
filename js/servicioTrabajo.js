function getTrabajos(){
    let matricula = localStorage.getItem('matriculaSeleccionadaLS');
    let vehiculo = buscarVehiculoPorMatricula(matricula);
    let trabajos = vehiculo.listaTrabajos;
    
    return trabajos;
    console.log(trabajos);

}