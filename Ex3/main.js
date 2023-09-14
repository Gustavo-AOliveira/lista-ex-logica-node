const ReadlineSync = require('readline-sync')
const {calculoOrcamento} = require('./funcoes.js')

const ganhos = parseFloat(ReadlineSync.question("Quanto voce ganha: "))

const gastos = parseFloat(ReadlineSync.question("Quanto voce gasta: "))

calculoOrcamento(ganhos, gastos);