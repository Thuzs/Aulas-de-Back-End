/***************************************************************************
 * Objetivo: Arquivo responsavel pelo CRUD no Banco de dados MySQL na tabela 
 *           Personagem
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
const insertPersonagem = async function(personagem){

    try{
        let sql = `insert into tbl_personagem(
                    nome
                    )
            values (
                    '${personagem.nome}');`

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

//Função para atualizar um personagem existente na tabela
const updatePersonagem = async function (personagem){
    try{
        let sql = `update tbl_personagem set
                    nome = '${personagem.nome}'
                    where id = ${personagem.id}`
    
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

//Função para retornar todos os dados da tabela de personagem
const selectAllPersonagem = async function(){
    try {
        //Script para retornar todos os filmes
        let sql = `select * from tbl_personagem order by id desc`

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
//Função para retornar os dados do personagem, filtrando pelo id
const selectByIdPersonagem = async function(id){
    try {
        let sql = `select * from tbl_personagem where id=${id}`

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

//Função para excluir um personagem pelo id
const deletePersonagem = async function(id){
    try {
        let sql = `delete from tbl_personagem 
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
    insertPersonagem,
    updatePersonagem,
    selectByIdPersonagem,
    selectAllPersonagem,
    deletePersonagem
}