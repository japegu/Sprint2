function checkCorreo (correo){
    var validado = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    if (validado.test (correo)){
        return true;
    }
    else {
            return false;
    }
}
modulo.export = checkCorreo;