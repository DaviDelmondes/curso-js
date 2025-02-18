function executa(funcao, y = 10  , b = 10){
if (typeof funcao === 'function') {
    console.log(funcao(y, b))
}
}

function somar(a,b){
    return a + b 
}

function subtrair(a,b){
    return a - b
}

function multplicar(a,b){
    return a * b
}

function bomDia(){
    return 'Bom dia'
}


executa(somar, 10 ,10 )
executa(subtrair, 20, 10)
executa(multplicar, 50 , 2)
executa(somar)
executa(subtrair)
executa(bomDia)
