const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const validacao_nomes = require('./modulo/validacaoNome')
const validacao_notas = require('./modulo/validacaoNota')
const calculo_media = require('./modulo/calculo')

entradaDeDados.question("Nome do aluno: ", function(aluno){
    let nomeAluno = aluno

    let valNomeAluno = validacao_nomes.val_nome(nomeAluno)

    entradaDeDados.question("Nome do professor: ", function(prof){
        let nomeProf = prof

        let valNomeProf = validacao_nomes.val_nome(nomeProf)

        entradaDeDados.question("Sexo do professor: ", function(sexo){
            let sexoProf = sexo

            entradaDeDados.question("Sexo do aluno: ", function(sex){
                let sexoAluno = sex

                entradaDeDados.question("Nome do curso: ", function(curso){
                    let nomCurso = curso

                    entradaDeDados.question("Qual é o nome da disciplina: ", function(dis){
                        let disciplina = dis

                        // Entrada nota 1
                        entradaDeDados.question("Digite a primeira nota: ", function(valor1){ 
                            let nota1 = valor1

                            let val_n1 = validacao_notas.val_nota(nota1)

                            // Entrada nota 2
                            entradaDeDados.question("Digite a segunda nota: ", function(valor2){
                                let nota2 = valor2

                                let val_n2 = validacao_notas.val_nota(nota2)
                                // Entrada nota 3
                                entradaDeDados.question("Digite a terceira nota: ", function(valor3){
                                    let nota3 = valor3

                                    let val_n3 = validacao_notas.val_nota(nota3)

                                    
                                    // Entrada nota 4
                                    entradaDeDados.question("Digite a quarta nota: ", function(valor4){
                                        let nota4 = valor4
                                        
                                        let val_n4 = validacao_notas.val_nota(nota4)

                                        let calcular = calculo_media.status(nota1, nota2, nota3, nota4)
                                        
                                        if(calcular == "recuperação"){
                                            entradaDeDados.question("Digite a nota do aluno no exame: ", function(exame){

                                                let notaExame = exame

                                                let resultado = calculo_media.resultadoExame(notaExame)

                                            })


                                        }else{

                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})