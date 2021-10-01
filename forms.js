//Np se si dentro de las funciones vienen los id que se usaron en el primer Sprint//

const 	expresion = {
    documento: /^[0-9]{8,10}$/,
    password: /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-aA-Z0-9-.]+$/
}
                                        
function checkNumDocumento(valor,tipo){

	if(tipo.value !== ''){
		return false; 
	} else {
		if (expresion.documento.test(valor)) {
			return true;
		} else {
			return false;
        }
    }
}

function checkContrasena(valor){

    if(expresion.password.test(valor)){
        alert(valor+" es valido ");
        return true;        
    }
    else{
        alert(valor+" NO es valido!");
        return false;
    }
}

function checkContrasena(valor){

    if(expresion.password.test(valor)){
        alert(valor+" es valido ");
        return true;        
    }
    else{
        alert(valor+" NO es valido!");
        return false;
    }
}    

modulo.export  = { checkNumDocumento, checkCorreo,checkContrasena}