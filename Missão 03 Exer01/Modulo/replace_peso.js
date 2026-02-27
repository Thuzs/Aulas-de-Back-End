function re_peso(peso){
    return Number(peso.replaceAll(',', '.'))
}

module.exports ={
    re_peso
}