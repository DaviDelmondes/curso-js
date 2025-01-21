// Objeto: aluno
// Atributos: nomes, disciplinas (nome, 3 notas)
// Métodos: media(nomeDaDisplinas, mediaGlobal)

function mediaDeumArray(numeros){
    if(!Array.isArray(numeros)) return null

    let total = 0
    for(let numero of numeros){
        total += numero
    }
    return total / numeros.length
        
}

const aluno = {
    nome: 'Pedro',
    disciplinas:[
        {nome:'Português', notas:[5.4, 9, 8.1]},
        {nome:'Matematica', notas:[8.7, 6.3, 7.9]},
        {nome:'ingles', notas:[7.9, 9, 9.6]},

    ],
    media: function (nomeDaDisplinas){
        for(let disciplina of this.disciplinas){
            if(disciplina.nome.toLocaleLowerCase() === nomeDaDisplinas.toLocaleLowerCase()){
                return mediaDeumArray(disciplina.notas)
            }
        }
        return null

    },
    mediaGlobal(){
        const medias = []
        for(let disciplina of this.disciplinas){
            medias.push(mediaDeumArray(disciplina.notas))
        }
        return mediaDeumArray(medias)
    }
}

console.log(aluno.nome)
console.log(aluno.media('português'))
console.log(aluno.media('matematica'))
console.log(aluno.media('ingles'))
console.log(aluno.media('fisica'))
console.log(aluno.mediaGlobal())