const produto = {
    nome:'Macbook',
    preco:3200,
    desconto:0.05,
    precoComDesconto: function (){ // método!
        return preco * (1 - deconto)
    }
}
console.log(produto.preco)
console.log(produto.precoComDesconto())