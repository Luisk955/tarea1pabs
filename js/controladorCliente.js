let btnRegistrarCliente = document.querySelector("#btnRegistrarCliente");
btnRegistrarCliente.addEventListener('click', obtenerDatosRegistroCliente);

function obtenerDatosRegistroCliente(){
    let cedula = document.querySelector('#txtCedula').value
    let nombre = document.querySelector('#txtNombre').value;
    let primerApellido = document.querySelector('#txtPrimerApellido').value;
    let segundoApellido = document.querySelector('#txtSegundoApellido').value;
    let telefono = document.querySelector('#txtTelefono').value;
    let email = document.querySelector('#txtEmail').value;
    //let aire = document.querySelector('#txtAire').value;

    let objCliente = new Cliente(cedula, nombre, primerApellido, segundoApellido, telefono, email);

    registrarCliente(objCliente);
    console.log(objCliente);
}
