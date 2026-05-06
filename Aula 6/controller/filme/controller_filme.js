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
const inserirNovoFilme = async function(filme, contentType){

    //Criando um clone do objeto json para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    
    try{

    //Se a função validar o retornar um json de erro, iremoes deolver ao APP;
    let validar = await validarDados(filme, contentType)
        if(validar){
            return validar
        }else{
            //Encaminha os dados do filme par ao DAO
            let result = await filmeDAO.insertFilme(filme)

            if(result){ //201
                message.DEFAULT_MESSAGE.status      = message.SUCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message     = message.SUCESS_CREATED_ITEM.message
            }else{ //500
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }

            return message.DEFAULT_MESSAGE
        }
    
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para atualizar um filme
const atualizarFilme = async function(filme, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try{
        //Validação do Content Type para receber apenas JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Validação para o id incorreto
            let resultBuscarID = await buscarFilme(id)
            
            //Se a função buscar encontrar o filme o atributo status do JSON será verdadeiro
            //isso significa que o filme existe na base, caso não retorne true, então
            //o retorno da função poderá ser um 400 ou 404 ou até mesmo um 500
            if(resultBuscarID.status){
                let validar = await validarDados(filme, contentType)

                //Validação de campos obrigatórios para atualização (Body)
                if(!validar){
                    //Adiciono o atributo id do filmes no JSON para ser enviado ao DAO
                    filme.id = id

                    //Chama a função do DAO para atualizar o filme (dados e o ID)
                    let result = await filmeDAO.updateFilme(filme)

                    if(result){
                        message.DEFAULT_MESSAGE.status      = message.SUCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCESS_UPDATED_ITEM.message
                        
                        return message.DEFAULT_MESSAGE //200 (Atualizado)
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL //500
                    }
                }else{
                    return validar //400
                }
            }else{
                return resultBuscarID // 400 ou 404 ou 500
            }
        }else{
            return message.ERROR_CONTENT_TYPE // 415
        }
    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (Controller)


    }
    
}

//Função para retornar todos os filmes
const listarFilme = async function(){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Chama a função do DAO para retornar a lista de todos os filmes
        let result = await filmeDAO.selectAllFilme()

        //Valida se o DAO conseguiu processar os dados
        if(result){
            //Validação para verificar se existe conteúdo no array
            if(result.length > 0 ){
                message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count  = result.length
                message.DEFAULT_MESSAGE.response.filme  = result

                return message.DEFAULT_MESSAGE //200 (Dados do filme)
            }else{
                return message.ERROR_NOT_FOUND //404 (Dados não encontrado)
            }

        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para buscar um filme pelo id
const buscarFilme = async function(id){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação para garantir que o ID seja válido
    try {
        if(id == undefined || id == null || id == '' || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = "[ID] INVALIDO"
            return message.ERROR_BAD_REQUEST //400
        }else {
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme  = result

                    return message.DEFAULT_MESSAGE //200
                }else{
                    return message.ERROR_NOT_FOUND //400
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
            }
        }
    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

//Função para excluir o filme
const excluirFilme = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))

    try{
        let resultBuscarID = await buscarFilme(id)

        if(resultBuscarID.status){

                let result = await filmeDAO.deleteFiltro(id)

                if(result){
                    message.DEFAULT_MESSAGE.status      = message.SUCESS_DELETE_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_DELETE_ITEM.status_code
                    message.DEFAULT_MESSAGE.message     = message.SUCESS_DELETE_ITEM.message

                    return message.DEFAULT_MESSAGE // 200 (Deletado)
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL //500
                }
        }else{
            return resultBuscarID // 400 ou 404 ou 500
        }
    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (Controller)
    }
}

//Função para validar todos os dados do filmes (obrigatório, qtde de caracteres, etc)
const validarDados = async function(filme, contentType){

    let message = JSON.parse(JSON.stringify(config_message))
    //Validação para tipo de dados para requisição (somente JSON)
    if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

    //Validação de dados para os atributos do Filme (status 400)
        if(filme.nome == undefined || filme.nome == null || filme.nome == '' || filme.nome.length > 80){
            message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else if(filme.data_lancamento == undefined || filme.data_lancamento == null || filme.data_lancamento == '' || filme.data_lancamento.length != 10){
            message.ERROR_BAD_REQUEST.field = '[DATA-LANCAMENTO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else if(filme.duracao == undefined || filme.duracao == null || filme.duracao == '' || filme.duracao.length < 5){
            message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else if(filme.sinopse == undefined || filme.sinopse == null || filme.sinopse == ''){
            message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3){
            message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else if(filme.valor == undefined || filme.valor == null || filme.valor == '' || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){
            message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else if(filme.capa.length > 255){
            message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else{
            return false
        }
    }else{
        return message.ERROR_CONTENT_TYPE}
}

module.exports = {
    inserirNovoFilme,
    validarDados,
    listarFilme,
    buscarFilme,
    atualizarFilme,
    excluirFilme
    
}