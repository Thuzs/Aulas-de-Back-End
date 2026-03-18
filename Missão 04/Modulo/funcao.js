const dados = require("./estados_cidades.js")


function getListaDeEstados(lista) {
    lista.estados.forEach((estado) => {
        console.log(estado.sigla)
    })
}


getListaDeEstados(dados.listaDeEstados)