const nota = 5
let conceito

if (nota>= 9 && nota <=10)
    conceito = 'A'

 if (nota>=7 && nota <=9)
    conceito = 'B'

 if (nota>=5 && nota <=6.9)
    conceito = 'c'

 if (nota>=4.5 && nota <=4.9)
    conceito = 'd'

 if (nota<=4.5)
    conceito = 'f'

console.log('o conceito do aluno é:', conceito)

