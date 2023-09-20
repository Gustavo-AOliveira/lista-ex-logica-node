const ReadlineSync = require('readline-sync')
const {calculaMedia, situacao} = require('./funcoes.js')

const nota1 = parseFloat(ReadlineSync.question("Digite a primeira nota: "))
const nota2 = parseFloat(ReadlineSync.question("Digite a segunda nota: "))
const nota3 = parseFloat(ReadlineSync.question("Digite a terceira nota: "))

const media = calculaMedia(nota1, nota2, nota3)

situacao(media)