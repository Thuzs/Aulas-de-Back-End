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
const ERROR_BAD_REQUEST                     = {status: false, status_code: 400, message: "Os dados enviados na requisião não estão corretos."}
const ERROR_INTERNAL_SERVER_MODEL           = {status: false, status_code: 500, message: "Não foi possivel processar a requisição por conta de erro na API [ERRO NA MODELAGEM DE DADOS]."}
const ERROR_INTERNAL_SERVER_CONTROLLER      = {status: false, status_code: 500, message: "Não foi possivel processar a requisição por conta de erro na API [ERRO NA CONTROLLER]."}
const ERROR_CONTENT_TYPE                    = {status: false, status_code: 415, message: "Não foi possivel pois o formato de dados aceito pela api é somento JSON."}
const ERROR_NOT_FOUND                       = {status: false, status_code: 404, message: "Não foi encontrado nenhum dado para retorno."} 

//Mensagem de Sucesso da API
const SUCESS_CREATED_ITEM   = {status: true, status_code: 201, message: 'Registro inserido com sucesso!'} // Mensagem de sucesso da api

const SUCESS_CREATED_ITEM_WARNING   = {status: true, status_code: 201, message: 'Os dados principais foram inseridos com sucesso, porém alguns dados apresentaram problema!'} // Mensagem de sucesso da api

const SUCESS_RESPONSE       = {status: true, status_code: 200} //retorno para get 200

const SUCESS_UPDATED_ITEM   = {status: true, status_code: 200, message: 'Registro atualizado com sucesso!'} //retorno para put 200

const SUCESS_DELETE_ITEM    = {status: true, status_code: 200, message: 'Registro deletado com sucesso!'} // retorno para delete 200

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    ERROR_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_NOT_FOUND,
    SUCESS_CREATED_ITEM,
    SUCESS_CREATED_ITEM_WARNING,
    SUCESS_RESPONSE,
    SUCESS_UPDATED_ITEM,
    SUCESS_DELETE_ITEM
}