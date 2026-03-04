const { exit } = require("node:process")

function val_nota(valor1, valor2, valor3, valor4,){
    let = Number(valor1)
    let = Number(valor2)
    let = Number(valor3)
    let = Number(valor4)

    if( valor1 == '' || valor1 < 0 || valor1 > 100 || valor2 == '' || valor2 < 0 || valor2 > 100 || valor3 == '' || valor3 < 0 || valor3 > 100 || valor4 == '' || valor4 < 0 || valor4 > 100){
        console.log("ERRO: É aceito apenas notas entre 0 a 100 !!!")
        exit()
    }
}
module.exports = {
    val_nota
}