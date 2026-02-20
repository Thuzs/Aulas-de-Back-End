const { exit } = require("node:process")

function validar(primeiro){
    let n1 = Number(primeiro)

    if(primeiro == "" || isNaN(primeiro)){
        console.log("ERRO: A entrada do primeiro número apenas aceita números")
        exit()
   }else{
   }
}

module.exports = {
    validar
}