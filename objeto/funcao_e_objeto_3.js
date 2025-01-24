// Classe 

// função contrutora -> objetos
function Data(dia,mes,ano){
    this.dia = dia
    this.mes = mes
    this.ano = ano

    this.formatar = function (){
        return `${this.dia}/ ${this.mes}/ ${this.ano}`
    }
}

const data1 = new Data(1,1,2023)
console.log(data1.formatar())


// 1. incia com letras maiusculas[não obrigatoria]
// 2. chamar função com new Data(...)
// 3. usar o this para acrescentar atrib.. e metodos no objetos

// JavaScript => ECMAScript 2015