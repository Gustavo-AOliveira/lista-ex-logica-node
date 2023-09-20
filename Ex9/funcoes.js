function calculaImc(altura, peso){
    const imc = peso / (altura * altura);
        console.log("Seu IMC e " + imc.toFixed(2))
            return imc.toFixed(2)
}
function situacao(imc){
    if(imc > 40){
        console.log("Sua classificação é Obesidade Grau III")
    }else if(imc >= 35 && imc < 39.9){
        console.log("Sua classificação é Obesidade Grau II")
    }else if(imc >= 30 && imc < 34.9){
        console.log("Sua classificação é Obesidade Grau I")
    }else if(imc >= 25 && imc < 29.9){
        console.log("Sua classificação é Sobrepeso")
    }else if(imc >= 18 && imc < 24.9){
        console.log("Sua classificação é Peso Normal")
    }else if(imc < 18.5){
        console.log("Sua classificação é  Abaixo do Peso")
    }
}
module.exports = {calculaImc, situacao}