/*******************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Arthur
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
const listaDeNomes          = ['Jose', 'Maria', 'João', 'André', 'Alex', 'Carlos', 'Ana', 'Bruna', 'Jake', 'jose', 'jose', 'Jose']
const listaDeClientes       = []
const listaDeFornecedores   = []

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
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Sivla')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.table(listaDeFornecedores)

    //Permite adicionar novos elementos no array sempre no inicio
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)

    //Permite remover elementos do final da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover elementos no inicio da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //Splice() -> Permite remover um elemento baseado no indice da lista
                     // splice(a partir do indice, quantos indices vao ser apagados a partir do primeiro)
    listaDeFornecedores.splice(2, 1)
    console.table(listaDeFornecedores)

    //Splie() -> Permite adicionar um novo elemento em um determinado lugar do array
                            //Indice, 0 -> significa que não será removido ninguém, Novo contéudo 
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
    console.table(listaDeFornecedores)
}

const removerItem = function(nome){

    // for(indice in listaDeNomes){
    //      if(listaDeNomes[indice] == nome){
    //          listaDeNomes.splice(indice, 1)
    //      }
    // }
    
    //Retorna o indice de um elemento fazendo a busca pelo conteudo
    //Se o indexof não encontrar o conteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    if(indice != -1){
        listaDeNomes.splice(indice,1)
        return true
    }else{
        return false
    }
}

const verificarItem = function(nome){
    //Verifica a existencia de um conteúdo dentro de uma lista (true/false)
    return listaDeNomes.includes(nome)
    
}

const quantidadeDeitens = function(nome){
    let = cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1
    })

    return cont
}

const criandoDadosJSON = function(){
    let aluno = {   'nome': 'José',
                    'ra': 123456,
                    'telefone': "40028922",
                    'email': 'jose@gmail.com'
                }
    
    //Exibindo o objeto JSON completo
    console.log(aluno)
    console.table(aluno)

    //Exibiindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)
    
    //Adiciona um novo atributo no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)

    //Remove um atributo especifico
    delete aluno.telefone
    console.log(aluno)
}

const cadastroDeProdutos = function(){
    let cores = [   
        {"id": 1, "nome": "Branco"},//Indice 0
        {"id": 2, "nome": "Preto" },//Indice 1
        {"id": 3, "nome": "Azul"  },//Indice 2
        {"id": 4, "nome": "Rosa"  },//Indice 3
        {"id": 5, "nome": "Cinza" } //Indice 4
    ]

    let marcas = [
        {"id": 1, "marca": "LG",        'telefone': "40028922", 'email': 'lg@gmail.com'        },
        {"id": 2, "marca": "Dell",      'telefone': "40724626", 'email': 'dell@gmail.com'      },
        {"id": 3, "marca": "Lenovo",    'telefone': "41517922", 'email': 'lenovo@gmail.com'    },
        {"id": 4, "marca": "Apple",     'telefone': "26266922", 'email': 'apple@gmail.com'     },
        {"id": 5, "marca": "Razer",     'telefone': "31528922", 'email': 'razer@gmail.com'     },
        {"id": 6, "marca": "Logitech",  'telefone': "25331522", 'email': 'logitech@gmail.com'  },
        {"id": 7, "marca": "Multilaser",'telefone': "40064272", 'email': 'multilaser@gmail.com'}
    ]

    let produtos = [
        {   "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 polegadas",
            "marca": marcas[0].marca,
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1]
            ],
            "valor": 800.50
        },
        {
            "id": 2,
            "nome": "Teclado",
            "decricao": "Teclado mecânico RGB",
            "marca": marcas[5].marca,
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },
        {
            "id": 3,
            "nome": "Mouse",
            "decricao": "Mouse RGB",
            "marca": [
                        marcas[0].marca,
                        marcas[1].marca,
                        marcas[5].marca
                     ],
            "qtde": 500,
            "cor":  [
                    cores[0],
                    cores[1],
                    cores[3]
                    ],
            "valor": 80
        }
    ]
    //     produtos[0].cor.forEach(function(nomeCor){
//         console.log("A cor do produtos é:" + nomeCor.nome)
//     })
    produtos.forEach(function(itemProduto){
        console.log(`Produto:  ${itemProduto.nome}`)

        itemProduto.marca.forEach(function(itemMarca){
            console.log(`   Marca: ${itemMarca}`)
        })

        //Percorre o objeto de cor dentro de cada produto, para trazer as cores
        itemProduto.cor.forEach(function(itemCor){
            console.log(`   Cor: ${itemCor.cor}`)

        })
        
    })

         //Pesquisando o produto pelo nome
         console.log("Pesquisando os produtos pelo nome")
         let nome = 'Mouse sem fio'
    
         produtos.forEach(function(itemProduto){
            if(String(itemProduto.nome).toUpperCase() == String(nome).toUpperCase())
                console.log(itemProduto)
         })
    
         //Pesquisando produtos pela cor
         console.log("Pesquisando produtos pela cor")
    
         let cor = 'laranja'

         produtos.forEach(function(itemProduto){
            itemProduto.cor.forEach(function(itemCor){
                if(String(itemCor.cor).toUpperCase() == String(cor).toUpperCase())
                    console.log(itemProduto)
            })
         })
}
cadastroDeProdutos()




//console.log(quantidadeDeitens('jose'))
//exibirDados()
//manipularDados()
//console.table(listaDeNomes)
// let resposta = removerItem('Maria')

// if(resposta)
//     console.log("item removido com sucesso.")
// else
//     console.log('Não foram encontrados itens para ser removido')

// console.table(listaDeNomes)