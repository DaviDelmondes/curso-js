const carrinho = [
    { nome:'Caneta', qtde:10, preco: 7.99},
    { nome:'Impressora', qtde:14, preco: 649.50},
    { nome:'Caderno', qtde:4, preco: 27.10},
    { nome:'Lapis', qtde:3, preco: 5.82},
    { nome:'Tesoura', qtde:1, preco: 19.20},
]
const apenasNomes = produto => produto.nome
const calcularTotal = produto => produto.qtde * produto.preco

console.log(carrinho.map(apenasNomes))
console.log(carrinho.map(calcularTotal))