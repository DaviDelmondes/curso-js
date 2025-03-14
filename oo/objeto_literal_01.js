const produto = {
    nome:'Ipad',
    marca:'Apple',
    anoFrabicacao:2023,
    preco: 7500,
    fragil: true,
    desconsto:0.15,
    precoComDesconto: function(){
        return (1 - this.desconsto)* this.preco
    }

}
const precoFinal = produto.precoComDesconto()
console.log(`${produto.nome} tem o preço R$ ${precoFinal}`)