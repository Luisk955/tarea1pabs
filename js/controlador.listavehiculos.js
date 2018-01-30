mostrarDatosTablaVehiculos();
function mostrarDatosTablaVehiculos(){
    let vehiculos = getVehiculos();
    
    let tbody = document.querySelector('#tblVehiculos tbody');
    tbody.innerHTML = "";
    
    vehiculos.forEach(objVehiculo => {
        let fila = tbody.insertRow();
        
        let celdaAgregarTrabajo = fila.insertCell();
        
        let btnAgregarTrabajo = document.createElement('button');
        btnAgregarTrabajo.type = 'button';
        btnAgregarTrabajo.innerHTML = 'Registrar Trabajo';
        btnAgregarTrabajo.className = 'btn btn-default'
        btnAgregarTrabajo.dataset.matriculaVehiculo = objVehiculo.matricula;
        
        celdaAgregarTrabajo.appendChild(btnAgregarTrabajo);

        fila.insertCell().innerHTML = objVehiculo.matricula;
        fila.insertCell().innerHTML = objVehiculo.marca;
        fila.insertCell().innerHTML = objVehiculo.modelo;
        fila.insertCell().innerHTML = objVehiculo.anno;
        fila.insertCell().innerHTML = objVehiculo.capacidad;
        fila.insertCell().innerHTML = objVehiculo.kilometraje;
        
        btnAgregarTrabajo.addEventListener('click', agregarTrabajoVehiculo);       
    });
}

function agregarTrabajoVehiculo(){
    let matricula = this.dataset.matriculaVehiculo;
    localStorage.setItem('matriculaSeleccionadaLS', matricula);
    window.location.href = 'listaTrabajos.html';
}