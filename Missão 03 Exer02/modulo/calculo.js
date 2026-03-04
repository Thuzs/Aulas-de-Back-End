
function status(nota1, nota2, nota3, nota4, situacao, media){
let = Number(nota1)
let = Number(nota2)
let = Number(nota3)
let = Number(nota4)

media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / Number(4)
console.log(media)
if(media >= 70){
    situacao = "aprovado"
    return situacao
}else if(media < 50){
    situacao = "reprovado"
    return situacao
}else if(media <= 69 && media >= 50){
    situacao = "recuperação"
    return situacao
}

    
}

function resultadoExame(notaExame, media, notaFinal){

notaFinal = Number(notaExame) + Number(media)
    if(notaFinal > 60 ){
        situacao = "aprovado no exame"
    }else{
        status()
    }
}

module.exports ={
    status,
    resultadoExame
}