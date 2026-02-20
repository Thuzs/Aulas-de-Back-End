function val_rep(valor){
    return Number(valor.replaceAll(',', '.'))
}

module.exports ={
    val_rep
}