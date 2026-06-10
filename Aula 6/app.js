/**********************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de API de projeto de Filmes
 * Data: 17/04/2026
 * Autor: Arthur
 * Versão: 1.0
 **********************************************************************************************/



const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

const controllerGenero = require('./controller/genero/controller_genero.js')

const controllerSexo = require('./controller/sexo/controller_sexo.js')

const controllerClassificacao = require('./controller/classificacao/controller_classificacao.js')

const controllerAtividade = require('./controller/atividade/controller_atividade.js')

const controllerPersonagem = require('./controller/personagem/controller_personagem.js')

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

//FILME
//Endpoint para inserir um Filme
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisisição)
    let dados = request.body
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    
    let result = await controllerFilme.inserirNovoFilme(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para listar os Filmes
//Só é utilizado a busca via parâmetro quando o critério de filtro for o id
app.get('/v1/senai/locadora/filme', async function (request, response){
    let result = await controllerFilme.listarFilme()
    response.status(result.status_code)
    response.json(result)
    
})

//Endpoint para buscar um Filme pelo ID
app.get('/v1/senai/locadora/filme/:id', async function (request, response){
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)
    response.json(result)
    response.status(result.status_code)
    
})

//Endpoint para atualizar um Filme pelo ID
app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function(request, response){
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviado no campo da requisição
    let dados = request.body
    
    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para deletar um Filme pelo ID
app.delete('/v1/senai/locadora/filme/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
})


//GENERO
//Endpoint para inserir um Genero
app.post('/v1/senai/locadora/genero', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisisição)
    let dados = request.body
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    
    let result = await controllerGenero.inserirNovoGenero(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para atualizar um Genero pelo ID
app.put('/v1/senai/locadora/genero/:id', bodyParserJSON, async function (request, response){

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
app.get('/v1/senai/locadora/genero', async function (request, response){
    let result = await controllerGenero.listarGenero()
    response.status(result.status_code)
    response.json(result)
    
})

//Endpoint para buscar um Genero pelo ID
app.get('/v1/senai/locadora/genero/:id', async function (request, response){
    let id = request.params.id

    let result = await controllerGenero.buscarGenero(id)
    response.json(result)
    response.status(result.status_code)
    
})

//Endpoint para deletar um Genero pelo ID
app.delete('/v1/senai/locadora/genero/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)
})


//SEXO
//Endpoint para inserir um Sexo
app.post('/v1/senai/locadora/sexo', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisisição)
    let dados = request.body
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    
    let result = await controllerSexo.inserirNovoSexo(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para listar todos os Sexos
app.get('/v1/senai/locadora/sexo', async function (request, response){
    let result = await controllerSexo.listarSexo()
    response.status(result.status_code)
    response.json(result)
    
})

//Endpoint para buscar um Sexo pelo ID
app.get('/v1/senai/locadora/sexo/:id', async function (request, response){
    let id = request.params.id

    let result = await controllerSexo.buscarSexo(id)
    response.json(result)
    response.status(result.status_code)
    
})

//Endpoint para atualizar um Sexo pelo ID
app.put('/v1/senai/locadora/sexo/:id', bodyParserJSON, async function (request, response){

    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviado no campo da requisição
    let dados = request.body
    
    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerSexo.atualizarSexo(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
   
})

//Endpoint para deletar um Sexo pelo ID
app.delete('/v1/senai/locadora/sexo/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerSexo.excluirSexo(id)

    response.status(result.status_code)
    response.json(result)
})



//CLASSIFICACAO
//Endpoint para Inserir uma Classificação
app.post('/v1/senai/locadora/classificacao', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']

    let result = await controllerClassificacao.inserirNovoClassificacao(dados, contentType)
   
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos as Classificações
app.get('/v1/senai/locadora/classificacao', async function(request, response){
    let result = await controllerClassificacao.listarClassificacao()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar uma Classificação pelo ID
app.get('/v1/senai/locadora/classificacao/:id', async function(request, response){
    //Recebe o ID via parametro
    let id = request.params.id

    let result = await controllerClassificacao.buscarClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualizar uma Classificação pelo ID
app.put('/v1/senai/locadora/classificacao/:id', bodyParserJSON, async function(request, response){
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerClassificacao.atualizarClassificacao(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Deletar uma Classificação pelo ID
app.delete('/v1/senai/locadora/classificacao/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerClassificacao.excluirClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})


//ATIVIDADE
//Endpoint para inserir um Atividade
app.post('/v1/senai/locadora/atividade', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisisição)
    let dados = request.body
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    
    let result = await controllerAtividade.inserirNovaAtividade(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para listar todos os atividades
app.get('/v1/senai/locadora/atividade', async function (request, response){
    let result = await controllerAtividade.listarAtividade()
    response.status(result.status_code)
    response.json(result)
    
})

//Endpoint para buscar um atividade pelo ID
app.get('/v1/senai/locadora/atividade/:id', async function (request, response){
    let id = request.params.id

    let result = await controllerAtividade.buscarAtividade(id)
    response.json(result)
    response.status(result.status_code)
    
})

//Endpoint para atualizar um atividade pelo ID
app.put('/v1/senai/locadora/atividade/:id', bodyParserJSON, async function (request, response){

    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviado no campo da requisição
    let dados = request.body
    
    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerAtividade.atualizarAtividade(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
   
})

//Endpoint para deletar um atividade pelo ID
app.delete('/v1/senai/locadora/atividade/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerAtividade.excluirAtividade(id)

    response.status(result.status_code)
    response.json(result)
})

//PERSONAGEM
//Endpoint para inserir um Personagem
app.post('/v1/senai/locadora/personagem', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição (Abrindo o envelope e guardando o conteúdo da requisisição)
    let dados = request.body
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']
    
    let result = await controllerPersonagem.inserirNovoPersonagem(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para listar todos os Personagems
app.get('/v1/senai/locadora/personagem', async function (request, response){
    let result = await controllerPersonagem.listarPersonagem()
    response.status(result.status_code)
    response.json(result)
    
})

//Endpoint para buscar um Personagem pelo ID
app.get('/v1/senai/locadora/personagem/:id', async function (request, response){
    let id = request.params.id

    let result = await controllerPersonagem.buscarPersonagem(id)
    response.json(result)
    response.status(result.status_code)
    
})

//Endpoint para atualizar um Personagem pelo ID
app.put('/v1/senai/locadora/personagem/:id', bodyParserJSON, async function (request, response){

    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviado no campo da requisição
    let dados = request.body
    
    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerPersonagem.atualizarPersonagem(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
   
})

//Endpoint para deletar um Personagem pelo ID
app.delete('/v1/senai/locadora/personagem/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerPersonagem.excluirPersonagem(id)

    response.status(result.status_code)
    response.json(result)
})


//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições")
})