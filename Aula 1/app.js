//comentario em linha
/* 
Comentario
    em
bloco
*/

//imprime no terminal um conteúdo
console.log("Testando o print do console")

//Permite criar uma variavel
var nome = "arthur"

console.log(nome)

//Formas de concatenar variaveis e texto
console.log("O nome do usuário é: " + nome)
console.log(`O nome do usuario é: ${nome}`)

//Import da biblioteca para captar entrada de dados via terminal
var readline = require(`readline`)

//Cria uma interface para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Função para retornar o nome digitado no terminal
    //O metodo question após a digitação chama a sua função "CALL BACK"
    //para entregar o que foi digitado no terminal, através do argumento
    //nomeUsuario
entradaDeDados.question('Favor digitar seu nome: ', function(nomeUsuario){
    console.log("O nome do usuário é: " + nomeUsuario)
    
    //Entrada de dados para o Email
    entradaDeDados.question("Favor digitar seu email: ", function(emailUsuario){
        console.log(`O email informado é: ${emailUsuario}`)
    })
})