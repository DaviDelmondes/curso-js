const produto = {
    nome:'Ipad',
    marca:'Apple',
    anoFrabicacao:2023,
    preco: 7500,
    fragil: true,
    desconsto:0.15,
}
 function precoComDesconto(produto){
     return (1 - produto.desconsto)* produto.preco
  
}
const precoFinal = precoComDesconto(produto)
console.log(precoFinal)