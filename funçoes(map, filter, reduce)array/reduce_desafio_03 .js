const carrinho = [
    { nome:'Tesoura', qtde:1, preco: 19.20, fragil:false },
    { nome:'Caneta', qtde:10, preco: 7.99, fragil:false},
    { nome:'Ipad', qtde:2, preco: 7500, fragil:true },
    { nome:'Lapis', qtde:3, preco: 5.82, fragil: false},
    { nome:'Impressora', qtde:5, preco: 1000, fragil:true},
    { nome:'Caderno', qtde:4, preco: 27.10, fragil:false},
    { nome:'Computador', qtde:2, preco: 5000, fragil: true},
    
]
const media = (total, valor, indice, array) =>{
    const tamanho = array.length
    const ultimo = tamanho - 1 === indice
    const novoTotal = total + valor
    return ultimo ? novoTotal / tamanho : novoTotal
}

const efragil = intem => intem.fragil

const totalIntem = produto => produto.qtde * produto.preco



const resultado = carrinho
    .filter(efragil)
    .map(totalIntem)
    .reduce(media)



console.log(resultado)      
 