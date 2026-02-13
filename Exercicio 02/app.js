const readline = require('readline')

//Criar o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do primeiro número
entradaDeDados.question("Digite o primeiro número: ", function(n1){
    let primeiro = n1

    let validacao = require('./Modulo/validacao_n1.js')
    let erro = validacao.validar(primeiro)
    if(erro){

    }else{
    
    }
    
    //Entrada do segundo número
    entradaDeDados.question("Digite o segundo número: ", function(n2){
        let segundo = n2

        let validacao = require('./Modulo/validacao_n2.js')
        let erro = validacao.validar(segundo)
        if(erro){

        }else{
    
        }

        //Entrada da operação matemática
        entradaDeDados.question("Digite a operação matemática desejada (mais, menos, multiplicação ou divisão): ", function(op){
            let operacao = op

            let validacao = require('./Modulo/validacao_op.js')
            let erro = validacao.validar(operacao)
            if(erro){

            }else{
        
            }



            //Import da biblioteca de calculo
            //let calculos = require('./Modulo/calculos.js')
        })
    })
})