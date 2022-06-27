
function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

let michelle = aleatorio(1,3)
/*
1 = piedra
2= papel
3= tijeras
*/

let jugada = prompt("Di tu jugada")

function ppt(jugador, maquina){
    if(maquina == 1 && jugador == "papel"){
        return alert("ganaste")
    }else if(maquina == 1 && jugador == "tijeras"){
        return alert("perdiste")
    }else if(maquina == 1 && jugador == "piedra"){
        return  alert("empate")
    }else if(maquina == 2 && jugador == "tijeras"){
        return alert("ganaste")
    }else if(maquina == 2 && jugador == "piedra"){
        return  alert("perdiste")
    }else if(maquina == 2 && jugador == "papel"){
        return  alert("empate")
    }else if(maquina == 3 && jugador == "tijeras"){
        return alert("empate")
    }else if(maquina == 3 && jugador == "piedra"){
        return  alert("ganaste")
    }else if(maquina == 3 && jugador == "papel"){
        return  alert("perdiste")
    }
}

console.log(michelle);

ppt(jugada, michelle)

/*
recibir jugada
comparar jugada con jugada aleatoria de maquina
arrojar ganador
*/