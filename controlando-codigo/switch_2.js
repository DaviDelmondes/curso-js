let nota = 9.3


switch(Math.ceil(nota)){
    case 10:
    case 9:
    case 8:
    case 7:
        console.log('Aprovado')
        break
    case 6:
    case 5:
        console.log('Recuperação')
        break
    case 4:
    case 3:
        console.log('Reprovado')
        break
    case 1:
    case 2:
        console.log('Muito reprovado')
        break
    default:
        console.log('Nota Invalida')

}

console.log('fim')