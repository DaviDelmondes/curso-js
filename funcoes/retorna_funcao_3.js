function calcularPrecoComImposto(imposto){
    return function(preco){
        return (1 + imposto) * preco
    }
}
//estado x

const impostoEstadoX = calcularPrecoComImposto(0.3)
console.log(impostoEstadoX(20))
console.log(impostoEstadoX(30))
console.log(impostoEstadoX(40))
console.log(impostoEstadoX(50))

//estado Y
const impostoEstadoY = calcularPrecoComImposto(0.4)
console.log(impostoEstadoY(10))
console.log(impostoEstadoY(20))
console.log(impostoEstadoY(50))


console.log(calcularPrecoComImposto(0.085)(100))