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
        return result[0].insertId 
    else
        return false
    } catch (error){
        return false
    }
}

//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme){
    try {
            let sql = `update tbl_filme set
                                nome = '${filme.nome}',
                                data_lancamento = '${filme.data_lancamento}',
                                duracao = '${filme.duracao}',
                                sinopse = '${filme.sinopse}',
                                avaliacao = if('${filme.avaliacao}' = "", null, '${filme.avaliacao}'),
                                valor = '${filme.valor}',
                                capa = '${filme.capa}'
                                where id = ${filme.id};`
    
            //Executa o script SQL no BD
            let result = await knexConex.raw(sql)
    
            if(result)
                return true
            else
                return false
        } catch (error) {
            return false
        }

}

//Função para retornar todos os dados da tabela de filme
const selectAllFilme = async function(){
    try {
        //Script para retornar todos os filmes
        let sql = `select * from tbl_filme order by id desc`

        //Executa os banco de dados o script SQL para reotrnar os filmes
        let result = await knexConex.raw(sql)
        
        //Validação para verificar se o ternoro no BD retorno no BD é um array
        //Se o scriptSQL der erro, não devolve um array
        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

//Função para retornar os dados do filme, filtrando pelo id
const selectByIdFilme = async function(id){
    try {
        let sql = `select * from tbl_filme where id=${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    }catch (error) {
        return false
    }
}

//Função para excluir um filme pelo id
const deleteFiltro = async function(id){
    try {
        let sql = `delete from tbl_filme 
                    where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false
    }catch (error) {
        return false
    }
}


module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFiltro
}