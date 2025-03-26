// função construtura -> Produto
// Nome, preco, deconto (0,1)
// precofinal

function Produto (nome, preco, desconto = 0){
    this.nome = nome
    this.preco = preco
    this.desconto = desconto
    this.precoFinal = function(){
       return this.preco * (1 - this.desconto)
    }
}
const p1 = new Produto('Ipad', 7500, 0.1)
console.log(p1.nome, p1.precoFinal(), p1)

const p2 = new Produto('Geladeira', 3500, 0.15)
console.log(p2.nome, p2.precoFinal())