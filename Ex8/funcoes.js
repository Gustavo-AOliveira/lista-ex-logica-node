function calculaMedia(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3
        console.log("A média do aluno é " + media.toFixed(1))
            return media
}
function situacao(media){
    if(media >= 8){
        console.log("Situacao: Aprovado com sucesso")
    }else if(media >= 6 && media < 8){
        console.log("Situacao: Aprovado")
    }else if(media >= 3 && media < 6){
        console.log("Situacao: Recuperacao")
    }else if(media == 0){
        console.log("Situacao: Desistente")
    }

}

module.exports = {calculaMedia, situacao}