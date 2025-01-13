//const numeros = [1,2,3]


//objeto criado de forma Literal
const produto = {
    nome: 'caneta bic preta',
    preco: 9.99,
    desconto:0.2,
    altoCusto: false
}

console.log( produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])
console.log(produto['altoCusto'])

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.altoCusto)

//alterar o valor
produto['nome'] = 'Caneta Bic verde'
produto.nome = 'caneta Bic vermelha'
console.log(produto.nome)