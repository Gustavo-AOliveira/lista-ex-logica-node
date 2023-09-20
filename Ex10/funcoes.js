function msgEnvio(diaSemanaEmail, mesEmail, anoInput, diaInput){
    console.log(`Enviado ${diaSemanaEmail}, ${diaInput} de ${mesEmail} de ${anoInput}`)
} 
function diaMes(dia){
    if(dia == 1){
        return diaMes = "Janeiro"
    }else if(dia == 2){
        return diaMes = "Fevereiro"
    }else if(dia == 3){
        return diaMes = "Março"
    }else if(dia == 4){
        return diaMes = "Abril"
    }else if(dia == 5){
        return diaMes = "Maio"
    }else if(dia == 6){
        return diaMes = "Junho"
    }else if(dia == 7){
        return diaMes = "Julho"
    }else if(dia == 8){
    return diaMes = "Agosto"
    }else if(dia == 9){
        return diaMes = "Setembro"
    }else if(dia == 10){
        return diaMes = "Outubro"
    }else if(dia == 11){
        return diaMes = "Novembro"
    }else if(dia == 12){
        return diaMes = "Dezembro"
    }else{
        return diaMes = "Mes Invalido"
    }
} 
function diaSemana(dia){
    if(dia == 0){
        return diaSemana ="Domingo"
    }else if(dia == 1){
        return diaSemana ="Segunda"
    }else if(dia == 2){
        return diaSemana ="Terca-Feira"
    }else if(dia == 3){
        return diaSemana ="Quarta-Feira"
    }else if(dia == 4){
        return diaSemana ="Quinta-Feira"
    }else if(dia == 5){
        return diaSemana ="Sexta-Feira"
    }else if(dia == 6){
        return diaSemana ="Sabado"
    }else {
        return diaSemana ="Dia da semana inválido"
    }
} 
module.exports = {diaMes,msgEnvio,diaSemana}