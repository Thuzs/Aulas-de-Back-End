const { exit } = require("node:process")

function validar(segundo){
    let n2 = Number(segundo)

    if(segundo == "" || isNaN(segundo)){
        console.log("ERRO: A entrada de operação apenas aceita números")
        exit()
   }else{
   }
}

module.exports = {
    validar
}