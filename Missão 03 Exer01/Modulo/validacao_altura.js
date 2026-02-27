const { exit } = require("node:process")

function validar(altura){
    let = Number(altura)

    if(altura == "" || isNaN(altura) || altura <= 0){
        console.log("ERRO: A entrada do sua altura apenas aceita números")
        exit()
   }else{
   }
}

module.exports = {
    validar
}