let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaxino=10;



function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt( document.getElementById ('valorUsuario').value);

        //El usuario acierta.
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()* numeroMaxino)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //si la lista es igual al numero maximo

    if (listaNumerosSorteados.length == numeroMaxino){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        
    }else{
         //si numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();


    } else {
        //incluir el numero genrado a la matrix si no ha sido sorteado
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }

   
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaxino}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    
    //limpiar caja
    limpiarCaja();

    //inicializar el numero de intentos
    //generar el numero aleatorio
    //indicar mensajes de intervalos de numero
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

