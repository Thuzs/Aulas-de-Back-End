/**********************************************************
 * Objetivo: Criar um sistema que permite calculo de juros
 * utilizando boas práticas com funções
 * Data: 11/02/2026
 * Autor: Brayan
 * Versão: 1.0 
 **********************************************************/
//Import da biblioteca do readline
const readline = require('readline')

//Criar o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome do cliente
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    //Entrada do nome do produto
    entradaDeDados.question('Digite o nome do Produto: ', function(produto){
        let nomeProduto = produto

        //Entrada do valor da compra
        entradaDeDados.question('Digite o valor da Compra: ', function(capital){
            let capitalProduto = capital

            //Entrada da taxa de juros
            entradaDeDados.question('Digite a taxa de juros a ser aplicada na Compra: ', function(taxa){
                let taxaCompra = taxa

                //Entrada do tempo de pagamento
                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function(tempo){
                    let tempoPagamento = tempo

                    //Importa da biblioteca que
                    let calculos = require('./Modulo/calculos.js')

                    let montante = calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){
                        console.log('O montante final é: ' + montante.toFixed(2))
                    }else{
                        console.log('ERRO: Devido a problemas no calculo de juros, o programa encerrou.')
                        entradaDeDados.close()
                    }
                })
            })
        })
    })
})
