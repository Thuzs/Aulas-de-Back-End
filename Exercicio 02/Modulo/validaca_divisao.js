const { exit } = require("node:process")

function val_div(primeiro, segundo){
    let n1 = Number(primeiro)
    let n2 = Number(segundo)


    if(n1 == 0 || n2 == 0 ){
        console.log("ERRO: A entrada não pode receber 0 para fazer uma divisão")
        true
        exit()
   }else{
   }
}

module.exports = {
    val_div
}
