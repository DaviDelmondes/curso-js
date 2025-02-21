const a = 4
console.log(a)


// Function Declaration
function bomDia(){
    console.log('Bom dia')
}
bomDia()

// Function expression
const boaTarde = function(){
    console.log('Boa tarde!')
}
boaTarde() // undefined


function somar(a = 0,b = 0){
    return a + b
}
let resultado = somar(3,4)
console.log(resultado)

resultado = somar(3)
console.log(3)

resultado = somar(3,5,6,4,8,9,7)
console.log(resultado)

resultado = somar()
console.log(resultado)

