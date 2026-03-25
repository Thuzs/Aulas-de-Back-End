const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const validacao_nomes = require('./modulo/validacaoNome')
const validacao_notas = require('./modulo/validacaoNota')
const calculo_media = require('./modulo/calculo')
const relatorio_aluno = require('./modulo/relatorio')

entradaDeDados.question("Nome do aluno: ", function(aluno){
    let nomeAluno = aluno

    let valNomeAluno = validacao_nomes.val_nome(nomeAluno)

    entradaDeDados.question("Nome do professor: ", function(prof){
        let nomeProf = prof

        let valNomeProf = validacao_nomes.val_nome(nomeProf)

        entradaDeDados.question("Sexo do professor: ", function(sexo){
            let sexoProf = sexo

            let valSexo = validacao_nomes.val_nome(sexoProf)

            entradaDeDados.question("Sexo do aluno: ", function(sex){
                let sexoAluno = sex

                let valSexo = validacao_nomes.val_nome(sexoAluno)

                entradaDeDados.question("Nome do curso: ", function(curso){
                    let nomCurso = curso

                    let valCurso = validacao_nomes.val_nome(nomCurso)

                    entradaDeDados.question("Qual é o nome da disciplina: ", function(dis){
                        let disciplina = dis

                        let valDisci = validacao_nomes.val_nome(disciplina)

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

                                        let media = calculo_media.calculoMedia(nota1, nota2, nota3, nota4)
                                        let statusAluno = calculo_media.status(media)
                                        console.log(statusAluno)

                                        

                                        if (statusAluno == "aprovado" || statusAluno == "reprovado"){

                                            let rela_aluno = relatorio_aluno.relatorioAlunoAprovado(nomeAluno, nomeProf, situacao, disciplina, nomCurso, nota1, nota2, nota3, nota4, media)
                                       
                                        }else if(statusAluno == "recuperação"){
                                            entradaDeDados.question("Digite a nota do aluno no exame: ", function(exame){

                                                
                                                let resultado = calculo_media.resultadoExame(exame, media)


                                                let rela_aluno = relatorio_aluno.relatorioAlunoExame(nomeAluno, nomeProf, situacao, disciplina, nomCurso, nota1, nota2, nota3, nota4, exame, media, notaFinal)
                                            })

                                        }else{
                                        //let rela_aluno = relatorio_aluno.relatorioAluno(nomeAluno, nomeProf, situacao, nota1, nota2, nota3, nota4, media)
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