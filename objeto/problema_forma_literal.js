const data1 = {
    dia: 5,
    mes: 4,
    ano: 2023,
    formatar: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia: 5,
    mes: 7,
    ano: 2012,
    formatar: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data3 = {
    dia: 5,
    mes: 12,
    ano: 2026,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}


console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar())
