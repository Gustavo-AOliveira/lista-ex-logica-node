const ReadlineSync = require('readline-sync')
const {calcular} = require('./funcoes.js')

const peso = parseFloat(ReadlineSync.question("Digite o total de gramas que você deseja comprar: "))
calcular(peso)