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

function Aluno(nome, disciplinas){
    this.nome = nome
    this.disciplinas = disciplinas

    this.media = function (nomeDaDisplinas){
        for(let disciplina of this.disciplinas){
            if(disciplina.nome.toLocaleLowerCase() === nomeDaDisplinas.toLocaleLowerCase()){
                return mediaDeumArray(disciplina.notas)
            }
        }
        return null

    },
    this.mediaGlobal= function(){
        const medias = []
        for(let disciplina of this.disciplinas){
            medias.push(mediaDeumArray(disciplina.notas))
        }
        return mediaDeumArray(medias)
    }
}

const aluno1 = new Aluno('Pedro',[
    {nome:'Português', notas:[5.4, 9, 8.1]},
    {nome:'Matematica', notas:[8.6, 6.2, 7.8]},
    {nome:'ingles', notas:[7.9, 9, 9.6]},

])

console.log(aluno1.nome)
console.log(aluno1.media('português'))
console.log(aluno1.media('matematica'))
console.log(aluno1.media('ingles'))
console.log(aluno1.media('fisica'))
console.log(aluno1.mediaGlobal())