const numeros = [1, 2, 3, 4, 5, 4]

numeros[0] = 100

// push empurra aquele numero por ultimo
numeros.push(6)
// indexOF serve pra procurar um indice de um determinado elemento, caso quiser continuar a procurando tem que adionar o indice que parou
console.log(numeros.indexOf(4, 4))
console.log(numeros.indexOf(4))
// includes que diz se o elemento esta no array sim ou não
console.log(numeros.includes(4))
// join é separador que separa aquee array em string
console.log(numeros.join(' - '))

// concat parace com push mais ele cria outro array e nao meche com array original
const numeros2 = numeros.concat(7, 8, 9 )
console.log(numeros2)
console.log(numeros)