/*******************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Marcel
 * Versão: 1.0
 ******************************************************/

/*
    [ ] -> representa um objeto do tipo Array
    { } -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que perrmite trabalhar com vários valores
    em um único objeto

    let nome    = 'Jose'
    let nome1   = 'Maria'
    let nome2   = 'João'

             indice     0       1       2
    let nome    =    ['Jose', 'Maria', 'Joao']

    JSON -> É um objeto na memória que permite trabalhar com CHAVE E VALOR

        let nome        = 'Jose'
        let telefone    = '123456789'
        let email       = 'jose@gmail.com'

        let cliente = { "nome": "Jose",
                        "telefone": "123456789",
                        "email": "jose@gmail.com"
                        }
*/

//Formar de criar um ARRAY
const listaDeNomes       = ['Jose', 'Maria', 'João', 'André', 'Alex']
const listaDeClientes   = []
const listaDeFornecedores = []

const exibirDados = function(){
    //Exibe o objeto array e seu conteúdo
    console.log(listaNomes)

    //Exibe o objeto array em formato de tabela com seus índices
    console.table(listaNomes)

    //Exibe apenas um valor do respectivo índice do array
    console.log(listaNomes[1])

    //Retorna o tipo de dados de um índice do array
    console.log(typeof(listaNomes[4]))

    /*
    Não é viável fazer desa forma
    console.log(``)

    */

    //Forma mais viável é utilizando um laço de repetição
    console.log(`************ WHILE ************`)
    let cont = 0
    while(cont <= 4){
        console.log(`O nome do cliente é: ${listaNomes[cont]} `)
        cont += 1
    }

    //Utilizando o for
    console.log('************ FOR ************')
    for(let contador = 0; contador <= 4; contador++){
        console.log(`O nome do cliente é ${listaNomes[contador]}`)
    }
    //Retorna o conteudo de cada elemento atraves de um CALL BACK
    console.log('************ FOR EACH ************')
    listaDeClientes.forEach(function(cliente){
        console.log(`O nome do cliente é ${cliente}`)

    })
    //Retorna o indice de elemento, e será preciso colocar dentro do objeto do array
    //Ex: listaDeNomes[item]
    //Praticamente igual ao FOR e WHILE
    console.log('************ FOR IN ************')
    for(cont in listaNomes){
        console.log(`O nome do cliente é ${listaNomes[cont]}`)
    }


    //Percorre o array e retorna somente o conteudo de cada indice, sendo muito parecido
    //com ForEach
    console.log('************ FOR OF ************')
    for(cliente of listaNomes){
        console.log(`O nome do cliente é ${cliente}`)
    }
}

const manipularDados = function(){
    listaDeClientes[0] = "josé da Silva"
    listaDeClientes[1] = "Maria da Silva"
    listaDeClientes[2] = "João da Silva"
    listaDeClientes[4] = "Alex da Silva"

    console.log(listaDeClientes)

    //Permite adicionar novos valores no ARRAY, sempre no final da lista
    listaDeFornecedores.push('Luiza da Silva')
    listaDeFornecedores.push('Zezinho da Sivla')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.log(listaDeFornecedores)
}

//exibirDados()
manipularDados()