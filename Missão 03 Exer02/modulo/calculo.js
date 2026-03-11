function calculoMedia(nota1, nota2, nota3, nota4){

    media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / Number(4)
    return media

}

function status(){
    if(media >= 70){
        situacao = "aprovado"
        return situacao
    }else if(media < 50){
        situacao = "reprovado"
        return situacao
    }else if(media >= 50 && media <= 69){
        situacao = "recuperação"
        return situacao
    }
}

function resultadoExame(exame, media){
notaFinal = (Number(exame) + Number(media)) / Number(2)
console.log(exame)
return notaFinal

}
// if(notaFinal > 60 ){
//     return "aprovado no exame"
    
// }else{
//     return "reprovado no exame"
    
// }

module.exports ={
    calculoMedia,
    status,
    resultadoExame
}