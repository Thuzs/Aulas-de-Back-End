const { exit } = require("node:process")

function relatorioAlunoExame (NomeAluno, NomeProf, profSexo, alunoSexo, situacao, disciplina, nomCurso, nota1, nota2, nota3, nota4, exame, media, notaFinal){
    console.log(`${alunoSexo} ${NomeAluno} foi ${situacao} na disciplina: ${disciplina} \nCurso: ${nomCurso} \n${profSexo}: ${NomeProf} \nNotas ${alunoSexo}: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${exame} \nMédia final: ${media} \nMédia final do Exame: ${notaFinal}`)
    exit()
}
function relatorioAlunoAprovado (NomeAluno, NomeProf, profSexo, alunoSexo, situacao, disciplina, nomCurso, nota1, nota2, nota3, nota4, media){
    console.log(`${alunoSexo} ${NomeAluno} foi ${situacao} na disciplina: ${disciplina} \nCurso: ${nomCurso} \n${profSexo}: ${NomeProf} \nNotas ${alunoSexo}: ${nota1}, ${nota2}, ${nota3}, ${nota4} \nMédia final: ${media}`)
    exit()
}

module.exports ={
    relatorioAlunoExame,
    relatorioAlunoAprovado

}