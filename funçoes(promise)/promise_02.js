const primeirpElemento = arrayouString => arrayouString[0]

const promessa = new Promise (resolve =>{
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
    .then(array => primeirpElemento(array))// Aqui, o array inteiro é passado para a função `primeirpElemento`, que pega o primeiro elemento (nesse caso, 'Ana').
    .then(elemento => primeirpElemento(elemento))// O elemento 'Ana' (que é uma string) é passado para `primeirpElemento`, que pega a primeira letra dessa string ('A').
    .then( letra => letra.toLowerCase())
    .then(resultado => console.log(resultado)) // Aqui, o resultado final será 'a', a primeira letra de 'Ana'

console.log('fim')