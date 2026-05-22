/***************************************************************************
 * Objetivo: Arquivo responsavel pelo CRUD no Banco de dados MySQL na tabela 
 *           genero
 * Data: 22/05/2026
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
const insertGeneroFilme = async function(generoFilme){

    try{
        let sql = `insert into tbl_genero_filme(
                    id_filme, 
                    id_genero
                    )
            values (
                    '${generoFilme.id_filme}',
                    '${generoFilme.id_genero}'
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

//Função para atualizar um genero existente na tabela
const updateGeneroFilme = async function (generoFilme){
    try{
        let sql = `update tbl_generoFilme set
                    id_filme = '${generoFilme.id_filme}',
                    id_genero = '${generoFilme.id_filme}'
                    where id = ${genero.id};`
    
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

//Função para retornar todos os dados da tabela de genero
const selectAllGeneroFilme = async function(){
    try {
        //Script para retornar todos os filmes
        let sql = `select * from tbl_genero_filme order by id desc`

        //Executa os banco de dados o script SQL para retornar os filmes
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

const selectByIdGeneroFilmes = async function(id){
    try {
        let sql = `select * from tbl_genero_filme where id=${id}`

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

//Função para retornar os dados do filme, filtrando pelo id do genero
const selectFilmesByIdGenero = async function(idGenero){
    try {
        let sql = `select tbl_filme.*
                    from tbl_filme
                        inner join tbl_genero_filme 
                            on tbl_filme.id = tbl_genero_filme.id_filme
                        inner join tbl_genero
                            on tbl_genero.id = tbl_genero_filme.id_genero
                    where tbl_genero.id=${idGenero}`

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

//Função para retornar os dados dos generos, filtrando pelo id do filme
const selectGenerosByIdFilme = async function(idFilme){
    try {
        let sql = `select tbl_genero.*
                    from tbl_filme
                        inner join tbl_genero_filme 
                            on tbl_filme.id = tbl_genero_filme.id_filme
                        inner join tbl_genero
                            on tbl_genero.id = tbl_genero_filme.id_genero
                    where tbl_filme.id=${idFilme}`

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

//Função para excluir um genero pelo id
const deleteGeneroFilme = async function(id){
    try {
        let sql = `delete from tbl_genero_filme 
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
    insertGeneroFilme,
    updateGeneroFilme,
    selectByIdGeneroFilmes,
    selectFilmesByIdGenero,
    selectGenerosByIdFilme,
    selectAllGeneroFilme,
    deleteGeneroFilme
}
