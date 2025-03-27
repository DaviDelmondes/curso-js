class Data{
    #dia = 1
    #mes = 1
    #ano = 1970 
    
    //Getters/Setter

    get dia(){
        return this.#dia
    }
    
    set dia(novoDia){
        if(novoDia >= 1 && novoDia <= 31){
        this.#dia = novoDia
        }
    }

    get mes(){
        return this.#mes
    }

    set mes(novoMes){
        if(novoMes >=  1 && novoMes <= 12 )
            this.#mes = novoMes
    }

    get ano(){
        this.ano
    }

    set ano(novoAno){
        if(novoAno >= 1970 && novoAno <= 2900)
            this.#ano = novoAno
    }

    exibir(){
        return`${this.#dia}/${this.#mes}/${this.#ano}`
    }                               
}
const d1 = new Data()
d1.dia = 130
d1.mes = 12
d1.ano = 2023

console.log(d1.dia)
console.log(d1.mes)
console.log(d1.exibir(), d1)