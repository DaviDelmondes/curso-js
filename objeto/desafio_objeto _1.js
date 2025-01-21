const data = {
    dia: 7,
    mes: 11,
    ano: 2026,
    formatar: function(){
        return `${data.dia}/${data.mes}/${data.ano}`
    }
}

data.dia = 9
data.mes = 12
console.log(data.formatar())



