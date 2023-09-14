    let inteira = 28.50;
    let meia = 14.25;
    let ingresso;

    function calculaTotal(tipoIngresso, qtdIngresso){
        if(tipoIngresso === "Inteira"){
            ingresso = inteira
        } else {
            ingresso = meia
        }
        return console.log(`Valor total dos ingressos é de ` + ingresso * qtdIngresso)
    }

    module.exports = {calculaTotal};