let valorPercentual = 10

//Import da biblioteca de calculos financeiros
let calculos = require('./Modulo/calculos.js')

let percentual = calculos.calcularPercentual(valorPercentual)

console.log(percentual)