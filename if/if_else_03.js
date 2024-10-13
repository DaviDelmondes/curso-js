const hora = 16

let saudacao

if (hora <= 11){
    saudacao = ' bom dia'
}else{
    if(hora <= 17){
        saudacao = 'boa tarde'
    }else{
        if(hora <= 22){
            saudacao = 'boa noite'
        }else{
            saudacao = 'vai dormi'
        }
    }
}
console.log(saudacao)