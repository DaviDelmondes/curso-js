// #1 função SEM parãmetros e SEM retorno
 
function exibirBomdia(){
    console.log(`Bom dia!`)
}
exibirBomdia()

// #2 - função COM parãmetros e SEM retorno
function exibirBomdiaPara(nome, msg){
    console.log(`Bom dia!${nome} ${msg}`)
}
exibirBomdiaPara('Ariele, como você esta?')
exibirBomdiaPara('Davi', 'vamos para reunião agora?')
exibirBomdiaPara('mateus', 'você parece cansado')

// #3 - função SEM parãmetros e COM retorno
function entreNumero0e10(){
    const numero = parseInt(Math.random() * 10)
    return numero
}
console.log(entreNumero0e10())

// #4 - funcão COM parãmetro e COM retorno

function somar(n1, n2){
    return n1 + n2
}

const resultado = somar(50,50)
console.log(resultado)
console.log (somar(3,1))
