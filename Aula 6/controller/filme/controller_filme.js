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

//Import de arquivos de Controller
const controller_classificacao = require('../classificacao/controller_classificacao.js')

//Import de arquivos de Controller
const controller_genero_filme = require('./controller_genero_filme.js')

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

            //Manipulação de dados para inserir os Generos do filme
            if(result){ //201
                //Criando o atributo ID no JSON do filme e colocando
                //o ID gerado após o insert
                filme.id = result

                //Manipualação de dados para inserir os Generos do filme
                for (genero of filme.genero){
                //Manipulação de dados para inserir os Generos do Filme
                let generoFilme = {"id_filme": filme.id,
                                    "id_genero": genero.id
                                }
                    //Chama a controller do filme genero para inserir os IDs
                    let resultInsertGenero = await controller_genero_filme.inserirNovoGeneroFilme(generoFilme)
                    
                    if(!resultInsertGenero.status){
                        return message.SUCESS_CREATED_ITEM_WARNING //201 com alerta de dados não encotrado
                    }
                }
                message.DEFAULT_MESSAGE.status      = message.SUCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message     = message.SUCESS_CREATED_ITEM.message
                message.DEFAULT_MESSAGE.response    = filme
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

                        //Manipulação de dados na tabela de relação entre filme e genero
                        let resultDeleteGenero = await controller_genero_filme.excluirGenerosByIdFilme(filme.id)
                        
                        //Após a exclusão de todos os generos relacionados com o filme
                        if(resultDeleteGenero.status){

                            for (genero of filme.genero){
                                //Manipulação de dados para inserir os Generos do Filme
                                let generoFilme = {"id_filme": filme.id,
                                                    "id_genero": genero.id
                                                }
                                    //Chama a controller do filme genero para inserir os IDs
                                    let resultInsertGenero = await controller_genero_filme.inserirNovoGeneroFilme(generoFilme)
                                    
                                    if(!resultInsertGenero.status){
                                        return message.SUCESS_CREATED_ITEM_WARNING //201 com alerta de dados não encotrado
                                    }
                            }
                        }

                        message.DEFAULT_MESSAGE.status      = message.SUCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response    = filme
                        
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

                //Percorre o ARRAY de filmes para identificar os dados da classificação
                for(filme of result){
                    //Busca na controller da classificação o id referente aos dados
                    let resultclassificacao = await controller_classificacao.buscarClassificacao(filme.id_classificacao)
                    //Se a classificação foi encontrada
                    if(resultclassificacao.status){
                        //Cria o atributo classificação no filme e adiciona os dados referente
                        //a classificação
                        filme.classificacao = resultclassificacao.response.classificacao
                        //Apaga o atributo id_classificação do filme para não ficar repetido
                        delete filme.id_classificacao
                    }

                    //Cria o objeto de Generos relacionados ao filme
                    let resultGenero = await controller_genero_filme.buscarGeneroIdFilme(filme.id)
                    if(resultGenero.status){
                        filme.genero = resultGenero.response.genero_filme
                    }
                }

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

                //Percorre o ARRAY de filmes para identificar os dados da classificação
                for(filme of result){
                    //Busca na controller da classificação o id referente aos dados
                    let resultclassificacao = await controller_classificacao.buscarClassificacao(filme.id_classificacao)
                    //Se a classificação foi encontrada
                    if(resultclassificacao.status){
                        //Cria o atributo classificação no filme e adiciona os dados referente
                        //a classificação
                        filme.classificacao = resultclassificacao.response.classificacao
                        //Apaga o atributo id_classificação do filme para não ficar repetido
                        delete filme.id_classificacao

                    }

                    //Cria o objeto de Generos relacionados ao filme
                    let resultGenero = await controller_genero_filme.buscarGeneroIdFilme(filme.id)
                    if(resultGenero.status){
                        filme.genero = resultGenero.response.genero_filme
                    }
                }
                    
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
        //Validação do erro 400 e 404
        let resultBuscarID = await buscarFilme(id)

        //Validação para verificar se o status é verdadreito (se existe o filme)
        if(resultBuscarID.status){
                //Chama a função do DAO para excluir o filme
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

            //Validação para a FK de
        }else if(filme.id_classificacao == undefined || filme.id_classificacao == '' || filme.id_classificacao == null || isNaN(filme.id_classificacao) || filme.id_classificacao <= 0){
            message.ERROR_BAD_REQUEST.field = '[ID_CLASSSIFICACAO) INVÁLIDO'
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
