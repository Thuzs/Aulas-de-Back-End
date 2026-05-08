/************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *           manipulação de dados para o CRUD de genero
 * Data: 17/04/2026
 * Autor: Arthur
 * Versão: 1.0
 *************************************************************/
// A controller ela tem a função de chamar uma funcionalidade do model porem antes,
//então vem a requisição do app para o controller e o model recebe a requisição,
//por isso eles tem os mesmos nomes das funções do model.

//Import do arquivo de padronização de mensagens
const config_message = require("../modulo/configMessages.js")

//Import do arquivo DAO para fazer o CRUD do genero no banco de dados
const generoDAO = require('../../model/DAO/genero/genero.js')

const inserirNovoGenero = async function(genero, contentType){

    //Criando um clone do objeto json para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    
    try{

    //Se a função validar o retornar um json de erro, iremoes deolver ao APP;
    let validar = await validarDados(genero, contentType)
        if(validar){
            return validar
        }else{
            //Encaminha os dados do genero par ao DAO
            let result = await generoDAO.insertGenero(genero)


            if(result){ //201
                //Criando o atributo ID no JSON do genero e colocando
                //o ID gerado após o insert
                genero.id = result
                message.DEFAULT_MESSAGE.status      = message.SUCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message     = message.SUCESS_CREATED_ITEM.message
                message.DEFAULT_MESSAGE.response    = genero
            }else{ //500
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }

            return message.DEFAULT_MESSAGE
        }
    
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)

    }
}

const validarDados = async function(genero, contentType){

    let message = JSON.parse(JSON.stringify(config_message))
    //Validação para tipo de dados para requisição (somente JSON)
    if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

    //Validação de dados para os atributos do genero (status 400)
        if(genero.nome == undefined || genero.nome == null || genero.nome == '' || genero.nome.length > 80){
            message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else{
            return false
        }
    }else{
        return message.ERROR_CONTENT_TYPE}
}
module.exports = {
    inserirNovoGenero,
    validarDados

}