const ReadlineSync = require('readline-sync')
const {calculaImc, situacao} = require('./funcoes.js')

const peso = parseFloat(ReadlineSync.question("Digite seu peso: "))
const altura = parseFloat(ReadlineSync.question("Digite sua altura: "))

const imc = calculaImc(altura,peso)

situacao(imc)
