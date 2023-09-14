function diaSemana(dia){
    if(dia == 0){
        console.log("Hoje e Domingo!")
    }else if(dia == 1){
        console.log("Hoje e Segunda")
    }else if(dia == 2){
        console.log("Hoje e Terca-Feira")
    }else if(dia == 3){
        console.log("Hoje e Quarta-Feira")
    }else if(dia == 4){
        console.log("Hoje e Quinta-Feira")
    }else if(dia == 5){
        console.log("Hoje e Sexta-Feira")
    }else if(dia == 6){
        console.log("Hoje e Sabado")
    }else {
        console.log("Dia da semana inválido")
    }
} 
module.exports = {diaSemana}
