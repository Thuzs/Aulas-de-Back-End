const { exit } = require("node:process")

function val_nome(nomeAluno){

if(nomeAluno == '' || !isNaN(nomeAluno)){
    console.log('ERRO: É obrigatório o preenchimento de forma correta nessa entrada !!!')
    exit()
}else{}
}
function sexo_aluno(sexoAluno){
    if(sexoAluno != "feminino"){
        return "aluno"
    }else{
        return "aluna"
    }
}
function sexo_prof(sexoProf){
    if(sexoProf != "feminino"){
        return "professor"
    }else{
        return "professora"
    }
}

module.exports ={
    val_nome,
    sexo_aluno,
    sexo_prof
}