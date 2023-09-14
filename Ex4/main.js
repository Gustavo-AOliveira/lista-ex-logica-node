const ReadlineSync = require('readline-sync')
const {diaSemana} = require('./funcoes.js')

const dia = parseInt(ReadlineSync.question("Digite o dia da semana que você deseja consultar: "))
diaSemana(dia);