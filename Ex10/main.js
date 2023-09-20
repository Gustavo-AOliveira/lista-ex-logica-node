const ReadlineSync = require('readline-sync')
const {diaMes, msgEnvio, diaSemana} = require('./funcoes.js')


const diaInput = parseInt(ReadlineSync.question("Digite o dia: "))
const diaSemanaInput = parseInt(ReadlineSync.question("Digite o dia da semana: "))
const diaMesInput = parseInt(ReadlineSync.question("Digite o mes: "))
const anoInput = parseInt(ReadlineSync.question("Digite o ano: "))

const mesEmail = diaMes(diaMesInput)

const diaSemanaEmail = diaSemana(diaSemanaInput)
msgEnvio(diaSemanaEmail, mesEmail, anoInput, diaInput)

