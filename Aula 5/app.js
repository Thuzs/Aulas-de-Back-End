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
app.get('/v1/senai/estados', function(request, response){

    let estados = estadosCidades.getListaDeEstados()
    response.json(estados)
    response.status(200)


})

app.get("/v1/senai/dados/estados/:uf", function(request, response){
    
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstados(sigla)
    console.log(estado)
    
    response.json(estado)
    response.status(200)
})

app.get('/cidades', function(request, response){
    response.json({"message": "Testando minha API de cidades"})
    response.status(200)
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