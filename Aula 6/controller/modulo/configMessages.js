/**************************************************************************************
 * Objetivo: Arquivo responsável pela configuração e padronização das mensagens da API
 * Data: 17/04/2026
 * Autor: Arthur
 * Versão: 1.0
 * ************************************************************************************/

//Padronização de cabeçalho para retorno dos endpoint da API
const DEFAULT_MESSAGE = {
    api_description : "API para gerenciar o controle de filmes",
    development     : "Arthur Lima Trautwein",
    version         : "1.0.4.26",
    status          : Boolean,
    status_code     : Number,
    response        : {}
}

//Mensagens de erro da API
const ERROR_BAD_REQUEST = {status: false, status_code: 400, message: "Os dados enviados na requisião não estão corretos"}

//Mensagem de Sucesso da API
const SUCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Registro inserido com sucesso'}

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    SUCESS_CREATED_ITEM 
    
}