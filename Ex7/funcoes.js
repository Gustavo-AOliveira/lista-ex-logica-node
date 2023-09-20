function calculaTemperatura(temperatura){
    if(temperatura > 41){
        console.log("A situação para sua temperatura é Hipertermia")
    }else if(temperatura >= 39.6 && temperatura < 41){
        console.log("A situação para sua temperatura é Febre alta")
    }else if(temperatura >= 37.6 && temperatura < 39.6){
        console.log("A situação para sua temperatura é Febre")
    }else if(temperatura >= 36 && temperatura < 37.6){
        console.log("A situação para sua temperatura é Normal")
    }else if(temperatura < 36){
        console.log("A situação para sua temperatura é Hipotermia")
    }
}

module.exports = {calculaTemperatura}