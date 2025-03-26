// molde
class Data {
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
// instacia
const d1 = new Data(1, 4, 2023)
const d2 = new Data(5, 4, 2003)

console.log(d1, typeof d1)
console.log(d2, typeof d2)

console.log(typeof Data)