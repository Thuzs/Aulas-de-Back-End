const { exit } = require("node:process")

function val_nome(nomeAluno, nomeProf){

if(nomeAluno == '' || !isNaN(nomeAluno) || nomeProf == '' ||  !isNaN(nomeProf) ){
    console.log('ERRO: É obrigatório o preenchimento de forma correta do nome !!!')
    exit()
}else{}
}

module.exports ={
    val_nome
}