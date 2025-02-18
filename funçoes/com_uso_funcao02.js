function exibiDataDetalhada(dia, mes,ano){
    console.log(`dia: ${dia}`)
    console.log(`Mês: ${mes}`)
    console.log(`ano: ${ano}`)
}

function exibiData1(dia, mes, ano){
    console.log(`${dia} de ${mes} de ${ano}`)
}

const d1 = 7
const m1 = 'maio'
const a1 = 2022

const d2 = 15
const m2 = 'abril'
const a2 = 2019

//exibiData1( 5, 'abril', 2003) 
//exibiData1(d1, m1, a1)
exibiData1(d2, m2, a2)

exibiDataDetalhada(d2,m2,a2)
