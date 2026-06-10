/************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *           manipulação de dados para o CRUD de personagem
 * Data: 29/05/2026
 * Autor: Arthur
 * Versão: 1.0
 *************************************************************/
// A controller ela tem a função de chamar uma funcionalidade do model porem antes,
//então vem a requisição do app para o controller e o model recebe a requisição,
//por isso eles tem os mesmos nomes das funções do model.

//Import do arquivo de padronização de mensagens
const config_message = require("../modulo/configMessages.js")

//Import do arquivo DAO para fazer o CRUD do genero no banco de dados
const PersonagemDAO = require('../../model/DAO/personagem/personagem.js')

//Função para inserir um novo personagem
const inserirNovoPersonagem = async function(personagem, contentType){

    //Criando um clone do objeto json para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    
    try{

    //Se a função validar o retornar um json de erro, iremoes deolver ao APP;
    let validar = await validarDados(personagem, contentType)
        if(validar){
            return validar
        }else{
            //Encaminha os dados do personagem par ao DAO
            let result = await PersonagemDAO.insertPersonagem(personagem)


            if(result){ //201
                //Criando o atributo ID no JSON do personagem e colocando
                //o ID gerado após o insert
                personagem.id = result
                message.DEFAULT_MESSAGE.status      = message.SUCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message     = message.SUCESS_CREATED_ITEM.message
                message.DEFAULT_MESSAGE.response    = personagem
            }else{ //500
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }

            return message.DEFAULT_MESSAGE
        }
    
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)

    }
}

//Função para atualizar um personagem
const atualizarPersonagem = async function(personagem, id, contentType){

    let message = JSON.parse(JSON.stringify(config_message))

    try{
        //Validação do Content Type para receber apenas JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Validação para o id incorreto
            let resultBuscarID = await buscarPersonagem(id)
            
            //Se a função buscar encontrar o personagem o atributo status do JSON será verdadeiro
            //isso significa que o personagem existe na base, caso não retorne true, então
            //o retorno da função poderá ser um 400 ou 404 ou até mesmo um 500
            if(resultBuscarID.status){
                let validar = await validarDados(personagem, contentType)

                //Validação de campos obrigatórios para atualização (Body)
                if(!validar){
                    //Adiciono o atributo id do personagems no JSON para ser enviado ao DAO
                    personagem.id = id

                    //Chama a função do DAO para atualizar o personagem (dados e o ID)
                    let result = await PersonagemDAO.updatePersonagem(personagem)

                    if(result){
                        message.DEFAULT_MESSAGE.status      = message.SUCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response    = personagem
                        
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

//Função para buscar um personagem pelo id
const buscarPersonagem = async function(id){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação para garantir que o ID seja válido
    try {
        if(id == undefined || id == null || id == '' || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = "[ID] INVALIDO"
            return message.ERROR_BAD_REQUEST //400
        }else {
            let result = await PersonagemDAO.selectByIdPersonagem(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.personagem  = result

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

//Função para retornar todos os personagems
const listarPersonagem = async function(){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Chama a função do DAO para retornar a lista de todos os personagems
        let result = await PersonagemDAO.selectAllPersonagem()

        //Valida se o DAO conseguiu processar os dados
        if(result){
            //Validação para verificar se existe conteúdo no array
            if(result.length > 0 ){
                message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count  = result.length
                message.DEFAULT_MESSAGE.response.personagem  = result

                return message.DEFAULT_MESSAGE //200 (Dados do personagem)
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

//Função para excluir o personagem
const excluirPersonagem = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))

    try{
        //Validação do erro 400 e 404
        let resultBuscarID = await buscarPersonagem(id)

        //Validação para verificar se o status é verdadreito (se existe o filme)
        if(resultBuscarID.status){
                //Chama a função do DAO para excluir o filme
                let result = await PersonagemDAO.deletePersonagem(id)

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

const validarDados = async function(personagem, contentType){

    let message = JSON.parse(JSON.stringify(config_message))
    //Validação para tipo de dados para requisição (somente JSON)
    if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

    //Validação de dados para os atributos do personagem (status 400)
        if(personagem.nome == undefined || personagem.nome == null || personagem.nome == '' || personagem.nome.length > 80){
            message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
            return message.ERROR_BAD_REQUEST

        }else{
            return false
        }
    }else{
        return message.ERROR_CONTENT_TYPE}
}

module.exports = {
    inserirNovoPersonagem,
    buscarPersonagem,
    atualizarPersonagem,
    validarDados,
    listarPersonagem,
    excluirPersonagem

}