function criarData(dia, mes, ano){
    return {
        dia,
        mes,
        ano,
        formatar(){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}
const data1 = criarData( 7,11,2023)
const data2 = criarData(4, 12, 2025)
const data3 = criarData(24, 7, 2012)

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar())
