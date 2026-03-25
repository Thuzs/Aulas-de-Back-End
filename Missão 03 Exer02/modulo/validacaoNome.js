const { exit } = require("node:process")

function val_nome(nomeAluno){

if(nomeAluno == '' || !isNaN(nomeAluno)){
    console.log('ERRO: É obrigatório o preenchimento de forma correta nessa entrada !!!')
    exit()
}else{}
}

module.exports ={
    val_nome
}