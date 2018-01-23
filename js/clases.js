class Cliente{
    constructor(pCedula, pNombre, pPrimerAppellido, pSegundoApellido, pTelefono, pEmail){
        this.cedula = pCedula;
        this.nombre = pNombre;
        this.primerApellido = pPrimerAppellido;
        this.segundoApellido = pSegundoApellido;
        this.telefono = pTelefono;
        this.email = pEmail;
        this.listaVehiculos = [];
    }
    
    agregarVehiculo(pVehiculo){
        this.listaVehiculos.push(pVehiculo);
    }
}

class Vehiculo{
    constructor(pCliente, pMatricula, pMarca, pModelo, pAnno, pCapacidad, pKilometraje/*, pAire*/){
        this.cliente = pCliente;
        this.matricula = pMatricula;
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anno = pAnno;
        this.capacidad = pCapacidad;
        this.kilometraje = pKilometraje;
        //this.aire = pAire;
        this.listaTrabajos = [];
    }
    agregarTrabajo(pObjTrabajo){   
        this.listaTrabajos.push(pObjTrabajo);
    }
}

class Trabajo{
    constructor(pVehiculo, pNombre, pDescripcion, pFecha, pEstado, pCosto){
        this.vehiculo = pVehiculo;
        this.nombreTrabajo = pNombre;
        this.descripcionTrabajo = pDescripcion;
        this.fecha = pFecha;
        this.estado = pEstado;
        this.costo = pCosto;
    }
}