// fetch

//const url = 'https://dog.ceo/api/breeds/image/random'
//fetch(url)
//    .then(reposta => reposta.json())
//    .then(dados => console.log(dados))
//
const url = 'https://potterapi-fedeperin.vercel.app/pt'
 fetch(url)
    .then(reposta => reposta.json())
    .then(dados => console.log(dados))
