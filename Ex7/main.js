const ReadlineSync = require('readline-sync')
const {calculaTemperatura} = require('./funcoes.js')

const temperatura = parseFloat(ReadlineSync.question("Digite a sua temperatura: "))
calculaTemperatura(temperatura)