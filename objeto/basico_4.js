const cliente = {
    codigo: 57235,
    nome: 'Ana medeiro albuquerque',
    vip: true,
    endereco: {
        logradouro:'Rua XYZ',
        numero: 987,
        complemento: 'Apto 302 bloco c',
        pontoReferencia: ['hospital São pedro', 'shoppig riomar']
    },
    filhos:[
        {nome: 'Pedro M. albuquerque', anoDeNascimento: 2004},
        {nome: 'Mariana M. albuquerque', anoDeNascimento: 2014},
        {nome: 'Daniel M. albuquerque', anoDeNascimento: 2017}
    ]
    
}
console.log(cliente.endereco.logradouro)
console.log(cliente.filhos[1].anoDeNascimento)