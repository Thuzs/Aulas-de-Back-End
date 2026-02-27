const readline = require('readline')

//Importando biblioteca de reposição da , para o . da variavel peso
const reposicaoPeso = require('./Modulo/replace_peso.js')

//Importando biblioteca de validação do peso
const validacaoPeso = require('./Modulo/validacao_peso.js')

//Importando biblioteca de reposição da , para o . da variavel altura
const reposicaoAltura = require('./Modulo/replace_altura.js')

//Importando biblioteca de validação da altura
const validacaoAltura = require('./Modulo/validacao_altura.js')

//Importando biblioteca de calculo do imc
const calculoDeImc = require('./Modulo/calculo.js')

//Importando a biblioteca de classificação do imc
const classificação =require('./Modulo/classificacao.js')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do peso
entradaDeDados.question("Digite seu peso: ", function(p){
    let peso = p

    //Chamando função de reposição da , pro . do peso
    let rep_peso = reposicaoPeso.re_peso(peso)

    //Chamando função para validação do peso
    let val_peso = validacaoPeso.validar(rep_peso)

    
    //Entrada de dados da altura
    entradaDeDados.question("Digite sua altura: ", function(a){
        let altura = a

        //Chamando função de reposição da , pro . da altura
        let rep_altura = reposicaoAltura.re_altura(altura)

            //Chamando função de validação da altura
            let val_altura = validacaoAltura.validar(rep_altura)

                //Chamando função de calculo de imc
                let imc = calculoDeImc.calcular(rep_peso, rep_altura)

                    //Chamando função de classifição do imc 
                    let classifi = classificação.clas(imc)
        

    })
})