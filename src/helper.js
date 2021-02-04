export const obtenerDiferenciaYear = year => {
    return new Date().getFullYear() - year
}

export const calcularMarca = marca => {
    let incremento

    switch(marca){
        case 'europeo':
            incremento = 1.30
            break
        case 'americano':
            incremento = 1.30
            break
        case 'asiatico':
            incremento = 1.30
            break
        default: 
            break
    }

    return incremento;
}