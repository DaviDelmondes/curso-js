const path = require('path') // importando o caminho
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

function lerAquivo(erro, conteudo){
    if (erro) return
    console.log(conteudo.toString())
}

//fs.readFile(caminho,lerAquivo)
//console.log('Fim #!!!!!')

const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim 02#!!!')

