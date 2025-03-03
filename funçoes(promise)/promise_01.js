const promessa = new Promise(function(resolve){
    resolve ('Jogar futebool')
})
// Quando a promessa acontece
promessa.then(valor => console.log(valor))
console.log('Fim')
