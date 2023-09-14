const ReadlineSync = require('readline-sync')
const {diaMes} = require('./funcoes.js')

const dia = parseInt(ReadlineSync.question("Digite o dia do Mes que vc deseja consultar: "))
diaMes(dia);