const { exit } = require("process")
const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Informe o seu nome: ", function(nome){
    let nomeCliente = nome

    entradaDeDados.question("Informe o valor da compra: ", function(compra){
        let valorCompra = compra
        
        entradaDeDados.question("Informe a taxa de juros: ", function(juros){
            let taxaDoJuros = juros

            entradaDeDados.question("Informe o tempo de pagamento (EM MESES): ", function(tempo){
                let tempoMeses = tempo

                jurosCalculado= Number(valorCompra) * Number(taxaDoJuros) * Number(tempoMeses) / 100
                console.log(jurosCalculado)
                montanteFinal = (Number(valorCompra) * (1 + Number(jurosCalculado))) ^ Number(tempoMeses)
                console.log(montanteFinal)
            })
        })
            
    })

})
