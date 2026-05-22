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
const GeneroFilmeDAO = require('../../model/DAO/filme_genero/filme_genero.js')

//Função para inserir um novo genero
const inserirNovoGeneroFilme = async function(GeneroFilme){

    //Criando um clone do objeto json para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    
    try{

    //Se a função validar o retornar um json de erro, iremoes deolver ao APP;
    let validar = await validarDados(GeneroFilme)


        if(validar){
            return validar
        }else{
            //Encaminha os dados do genero par ao DAO
            let result = await GeneroFilmeDAO.insertGeneroFilme(GeneroFilme)


            if(result){ //201
                //Criando o atributo ID no JSON do genero e colocando
                //o ID gerado após o insert
                GeneroFilme.id = result
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

//Função para atualizar um genero
const atualizarGeneroFilme = async function(GeneroFilme, id){

    let message = JSON.parse(JSON.stringify(config_message))

    try{
        

            //Validação para o id incorreto
            let resultBuscarID = await buscarGeneroFilme(id)
            
            //Se a função buscar encontrar o genero o atributo status do JSON será verdadeiro
            //isso significa que o genero existe na base, caso não retorne true, então
            //o retorno da função poderá ser um 400 ou 404 ou até mesmo um 500
            if(resultBuscarID.status){
                let validar = await validarDados(GeneroFilme)

                //Validação de campos obrigatórios para atualização (Body)
                if(!validar){
                    //Adiciono o atributo id do generos no JSON para ser enviado ao DAO
                    genero.id = id

                    //Chama a função do DAO para atualizar o genero (dados e o ID)
                    let result = await GeneroFilmeDAO.updateGeneroFilme(GeneroFilme)

                    if(result){
                        message.DEFAULT_MESSAGE.status      = message.SUCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response    = GeneroFilme
                        
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
    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (Controller)


    }
    
}

//Função para buscar um genero pelo id
const buscarGeneroFilme = async function(id){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação para garantir que o ID seja válido
    try {
        if(id == undefined || id == null || id == '' || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = "[ID] INVALIDO"
            return message.ERROR_BAD_REQUEST //400
        }else {
            let result = await GeneroFilmeDAO.selectFilmesByIdGenero(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.GeneroFilme  = result

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

//Função para buscar um genero pelo id
const buscarFilmeIdGenero = async function(idGenero){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação para garantir que o ID seja válido
    try {
        if(idGenero == undefined || idGenero == null || idGenero == '' || isNaN(idGenero)){
            message.ERROR_BAD_REQUEST.field = "[ID] INVALIDO"
            return message.ERROR_BAD_REQUEST //400
        }else {
            let result = await GeneroFilmeDAO.selectByIdGeneroFilmes(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.GeneroFilme  = result

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

//Função para buscar um genero pelo id
const buscarGeneroIdFilme = async function(idFilme){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação para garantir que o ID seja válido
    try {
        if(idFilme == undefined || idFilme == null || idFilme == '' || isNaN(idFilme)){
            message.ERROR_BAD_REQUEST.field = "[ID] INVALIDO"
            return message.ERROR_BAD_REQUEST //400
        }else {
            let result = await GeneroFilmeDAO.selectGenerosByIdFilme(idFilme)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.idFilme  = result

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

//Função para retornar todos os generos
const listarGeneroFilme = async function(){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Chama a função do DAO para retornar a lista de todos os generos
        let result = await GeneroFilmeDAO.selectAllGeneroFilme()

        //Valida se o DAO conseguiu processar os dados
        if(result){
            //Validação para verificar se existe conteúdo no array
            if(result.length > 0 ){
                message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count  = result.length
                message.DEFAULT_MESSAGE.response.GeneroFilme  = result

                return message.DEFAULT_MESSAGE //200 (Dados do genero)
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

//Função para excluir o genero
const excluirGeneroFilme = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))

    try{
        //Validação do erro 400 e 404
        let resultBuscarID = await buscarGeneroFilme(id)

        //Validação para verificar se o status é verdadreito (se existe o filme)
        if(resultBuscarID.status){
                //Chama a função do DAO para excluir o filme
                let result = await GeneroFilmeDAO.deleteGeneroFilme(id)

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

const validarDados = async function(GeneroFilme, ){

    let message = JSON.parse(JSON.stringify(config_message))
    //Validação para tipo de dados para requisição (somente JSON)
    

    //Validação de dados para os atributos do genero (status 400)
        if(GeneroFilme.id_filme == undefined || GeneroFilme.id_filme == null || GeneroFilme.id_filme == '' || isNaN(GeneroFilme.id_filme )){
            message.ERROR_BAD_REQUEST.field = '[ID_FILME] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400

        }else if(GeneroFilme.id_genero == undefined || GeneroFilme.id_genero == null || GeneroFilme.id_genero == '' || isNaN(GeneroFilme.id_genero )){
                message.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
                return message.ERROR_BAD_REQUEST //400

        }else{
            return false
        }
}
module.exports = {
    inserirNovoGeneroFilme,
    buscarGeneroFilme,
    buscarFilmeIdGenero,
    buscarGeneroIdFilme,
    atualizarGeneroFilme,
    validarDados,
    listarGeneroFilme,
    excluirGeneroFilme

}