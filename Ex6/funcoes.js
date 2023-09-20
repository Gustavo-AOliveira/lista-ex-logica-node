function calcular(peso){
    const grama = 0.035
    const gramaAcima1kg = 0.03

    if(peso < 1000){
        const total = grama * peso
        console.log("Total a pagar é " + total.toFixed(2))
    }else if(peso >= 1000){
        const total = gramaAcima1kg * peso
        console.log("O total a pagar é " + total.toFixed(2))
    }else if(peso <= 0){
         console.log("Peso Invalido")
    }
}
module.exports = {calcular}