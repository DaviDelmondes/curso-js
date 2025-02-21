const executar = (fn) => fn()

const boaTarde = () => 'Boa Tarde'

const bomDia = () => 'Bom dia'

let resultado = executar(bomDia)
console.log(resultado)

 resultado = executar(boaTarde)
 console.log(resultado)

