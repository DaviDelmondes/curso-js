function bomDia(){
    console.log('Bom dia')
}

const boaTarde = function(){
    console.log('Boa tarde!')
}


// passar uma função como paramentro para outra função
function executar(x){
    if(typeof x === 'function')
        x()
    
}
executar(bomDia)
executar(boaTarde)
executar(1)
executar('nao executar')


// Retonar uma funçao a partir de uma outra função


function potencia(exp){
    return function(base){
        return Math.pow(base, exp)
    }
}

const aoQuadrado = potencia(2)
console.log(aoQuadrado(4))
console.log(aoQuadrado(5))

const aoCubo = potencia(3)
console.log(aoCubo(4))
console.log(aoCubo(5))

const resultado = potencia(3)(10)
console.log(resultado)