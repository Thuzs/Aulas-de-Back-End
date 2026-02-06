const { exit } = require("process")
const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


    //Pede para o usuário informar o seu nome
    entradaDeDados.question("Informe o seu nome: ", function(nome){
        let nomeCliente = nome

            //Validação de entrada vazia e se utilizar um número
            if(nomeCliente == "" || !isNaN(nomeCliente)){
                console.log("ERROR: Informe seu nome apenas com letras!!")
                exit()
            }

        //Pede para o usuário informar o nome do produto
        entradaDeDados.question("Informe o nome do produto: ", function(produto){
            let nomeProduto = produto

                //Validação de entrada vazia e se utilizar um número
                if(nomeProduto == "" || !isNaN(nomeProduto)){
                    console.log("ERROR: Informe nome do produto apenas com letras!!")
                    exit()
                }
         
            //Pede para o usuário informar o valor da compra
            entradaDeDados.question("Informe o valor da compra: ", function(compra){
                let valorCompra = compra

                    //Validação de entrada vazia e se utilizar uma letra
                    if(valorCompra == "" || isNaN(valorCompra)){
                        console.log("ERROR: Informe o valor da compra apenas com números")  
                        exit()
                    }
             
                //Pede para o usuário informar a taxa do juros
                entradaDeDados.question("Informe a taxa de juros: ", function(juros){
                    let taxaDoJuros = juros

                        //Validação de entrada vazia e se utilizar uma letra
                        if(taxaDoJuros == "" || isNaN(taxaDoJuros)){
                            console.log("ERROR: Informe a taxa do juros apenas com números")
                            exit()
                        }
                    
                    //Pede para o usuário informar o tempo do pagamento
                    entradaDeDados.question(`Informe o tempo de pagamento: `, function(tempo){
                        let tempoMeses = tempo

                            //Validação de entrada vazia e se utilizar uma letra
                            if(tempoMeses == "" || isNaN(tempoMeses)){
                                console.log("ERROR: Informe o tempo de pagamento apenas em números")
                                exit()
                            }
                            
                        //Pede para o usuário escolher entre meses ou anos
                        entradaDeDados.question("Digite (1) para meses, ou (2) para anos: ", function(mesAno){
                            let resposta = mesAno

                                //Validação de entrada vazia, outro de algum número além de 1 e 2 
                                if(resposta == "" || resposta > 2 || resposta < 1){
                                    console.log("ERROR: Informe corretamente se deseja o mes ou ano")
                                    exit()
                                

                            //else if se o usuário escolher a opção de mes independente se escreva mes ou meses sendo maiúsculo ou minusculo:
                            }else if(resposta == 1 || resposta.toLowerCase() == "mes" || resposta.toLowerCase() == "meses"){

                                //Calculo do juros em decimal
                                jurosCalculado= Number(taxaDoJuros / 100)

                                //Calculo do montante final a ser pago
                                montanteFinal = Number(valorCompra) * (1 + Number(jurosCalculado)) ** Number(tempoMeses)

                                //Calculo de quanto custou apenas o juros 
                                jurosAPagar = Number(montanteFinal) - Number(valorCompra) 

                                //Exibição final para o usuário com todas as informações exigidas
                                console.log(`******************* [ Viva Moda ] *******************
                                \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}
                                \nA compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
                                \nA sua compra será parcelada em ${tempoMeses} vez(es) e o Sr(a) pagará no total: ${montanteFinal.toFixed(2)}.
                                \nO acréscimo realizado ao valor de: ${valorCompra} será de ${jurosAPagar.toFixed(2)}\n`)
                                exit()
                            }

                            //if se o usuário escolher a opção de anos mesmo que escreva ano ou anos sendo maiusculo ou minusculo:
                            if(resposta == 2 || resposta.toLowerCase() == "ano" || resposta.toLowerCase() == "anos"){
                                
                                //Conversão de anos para meses
                                tempoAnos= Number(tempoMeses) * Number(12)

                                //Calculo do juros em decimal
                                jurosCalculado= Number(taxaDoJuros / 100)

                                //Calculo do montante final a ser pago
                                montanteFinal = Number(valorCompra) * (1 + Number(jurosCalculado)) ** Number(tempoAnos)

                                //Calculo de quanto custou apenas o juros
                                jurosAPagar = Number(montanteFinal) - Number(valorCompra)

                                //Exibição final para o usuário com todas as informações exigidas
                                console.log(`******************* [ Viva Moda ] *******************
                                \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}
                                \nA compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.
                                \nA sua compra será parcelada em ${tempoAnos} vez(es) e o Sr(a) pagará no total: ${montanteFinal.toFixed(2)}.
                                \nO acréscimo realizado ao valor de: ${valorCompra} será de ${jurosAPagar.toFixed(2)}\n`)
                                exit()
                            }
                        })
                    }) 
                })
            })
        })
    })