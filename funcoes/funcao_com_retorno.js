function mediaPoderada(nota1, nota2, nota3){
    const media = (nota1 + 2 * nota2 + 3 * nota3)/6
   return media
}

function mediaSimples(nota1, nota2){
    return (nota1 + nota2)/2
}

const media1 = mediaPoderada(7,8,9)
const media2 = mediaPoderada(7.1,8.1,9.1) 
const mediafinal = mediaSimples(media1 , media2)
const mediafinalint = Math.ceil(mediafinal) // aredonda um numero 

console.log(`a media final é ${mediafinalint}`)