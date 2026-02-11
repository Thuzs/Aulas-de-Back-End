/****************************************************************************
 * Objetivo: Arquivo responsável pelas funções de Calculos para este projeto
 * 
 * 
 * 
 * **************************************************************************/

//Validação para entradas vazias ou de caracteres inválidos

//Criando uma função para Calcular o Valor da compra parcelada
//Metodo tradicional de criar uma função
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebo os argumentos da função em variáveis locais
    //As variaveis (valor, taxa e tempo são numéricas por conta da conversão)
    //Mas os argumentos(valorCompra, taxaJuros, tempoPagto ainda serão Strings)
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPagto)
    
    


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

module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}