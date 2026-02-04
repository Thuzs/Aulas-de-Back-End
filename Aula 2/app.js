/***********************************************
 * Objetivo: Calcular médias escolares
 * Data: 29/01/2026
 * Autor: Arthur
 * Versão: 1.0.1.26
 ***********************************************/

/*
    Existem 3 forma de criação de variáveis

        var -> Permite a criação de um espaço na memória
                do tipo variável. Foi utilizado muito
                em projetos antigos.
                Recomendação: Caso queira utilizar,
                recomenda-se na criação de variáveis globais.
                (Inicio do código)

        let -> Permite a criação de um espaço em memória
                do tipo variável. A utilização desse padrão é
                para a criação dentro de bloco de programação { }.
                Essa variável nasce e morre dentro deste bloco.
                Não é recomendado a sua utilização em escopo global.

        const -> Permite a criação de um espaço na memória
                onde não sofrerá alteração durante o código. A const
                pode ser utilizado desntro e fora de bloco { }.
                Dica: Caso queira diferenciar uma const, um var ou 
                um let.
                A const você pode criar com letras MAIUSCULAS.



*/

// Import da biblioteca
const readline = require("readline")

// Cria o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada nome do aluno
entradaDeDados.question("Digite o nome do aluno:", function(nome){
    let nomeAluno = nome

    // Entrada nota 1
    entradaDeDados.question("Digite a primeira nota: ", function(valor1){ 
        let nota1 = valor1

        // Entrada nota 2
        entradaDeDados.question("Digite a segunda nota: ", function(valor2){
            let nota2 = valor2

            // Entrada nota 3
            entradaDeDados.question("Digite a terceira nota: ", function(valor3){
                let nota3 = valor3

                // Entrada nota 4
                entradaDeDados.question("Digite a quarta nota: ", function(valor4){
                    let nota4 = valor4

                    /*
                    Operadores de Comparação

                    ==  -> Permite comparar a igualdade de dois conteúdos
                    <   -> Permite comparar valores menores
                    >   -> Permite comparar valores maiores
                    >=  -> Permite comparar valores maiores ou iguais
                    <=  -> Permite comparar valores menores ou iguais
                    !== -> Permite comparar a diferença entre conteúdos
                    === -> Permite comparar a igualdade de conteúdos
                            e a igualdade da tipagem de dados
                    !== -> Permite comparar a diferença de conteúdos
                            e a igualdade da tipagem de dados
                    ==! -> Permite comparar a igualdade de conteúdos
                            e a diferença de tipagem de dados
                    !=! -> Permite comparar a diferença de conteúdos
                            e a diferença de tipagem de dados


                    Operadores lógicos
                        E   -> AND  -> &&
                        OU  -> OR   -> ||
                        NÃO -> NOT  -> !
                    */
                    
                    // Validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                        console.log('ERRO: É obrigatório o preenchimento de todos os dados !!!')
                    //Validação de números menores que 100
                    }else if(nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100){
                        console.log('ERRO: Somente é permitido notas menores que "100" tente novamente.')
                    //Validação de números maiores que 0
                    }else if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
                        console.log('ERRO: Somente é permitido notas maiores que "0" tente novamente.')
                    //Validação para a entrada de letras nas notas
                    //isNan() -> permite validar se o conteúdo da
                        //variável tem algum caracter ao invés de número
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
                         console.log('ERRO: Não é possivel calcular a média com a entrada de letras nas notas do aluno!!!')
                    }else{
                    /*
                        Conversão de tipos de dados
                            parseInt() -> Permite converter uma String para número INTEIRO
                            parseFloat() -> Permite converter uma String para número DECIMAL
                            Number() -> Permite converter uma String para Numero (INTEIRO OU FLOAT)
                            String() -> Permite converter um conteúdo para STRING
                            Boolean() -> Permite converter um conteúdo para BOOLEAN
                            Typeof() -> Permite verificar o tipo de dados de uma variável
                        */

                        let soma = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / Number(4)
                        console.log(`A média do aluno ${nome} é: ${soma}`)
                    }


                
                })
            })
        })
    })
})