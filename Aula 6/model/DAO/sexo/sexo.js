/***************************************************************************
 * Objetivo: Arquivo responsavel pelo CRUD no Banco de dados MySQL na tabela 
 *           sexo
 * Data: 15/05/2026
 * Autor: Arthur
 * Versão: 1.0
 ***************************************************************************/

//Import da biblioteca para generenciar o anco de dados MySQL no node.js
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão do banco de dados MySQL
const knexConex = knex(knexConfig.development)

//Função para inserir os dados do sexo
const insertSexo = async function(sexo){

    try{
        let sql = `insert into tbl_sexo(
                    nome, 
                    sigla
                    )
            values (
                    '${sexo.nome}',
                    '${sexo.sigla}'
                    );`

    let result = await knexConex.raw(sql)

    if(result)
        return result[0].insertId 
    else
        return false
    }catch (error){
        return false
    }

}

const selectAllSexo = async function(){

    try {

        //Script para retornar todos os sexos
        let sql = `select * from tbl_sexo order by id desc`
        
        //Executa os banco de dados o script SQL para retornar os sexos
        let result = await knexConex.raw(sql)

     //Validação para verificar se o retorno no BD é um array
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

//Função para retornar os dados do sexo, filtrando pelo id
const selectByIdSexo = async function(id){
    try {
        let sql = `select * from tbl_sexo where id=${id}`

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

//Função para atualizar um sexo existente na tabela
const updateSexo = async function (sexo){
    try{
        let sql = `update tbl_sexo set
                    nome = '${sexo.nome}',
                    sigla ='${sexo.sigla}';`
    
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
    }catch (error){
        return false
    }
}

//Função para excluir um sexo pelo id
const deleteSexo = async function(id){
    try {
        let sql = `delete from tbl_sexo
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
    insertSexo,
    selectAllSexo,
    selectByIdSexo,
    updateSexo,
    deleteSexo
}