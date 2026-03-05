function relatorioAluno (NomeAluno, NomeProf, situacao, nota1, nota2, nota3, nota4, notaExame, media  ){
    console.log(`O aluno ${NomeAluno} foi ${situacao} na disciplina: . \nCurso: \nProfessor: ${NomeProf} \nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame} \nMédia final: ${media}`)
}

module.exports ={
    relatorioAluno
}