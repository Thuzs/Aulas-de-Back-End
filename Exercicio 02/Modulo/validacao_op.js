const { exit } = require("node:process")

function validar(operacao){
    let n2 = operacao




    if(operacao == "" || !isNaN(operacao)){
        console.log("ERRO: A entrada de operação apenas aceita uma das opções: (mais, menos, multiplicacao e divisao)")
        exit()
   }else{
   }
}

module.exports = {
    validar
}