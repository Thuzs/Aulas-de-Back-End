/****************************************************
 * Objetivo: arquivo responsavel pelas funções de calcular (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autor: Arthur
 * versão 1.0
 ******************************************************/

//Modelo de função anonima
//Calcular as 4 operaçoes matemáticas
const calcular = function(numero1, numero2, operador){
    let valor1              = Number(numero1)
    let valor2              = Number(numero2)
    let operadorMatematico  = String(operador).toUpperCase()

    //Condicionais para validar qual o tipo de operação matemática
    //A ausencia da { } na condicional é porque qualquer condicional que tenha apenas uma linha
    //de processamento a a { } torna-se opcional
    // if(operadorMatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadorMatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadorMatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if(operadorMatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2
    

    switch (operadorMatematico) {
        case "SOMAR": //if
            resultado = somar(valor1, valor2)
            break;
        case "SUBTRAIR": //else if
            resultado = subtrair(valor1, valor2)
            break;
        case "MULTIPLICAR": //else if
            resultado = multiplicar(valor1, valor2)
            break;
        case "DIVDIR": //else if
            resultado = dividir(valor1, valor2)
            break;
        default: //else   
        
    }

    return resultado

}    


//Exemplo de funções baseadas em SETA (Arrow function)
//Funções para realzar as operações matemáticas

const somar         = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair      = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar   = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir       = (numero1, numero2) => Number(numero1) / Number(numero2)



module.exports = {
    calcular,
    somar,
    subtrair,
    dividir,
    multiplicar,
}
// //Saída
//if(resultado != undefined)
//    return Number(resultado).toFixed(2)
//else
//     return false



