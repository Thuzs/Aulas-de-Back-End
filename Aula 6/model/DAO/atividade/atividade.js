/***************************************************************************
 * Objetivo: Arquivo responsavel pelo CRUD no Banco de dados MySQL na tabela 
 *           atividade
 * Data: 29/05/2026
 * Autor: Arthur
 * Versão: 1.0
 ***************************************************************************/

//Import da biblioteca para generenciar o anco de dados MySQL no node.js
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão do banco de dados MySQL
const knexConex = knex(knexConfig.development)

//Função para inserir os dados do genero
const insertAtividade = async function(atividade){

    try{
        let sql = `insert into tbl_atividade(
                    nome
                    )
            values (
                    '${atividade.nome}');`

    let result = await knexConex.raw(sql)

    if(result)
        return result[0].insertId 
    else
        return false
    }catch (error){
        console.log(error)
        return false
    }

}

//Função para atualizar um atividade existente na tabela
const updateAtividade = async function (atividade){
    try{
        let sql = `update tbl_atividade set
                    nome = '${atividade.nome}'
                    where id = ${atividade.id}`
    
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
    }catch (error){
        console.log(error)
        return false
    }
}

//Função para retornar todos os dados da tabela de atividade
const selectAllAtividade = async function(){
    try {
        //Script para retornar todos os filmes
        let sql = `select * from tbl_atividade order by id desc`

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
//Função para retornar os dados do atividade, filtrando pelo id
const selectByIdAtividade = async function(id){
    try {
        let sql = `select * from tbl_atividade where id=${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    }catch (error) {
        console.log(error)
        return false
    }
}

//Função para excluir um atividade pelo id
const deleteAtividade = async function(id){
    try {
        let sql = `delete from tbl_atividade 
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
    insertAtividade,
    updateAtividade,
    selectByIdAtividade,
    selectAllAtividade,
    deleteAtividade
}