const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9]

let total = 0
for(let i = 0; i < notas.length; i++){
    total += notas[i]
}

media = total / notas.length

console.log(`A media da turma é ${media}`)

let total1 = 0
let media1 = 0

for(let nota of notas){
    total1 += nota
}
media1 = total1 / notas.length

console.log(`A media da turma é ${media1}`)


