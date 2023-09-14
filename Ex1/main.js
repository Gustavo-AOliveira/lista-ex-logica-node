const readlineSync = require('readline-sync');
const {calculaTotal} = require('./funcoes.js')

const tipoIngresso = readlineSync.question("Digite o tipo do ingresso que você deseja, 'Meia' ou 'Inteira': ");
const qtdIngresso = readlineSync.question("Digite a quantidade de ingressos: ");

calculaTotal(tipoIngresso, qtdIngresso);






