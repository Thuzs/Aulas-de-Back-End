var readline =require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Entrada de dados do nome do usuário
entradaDeDados.question("Digite seu nome: ", function(nomeUsuario){
    // Entrada de dados do n1
    entradaDeDados.question("Digite o primeiro número: ", function(n1){
        // Entrada de dados do n2
        entradaDeDados.question("Digite o segundo número: ", function(n2){
            // Entrada de dados do n2
            entradaDeDados.question("Digite o terceiro número: ", function(n3){
                // Exibição da mensagem do nome do usuário e da soma dos números
                console.log(`Seu nome é: ${nomeUsuario}, e a soma dos três números é ${Number(n1) + Number(n2) + Number(3)} `)
            })
        })
    })
}) 