function mediaSimples(nota1, nota2, nota3){
    const media = (nota1+nota2+nota3)/3
    console.log(`a media simples é ${media}`)
}
mediaSimples(6,7,8)
mediaSimples(4.5, 9.2, 9.3)


//fuction 3 params => mediaPoderada => consolog.log
function mediaPoderada(nota1, nota2, nota3){
    const media = (nota1 + 2* nota2  + 3* nota3) / 6
    console.log(`a media poderada é ${media}`)
}
mediaPoderada(6,7,8)
mediaPoderada(4.5, 9.2, 9.3)