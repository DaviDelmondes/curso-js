const nome = ['ana', 'bia', 'carlos', 'Daniel', 'Rafael']

function praCadaElemento(elemento, indice, array){
    console.log(elemento, indice, array)
}
nome.forEach(praCadaElemento)

nome.forEach(function(elemento,_, array){
    console.log(elemento, array)
})