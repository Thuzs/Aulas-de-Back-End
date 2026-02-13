const { exit } = require("node:process")

function mais(primeiro, segundo){
    let n1 = Number(primeiro)
    let n2 = Number(segundo)

    let cal = n1 + n2

    console.log(Number(cal.toFixed(2)))
    exit()


}
function menos(primeiro, segundo){
    let n1 = Number(primeiro)
    let n2 = Number(segundo)

    let cal = n1 - n2

    console.log(Number(cal.toFixed(2)))
    exit()


}
function multi(primeiro, segundo){
    let n1 = Number(primeiro)
    let n2 = Number(segundo)

    let cal = n1 * n2

    console.log(Number(cal.toFixed(2)))
    exit()


}
function dividir(primeiro, segundo){
    let n1 = Number(primeiro)
    let n2 = Number(segundo)

    if(true){
        //Importando biblioteca da validação do 0 na divisão
    let calculo = require('./validaca_divisao.js')
    let validar = calculo.val_div(primeiro, segundo)
        validar
    }else{

    }
    let cal = n1 / n2

    console.log(Number(cal.toFixed(2)))
    exit()

}
module.exports = {
    mais,
    menos,
    multi,
    dividir
}