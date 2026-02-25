/*****************************************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número 
 * Data: 25/02/2026
 * Autor: Arthur
 * Versão: 1.0
 *****************************************************************/
//Import da biblioteca de calclos matemáticos
const calculosMatematicos = require('./calcular.js')

//Função para imprimir a tabuada usando while
const gerarTabuada = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0
    let resultado

    //Repetição para gerar a atabuada até 10
    while(cont <= 10){
        //Chama a função de multipicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} X ${cont} = ${resultado}`)
        //cont = cont + 1
        //cont++
        cont += 1 
    }

}

const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    let resultado

    //Repetição para gerar a atabuada até 10
    for(let cont = 0; cont <= 10; cont+=1.2){
        //Chama a função de multipicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} X ${cont} = ${resultado}`)
        //cont = cont + 1
        //cont++
    }

}

gerarTabuadaFor(9)