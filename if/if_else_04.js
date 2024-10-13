const hora = 24
let saudacao

if (hora <= 11) {
    saudacao = 'Bon dia'
    }else if (hora <= 17) {
        saudacao = 'Boa tarde'
    }else if (hora <= 22) {
        saudacao = 'Boa noite'
    }else{
        saudacao = 'vai dormi'
    }
console.log(saudacao)