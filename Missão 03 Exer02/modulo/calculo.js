function calculoMedia(nota1, nota2, nota3, nota4){

    Number(media) = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / Number(4)

}

function status(){
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
    console.log(media)
}

function resultadoExame(notaExame, notaFinal){

notaFinal = (Number(notaExame) + Number(media)) / 2


    if(notaFinal > 60 ){
        return "aprovado no exame"
        
    }else{
        return "reprovado no exame"
        
    }
}

module.exports ={
    calculoMedia,
    status,
    resultadoExame
}