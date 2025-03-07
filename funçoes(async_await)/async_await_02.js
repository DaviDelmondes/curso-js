 async function obterVersiculo(livro, cap, versiculo){
    const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`

     const resposta = await fetch(url)
     const dados = await resposta.json()
     return dados.verses[0].text

 }

 // uma unçao async sempre vai retorna uma PROMISE!!!
 async function excutar(){
    const texto = await obterVersiculo('luke', 3, 16)
    console.log(texto)
 }
 excutar()
 