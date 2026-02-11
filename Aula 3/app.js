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

//Criando uma função para Calcular o Valor da compra parcelada
//Metodo tradicional de criar uma função
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebo os argumentos da função em variáveis locais
    //As variaveis (valor, taxa e tempo são numéricas por conta da conversão)
    //Mas os argumentos(valorCompra, taxaJuros, tempoPagto ainda serão Strings)
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPagto)
    
    //Validação para entradas vazias ou de caracteres inválidos
    if(valorCompra == '' || isNaN(valorCompra) || tempoPagto == '' || isNaN(tempoPagto)){
        console.log('ERRO: Valores de compra ou tmepo de pagamento estão incorretos')
        return false
    }else{

        //Chama a função para converter o número em percentual 
        let percentual = calcularPercentual(taxa)
    
        //Validação para o erro do percentual na função cancularPercentual()
        if(percentual){
            let montante = valor * ((1+percentual) ** tempo)
            return Number(montante.toFixed(2))
        }else{
            console.log("ERRO: Valor da taxa está incorreto.")
            return false
        }
    }
}

function calcularPercentual(numero){
    let numeroPercentual = Number(numero)

    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false //Não pode processar
    }else{
        //Processamento do calculo do percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
    }
    
}