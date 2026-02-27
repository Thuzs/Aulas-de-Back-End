const { exit } = require("node:process")

function validar(rep_peso){
    let = Number(rep_peso)

    if(rep_peso == "" || isNaN(rep_peso) || rep_peso <= 0){
        console.log("ERRO: A entrada do seu peso apenas aceita números")
        exit()
   }else{
   }
}

module.exports = {
    validar
}