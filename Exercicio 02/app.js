/**************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 13/02/2026
 * Autor: Arthur
 * versão 1.0
 **************************************************************************************************/

const readline = require('readline')

//Importando biblioteca de validação de , para .
const validacaore = require('./Modulo/replace.js')

//Importando biblioteca de validação do n1
const validacaon1 = require('./Modulo/validacao_n1.js')

//Importando biblioteca de validação do n2
const validacaon2 = require('./Modulo/validacao_n2.js')

//Importando biblioteca de validação do op
const validacaoop = require('./Modulo/validacao_op.js')

//Importando biblioteca dos calculos
const calculo = require('./Modulo/calculo.js')

//Criar o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do primeiro número
entradaDeDados.question("Digite o primeiro número: ", function(n1){
    let primeiro = n1
    
    //Utilizando a função de replace da , para o .
    let val_replace1 = validacaore.val_rep(primeiro)
    
    // Utilizando a função de validação do n1
    let val_n1 = validacaon1.validar(val_replace1)
   

    //Entrada do segundo número
    entradaDeDados.question("Digite o segundo número: ", function(n2){
        let segundo = n2
        
        //Utilizando a função de replace da , para o .
        let val_replace2 = validacaore.val_rep(segundo)

        //Utilizando a função de validação do n2
        let val_n2 = validacaon2.validar(val_replace2)
        

        //Entrada da operação matemática
        entradaDeDados.question("Digite a operação matemática desejada (mais, menos, multiplicar ou dividir): ", function(op){
            let operacao = op

            //Utilizando a função de validação do op
            let val_op = validacaoop.validar(operacao)
            val_op

            //Utilizando a função de mais
            if(operacao.toLowerCase() == "mais"){
                let resultado = calculo.mais(val_replace1, val_replace2)
                resultado
                
            //Utilizando a função de menos
            }else if(operacao.toLowerCase() == "menos"){
                let resultado = calculo.menos(val_replace1, val_replace2)
                resultado

            //Utilizando a função de multiplicação
            }else if(operacao.toLowerCase() == "multiplicar"){
                let resultado = calculo.multi(val_replace1, val_replace2)
                resultado

            //Utilizando a função de divisão
            }else if(operacao.toLowerCase() == "dividir"){
                let resultado = calculo.dividir(val_replace1, val_replace2)
                resultado

            }
        })
    })
})