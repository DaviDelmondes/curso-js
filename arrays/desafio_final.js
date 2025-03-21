const nomes = ['Rafaele', 'Larissa','Ana', 'Pedro', 'Gustavo']


function forEach(array, funcao){
    for(let i in array){
        funcao(array[i], i, array)
    }
}

function praCadaElemento(el, i, array){
    console.log(el, i, array)
}

forEach(nomes, praCadaElemento)

forEach(nomes, function(el, i){
    console.log(`${i} => ${el}`)
})