const { exit } = require("node:process")

function relatorioAlunoExame (NomeAluno, NomeProf, situacao, nota1, nota2, nota3, nota4, exame, media, notaFinal  ){
    console.log(`O aluno ${NomeAluno} foi ${situacao} na disciplina: . \nCurso: \nProfessor: ${NomeProf} \nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${exame} \nMédia final: ${media} \nMédia final do Exame: ${notaFinal}`)
    exit()
}
function relatorioAlunoAprovado (NomeAluno, NomeProf, situacao, nota1, nota2, nota3, nota4, media){
    console.log(`O aluno ${NomeAluno} foi ${situacao} na disciplina: . \nCurso: \nProfessor: ${NomeProf} \nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4} \nMédia final: ${media}`)
    exit()
}

module.exports ={
    relatorioAlunoExame,
    relatorioAlunoAprovado

}