const diaDaSemana = 'sabado'
let cargaHoraria = 'domingo'

if (diaDaSemana === 'segunda'|| 
    diaDaSemana ==='terca' ||
    diaDaSemana === 'quarta' || 
    diaDaSemana==='quinta' || 
    diaDaSemana === 'sexta'){
    cargaHoraria = 8
}else if(diaDaSemana === 'sabado'){
    cargaHoraria = 4
}else {
    cargaHoraria = 0
}
console.log(cargaHoraria)