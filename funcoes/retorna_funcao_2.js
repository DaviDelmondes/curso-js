function retornaUmaFuncao(){
    return function(){
        return ' a Estou dentro da função anônima!'
    }
}

const x = retornaUmaFuncao

console.log(retornaUmaFuncao)
console.log(x)
console.log(x())
console.log(retornaUmaFuncao())
console.log(retornaUmaFuncao()())
console.log(x()())