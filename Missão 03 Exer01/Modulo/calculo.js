function calcular(peso, altura){
    let = Number(peso)
    let = Number(altura)

    let imc = peso / (altura*altura)
    return imc.toFixed(2)
}

module.exports = {
    calcular
}