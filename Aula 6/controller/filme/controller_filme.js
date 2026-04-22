/************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *  manipulação de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Arthur
 * Versão: 1.0
 *************************************************************/
// A controller ela tem a função de chamar uma funcionalidade do model porem antes,
//então vem a requisição do app para o controller e o model recebe a requisição,
//por isso eles tem os mesmos nomes das funções do model.

//Import do arquivo de padronização de mensagens
const config_message = require("../modulo/configMessages.js")

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filme.js')

//Função para inserir novo filme
const inserirNovoFilme = async function(filme){
    //Criando um clone do objeto json para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação de dados para os atributos do Filme (status 400)
    if(filme.nome == '' || filme.nome == null || filme.nome == undefined || filme.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'

    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10){
        message.ERROR_BAD_REQUEST.field = '[DATA-LANCAMENTO] INVÁLIDO'
        
    }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        
    }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        
    }else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
        
    }else if(filme.valor == '' || filme.valor == null || filme.valor == undefined || filme.valor.length > 5 || isNaN(filme.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        
    }else if(filme.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        
    }else{
        //Encaminha os dados do filme par ao DAO
        let result = await filmeDAO.insertFilme(filme)

        if(result){ //201
            message.DEFAULT_MESSAGE.status      = message.SUCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message     = message.SUCESS_CREATED_ITEM.message
        }else{ //400
            message.DEFAULT_MESSAGE.status      = message.ERROR_BAD_REQUEST.status
            message.DEFAULT_MESSAGE.status_code = message.ERROR_BAD_REQUEST.status_code
            message.DEFAULT_MESSAGE.message     = message.ERROR_BAD_REQUEST.message
            message.DEFAULT_MESSAGE.field       = message.ERROR_BAD_REQUEST.field
        }

        return message.DEFAULT_MESSAGE
    }
}

//Função para atualizar um filme
const atualizarFilme = async function(){
}

//Função para retornar todos os filmes
const listarFilme = async function(){
}

//Função para buscar um filme pelo id
const buscarFilme = async function(){
}

//Função para excluir o filme
const excluirFilme = async function(){
}

module.exports = {
    inserirNovoFilme,
    
}