//Import do Express
const express = require('express')
const bodyParser    = require('body-parser')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

//Cria um objeto de rota para o arquivo
const router = express.Router()

//Import da controller de Genero
const controllerGenero = require('../controller/genero/controller_genero.js')

//Endpoint para inserir um Genero
router.post('/', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisisição)
    let dados = request.body
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    
    let result = await controllerGenero.inserirNovoGenero(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para atualizar um Genero pelo ID
router.put('/:id', bodyParserJSON, async function (request, response){

     //Recebe o contenty type da requisição
     let contentType = request.headers['content-type']
     //Recebe o ID do registro a ser atualizado
     let id = request.params.id
     //Recebe os dados enviado no campo da requisição
     let dados = request.body
     
     //Chama a função de atualizar na controller e encaminha os dados, id e content-type
     //obedecendo a ordem de criação na função da controller
     let result = await controllerGenero.atualizarGenero(dados, id, contentType)
 
     response.status(result.status_code)
     response.json(result)
    
})

//Endpoint para listar os Generos
router.get('/', async function (request, response){
    let result = await controllerGenero.listarGenero()
    response.status(result.status_code)
    response.json(result)
    
})

//Endpoint para buscar um Genero pelo ID
router.get('/:id', async function (request, response){
    let id = request.params.id

    let result = await controllerGenero.buscarGenero(id)
    response.json(result)
    response.status(result.status_code)
    
})

//Endpoint para deletar um Genero pelo ID
router.delete('/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router