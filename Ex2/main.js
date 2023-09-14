const {semaforo} = require('./funcoes.js') 
const readlineSync = require('readline-sync')

const cor = readlineSync.question("Qual cor voce esta vendo? ")

semaforo(cor)

