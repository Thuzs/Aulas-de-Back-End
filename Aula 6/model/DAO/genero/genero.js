/***************************************************************************
 * Objetivo: Arquivo responsavel pelo CRUD no Banco de dados MySQL na tabela 
 *           genero
 * Data: 06/05/2026
 * Autor: Arthur
 * Versão: 1.0
 ***************************************************************************/

//Import da biblioteca para generenciar o anco de dados MySQL no node.js
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão do banco de dados MySQL
const knexConex = knex(knexConfig.development)

const insertGenero = async function(genero){

    try{
        let sql = `insert into tbl_genero(
                    nome: ${genero.nome}`

    let result = await knexConex.raw(sql)

    if(result)
        return result[0].insertId 
    else
        return false
    }catch (error){
        return false
    }

}

module.exports = {
    insertGenero
}
