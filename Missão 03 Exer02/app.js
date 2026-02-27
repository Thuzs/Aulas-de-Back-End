const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Nome do aluno: ", function(aluno){
    let nomeAluno = aluno

    entradaDeDados.question("Nome do professor: ", function(prof){
        let nomeProf = prof

        entradaDeDados.question("Sexo do professor: ", function(sexo){
            let sexoProf = sexo

        })

    })
})