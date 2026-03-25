const dados = require("./estados_cidades.js")

//Função para retornar todos os estados do Brasiç e sua quantidade
function getListaDeEstados() {

    let exibicao = []

    dados.listaDeEstados.estados.forEach((item) => {
        exibicao.push(item.sigla)
        
    })

    const exibirDados = {
        "uf": exibicao,
        "quantidade":exibicao.length
    }
    return exibirDados
}

//Função para retornar as informações de um estado escolhido
const getDadosEstados = function (estado) {
    dados.listaDeEstados.estados.forEach(function(filtro) {
        if(String(estado).toUpperCase() == String(filtro.sigla).toUpperCase()){
            const exibirDados = {
                "uf": filtro.sigla,
                "descricao": filtro.nome,
                "capital": filtro.capital,
                "regiao": filtro.regiao
            }
            console.log(exibirDados)
            return exibirDados
        }else{
            return false
        } 
    })  
}

//Função para retornar as informações da capital do estado selecionado
const getCapitalEstado = function (estado) {

    dados.listaDeEstados.estados.forEach(function(filtro){
        if(String(estado).toUpperCase() == String(filtro.sigla).toUpperCase()){
            const exibirDados = {
                "uf": filtro.sigla, "descricao": filtro.nome, "capital": filtro.capital
            }
            console.log(exibirDados)
            return exibirDados

        }else{
            return false
        } 
    })
}

//Função para retornar os estados da região selecionada
const getEstadosRegiao = function (regiao) {
    const exibirDados = {
        "regiao": regiao.toUpperCase(),
        "estados": []
    }

    dados.listaDeEstados.estados.forEach(function(filtro) {
      
        if(String(regiao).toUpperCase() == String(filtro.regiao).toUpperCase()){
            exibirDados.estados.push({
                "uf": filtro.sigla, "descricao": filtro.nome
            })
              
        }else{
            return false
        }
    })
    console.log(exibirDados)
    return exibirDados
}

//Função para retornar a capital e as antigas capitais do Brasil
function getCapitalPais(){
    const exibirDados = {
        "capitais": []
    }

    dados.listaDeEstados.estados.forEach(function(filtro){

        if(filtro.capital_pais != undefined){
            exibirDados.capitais.push({
                "capital_atual": filtro.capital_pais.capital,
                "uf": filtro.sigla,
                "descricao": filtro.nome,
                "capital": filtro.capital,
                "regiao": filtro.regiao,
                "capital_pais_ano_inicio": filtro.capital_pais.ano_inicio,
                "capital_pais_ano_termino": filtro.capital_pais.ano_fim
            })
        }
    })
    console.log(exibirDados)
    return exibirDados

}

const getCidades = function(estado){
    let cidadesFiltro = []

    dados.listaDeEstados.estados.forEach(function(filtro){
        
        if(String(estado).toUpperCase() == String(filtro.sigla).toUpperCase()){
            filtro.cidades.forEach(function(item){
                cidadesFiltro.push(
                    item.nome
                )
            })
            
            const exibirDados ={
                "uf": estado,
                "descricao": filtro.nome,
                "Quantidade_cidades": filtro.cidades.length,
                "cidades": cidadesFiltro
            }

            console.log(exibirDados)
        }
        
    })
    
}
    
getCidades('BA')

module.exports ={
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
    

}

