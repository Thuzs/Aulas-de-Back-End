/**********************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de API de projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autor: Arthur
 * Versão: 1.0
 * 
 * Instalação do EXPRESS - npm install express --save
 *      Dependência responsável pela utilização do protocloco HTTP para
 *      criar uma API
 * 
 * Instalação do CORS    - npm install cors --save
 *      Dependência responsável pelas configurações a serem realizadas
 *      para a permissão de acesso da API
 * 
 **********************************************************************************************/

/*
API
HTTP (verbos)

get - solicita os dados
post - selecionaa inserção de ver um item
put - solicitar uma alteração
delete - solicitar um delete

Será utilizado a biblioteca EXPRESS
Usar o npm para procurar todas bibliotecas, o npm precisa ser instalado no node
*/

//Import das dependências para criar a API
const express   = require('express')
const cors      = require('cors')

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corOptions = {
    origin: ['*'], //A origin da requisição, podendo ser um ip ou o '*' deixa liberado para qualquer máquina fazer a requisição da API
    methods: 'GET', //São os verbos que serão liberados na API (GET, POST, PUT E DELETE)
    allowedHeaders: ['Content-type', 'Autorization'], //São permissões de cabeçalho do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corOptions))

//Response -> Retornos da API
//Request  -> São chegadas de dados na API

const estadosCidades = require('./Modulo/funcao.js')

//Criando EndPoints para a API

//Retorna dados dos estados filtrando pelo uf
app.get("/v1/senai/dados/estados/:uf", function(request, response){
    
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstados(sigla)
    
    
    if(estado){
    response.json(estado)
    response.status(200)
    }else
        response.status(404)
        response.json({"message": "O estado informado não foi encontrado"})
    
})

//Retorna os dados da capital filtrando pela sigla do estado
app.get("/v1/senai/capital/estado/:uf", function(request, response){

    let sigla = request.params.uf
    let capital = estadosCidades.getCapitalEstado(sigla)

    if(capital){
        response.json(capital)
        response.status(200)
    }else
    response.status(404)
    response.json({"message": "O estado informado não foi encontrado"})
})

//Retorna dados dos estados que foram capitais do Brasil
app.get("/v1/senai/estados/capital/brasil", function(request, response){
    
    let capital = estadosCidades.getCapitalPais()

        if(capital){
        response.json(capital)
        response.status(200)
    }else
    response.status(404)
    response.json({"message": "O estado informado não foi encontrado"})

    
})

//Retorna dados dos estados filtrando pela regiao
app.get("/v1/senai/estados/regiao/:regiao", function(request, response){
    
    let regiao = request.params.regiao
    let capital = estadosCidades.getEstadosRegiao(regiao)

    if(capital){
        response.json(capital)
        response.status(200)
    }else
    response.status(404)
    response.json({"message": "O estado informado não foi encontrado"})

})

//Retorna dados das cidades filtrando pelo uf
app.get("/v1/senai/cidades/estado/:uf", function(request, response){

    let estado = request.params.uf
    let cidades = estadosCidades.getCidades(estado)

    if(cidades){
        response.json(cidades)
        response.status(200)
    }else
    response.status(404)
    response.json({"message": "O estado informado não foi encontrado"})
})

//Retorna todos os estados
app.get('/v1/senai/estados', function(request, response){

    let estados = estadosCidades.getListaDeEstados()
    response.json(estados)
    response.status(200)

})


app.get('/cidades', function(request, response){
    response.json({"message": "Testando minha API de cidades"})
    response.status(200)
})

app.get("/v1/senai/help", function(request, response){
    let docAPI = {
        "API-Description": "API para manipular dados de estados e cidades",
        "Date": "2026-04-02",
        "Developer": "Arthur",
        "Version": "1.0",
        "Endpoints": [
            {   "Id": 1,
                "Rota1": "/v1/senai/estados",
                "obs": "Retorna a lista de todos os estados"
            },
            {
                "Id": 2,
                "Rota2": "/v1/senai/dados/estados/:uf",
                "obs": "Retorna os dados do estado filtrando pela sigla do estado"
            },
            {
                "Id": 3,
                "Rota2": "/v1/senai/capital/estado/:uf",
                "obs": "Retorna os dados da capital filtrando pela sigla do estado"
            },
            {
                "Id": 4,
                "Rota2": "/v1/senai/estados/capital/brasil",
                "obs": "Retorna todos os estados que formaram capital do Brasil"
            },
            {
                "Id": 5,
                "Rota2": "/v1/senai/estados/regiao/:regiao",
                "obs": "Retorna todos os estados referente a uma região"
            },
            {
                "Id": 6,
                "Rota2": "/v1/senai/cidades/estado/:uf",
                "obs": "Retorna todos as cidades filtrando pela sigla do estado"
            }
        ]
    }
})

//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log("API funcionando e aguardando novas requisições")
})

/*
Respostas Informativas (100 – 199)
Respostas bem-sucedidas (200 – 299)
Mensagens de redirecionamento (300 – 399)
Respostas de erro do cliente (400 – 499)
Respostas de erro do servidor (500 – 599)
*/