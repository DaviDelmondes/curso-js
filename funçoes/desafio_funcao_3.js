
// exemplo 1 (tudo numa função...)
/* function notaAlunomedia(n1,n2,n3){        
    let media

    if (n1 <= n2 && n1 <= n3){
        media = (n2 + n3) /2
    }else if(n2 <= n1 && n2 <= n3){
        media = (n1 + n3) / 2
    }else {
        media = (n1 + n2) / 2
    }

    if (media >= 7){
        return 'Aprovado'
    }else if(media >= 4){
        return 'Recuperação'
    }else{
        return 'Reprovado'
    }

}

const nota1 = 7.9
const nota2 = 2.4
const nota3 = 6.5

console.log(notaAlunomedia(nota1,nota2,nota3)) */

/* function mediaAluno(n1,n2,n3){
    if (n1 <= n2 && n1 <= n3){
        return (n2 + n3) /2
    }else if(n2 <= n1 && n2 <= n3){
        return (n1 + n3) / 2
    }else {
        return (n1 + n2) / 2
    }
}
function notaAlunomedia(n1,n2,n3){        
    let media = mediaAluno(n1,n2,n3)

    if (media >= 7){
        return 'Aprovado'
    }else if(media >= 4){
        return 'Recuperação'
    }else{
        return 'Reprovado'
    }
}
const nota1 = 7.9
const nota2 = 2.4
const nota3 = 6.5

console.log(notaAlunomedia(nota1,nota2,nota3))
*/

function media(n1,n2,n3){
    if (n1 <= n2 && n1 <= n3){
        return (n2 + n3) /2
    }else if(n2 <= n1 && n2 <= n3){
        return (n1 + n3) / 2
    }else {
        return (n1 + n2) / 2
    }
}
function notaAlunomedia(n1,n2,n3){        
    if (media >= 7){
        return 'Aprovado'
    }else if(media >= 4){
        return 'Recuperação'
    }else{
        return 'Reprovado'
    }
}

function notaParaStatu(n1,n2,n3){
    let mediafinal = media(n1,n2,n3)
    return notaAlunomedia(mediafinal)

}
const nota1 = 7.9
const nota2 = 2.4
const nota3 = 6.5

console.log(notaParaStatu(nota1,nota2,nota3))