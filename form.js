const 	expresion = {
    ti: /^([0-9]){10}$/,
    cc_ps: /^([0-9]){8,10}$/,
    email: /\S+@\S+\.\S+/,
    password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])?(?=.*[A-Z])(?=.*[a-z])\S{8,}$/
}

function checkNumDocumento(valor, tipo){
switch (tipo){
    case "TI":
        return expresion.ti.test(valor);
    break;
    case "CC":
        return expresion.cc_ps.test(valor);
    break;
    case "PS":
        return expresion.cc_ps.test(valor);
    break;
    case "TR":
        return expresion.cc_ps.test(valor);
    break;
    case "Registro civil":
        return expresion.cc_ps.test(valor);
    break;
}
}

function checkCorreo(email){
return expresion.email.test(email);
}

function checkContrasena(pass){
return expresion.password.test(pass)
}

module.exports.checkNumDocumento = checkNumDocumento;
module.exports.checkCorreo = checkCorreo;
module.exports.checkContrasena = checkContrasena;

