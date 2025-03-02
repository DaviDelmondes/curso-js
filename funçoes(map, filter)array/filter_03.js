Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++){
        if (fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const maiorOuInguaA4 = numero => numero >= 4 

const numeros = [1, 2, 3, 4, 5]
console.log(numeros.filter(maiorOuInguaA4))
console.log(numeros.meuFilter(maiorOuInguaA4))