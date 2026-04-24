/**********************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de API de projeto de Estados e Cidades
 * Data: 17/04/2026
 * Autor: Arthur
 * Versão: 1.0
 **********************************************************************************************/



const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corOptions = {
    origin: ['*'], //A origin da requisição, podendo ser um ip ou o '*' deixa liberado para qualquer máquina fazer a requisição da API
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //São os verbos que serão liberados na API (GET, POST, PUT E DELETE)
    allowedHeaders: ['Content-type', 'Autorization'], //São permissões de cabeçalho do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corOptions))

//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisisição)
    let dados = request.body
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    
    let result = await controllerFilme.inserirNovoFilme(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

//Só é utilizado a busca via parâmetro quando o critério de filtro for o id
app.get('/v1/senai/locadora/filme', async function (request, response){
    let result = await controllerFilme.listarFilme()
    response.status(result.status_code)
    response.json(result)
    
})

app.get('/v1/senai/locadora/filme/:id', async function (request, response){
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)
    response.json(result)
    response.status(result.status_code)
    
})


//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições")
})