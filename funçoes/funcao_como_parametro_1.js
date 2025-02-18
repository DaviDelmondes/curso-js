function exibirNoconsole(funcao){
if(typeof funcao === 'function'){
    const resultado = funcao()
    console.log(`O resultado é ${resultado}`)
}
}
function bomdia(){
    return 'Bom dia!'
}


exibirNoconsole(bomdia())
exibirNoconsole(2)
exibirNoconsole('Bom dia')

exibirNoconsole(bomdia)