
function calculoOrcamento(ganhos, gastos){
    if(ganhos >= gastos){
        console.log("Voce esta no orcamento")
    }else {
        console.log("Voce está fora do orçamento! Não gaste mais!")
    }
}
module.exports = {calculoOrcamento};