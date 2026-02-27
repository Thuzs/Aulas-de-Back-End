function re_altura(altura){
    return Number(altura.replaceAll(',', '.'))
}

module.exports ={
    re_altura
}