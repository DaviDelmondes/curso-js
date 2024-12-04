// indexas      0    1    2    3    4    5 
const notas = [7.8, 7.3, 5.8, 9.8, 8.3, 10]


// esse arrays de baixo não pode ser modificado ou acresentado, pois esta congelado
//const notas = Object.freeze[7.8, 7.3, 5.8, 9.8, 8.3, 10]

console.log(notas)
console.log(notas[3])

notas[6] = 9.9
console.log(notas[6])
console.log(notas)
