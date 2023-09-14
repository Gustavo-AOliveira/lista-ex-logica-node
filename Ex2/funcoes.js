let cor;

function semaforo(cor) {
    if(cor === "Vermelho"){
        console.log("Espere")

    }else if(cor === "Verde"){
        console.log("Atravesse")

    }else {
        console.log("Farol inoperante")
    }
}

module.exports = {semaforo}
