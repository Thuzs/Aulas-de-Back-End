function clas(imc){
    let = Number(imc)
    if(imc < 18.5){
        console.log(`Seu imc é de: ${imc} e a sua classificação é: Abaixo do peso`)
    
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log(`Seu imc é de: ${imc} e a sua classificação é: Peso normal`)
        
    }else if(imc >= 25 && imc <= 29.9){
        console.log(`Seu imc é de: ${imc} e a sua classificação é: Acima do peso(sobrepeso)`)
    
    }else if(imc >= 30 && imc <= 34.9){
        console.log(`Seu imc é de: ${imc} e a sua classificação é: Obesidade 1`)
        
    }else if(imc >= 35 && imc <= 39.9){
        console.log(`Seu imc é de: ${imc} e a sua classificação é: Obesidade 2`)

    }else{
        console.log(`Seu imc é de: ${imc} e a sua classificação é: Parabens vc é imensuravel de tão grande`)
        
    }

}
module.exports = {
    clas
}