const aluno = [
    {nome: "Henderson", n1: 8, n2: 7, n3: 0, n4: 5}, 
    {nome: "Mac", n1: 6, n2: 4, n3: 10,  n4: 0},
    {nome: "Vaughan", n1: 5, n2: 0, n3: 3, n4: 0}, 
    {nome: "Lauryn", n1: 10, n2: 1, n3: 3, n4: 7}, 
    {nome: "Sofie", n1: 7, n2: 1, n3: 9, n4: 2}, 
    {nome: "Michaela", n1: 9, n2: 4, n3: 4, n4: 10 }     
]

function calcularMedia(aluno){
    return{
        nome: aluno.nome,
        media: (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4 ) / 4
    }
}
console.log(aluno.map(calcularMedia))