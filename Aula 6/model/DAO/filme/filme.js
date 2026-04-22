/***************************************************************************
 * Objetivo: Arquivo responsavel pelo CRUD no Banco de dados MySQL na tabela 
 *           filme
 * Data: 15/04/2026
 * Autor: Arthur
 * Versão: 1.0
 ***************************************************************************/

//Import da biblioteca para generenciar o anco de dados MySQL no node.js
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão do banco de dados MySQL
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de filme
const insertFilme = async function(filme){
    try {
    let sql = `insert into tbl_filme (
                nome, 
                data_lancamento, 
                duracao, 
                sinopse, 
                avaliacao, 
                valor, 
                capa
                )
        values (
                '${filme.nome}',
                '${filme.data_lancamento}',
                '${filme.duracao}',
                '${filme.sinopse}',
                if('${filme.avaliacao}' = "", null, '${filme.avaliacao}'),
                '${filme.valor}',
                '${filme.capa}'
                );`



    //Executar o scriptSQL no banco de dados
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
    } catch (error){
        //console.log(error)
        return false
    }
}


//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme){
}

//Função para retornar todos os dados da tabela de filme
const selectAllFilme = async function(){
}

//Função para retornar os dados do filme, filtrando pelo id
const selectByIdFilme = async function(id){
}

//Função para excluir um filme pelo id
const deleteFiltro = async function(id){
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFiltro
}