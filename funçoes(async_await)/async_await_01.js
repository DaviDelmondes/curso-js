function esperarPor(tempo){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve()
        },tempo)
    })
}
 function exutarPromise(){
    esperarPor(2000)
    .then(() =>console.log('[Promise]Depois de 2s...'))
    .then(() =>esperarPor(3000))
    .then(() =>console.log('[Promise]Depois de 3s...'))
    .then(() =>esperarPor(1500))
    .then(() =>console.log('[Promise]Depois de 1.5...'))

}
async function excutarAsync(){
   await esperarPor(2000)
    console.log('[Async/await]Depois de 2s...')
    
   await esperarPor(3000)
    console.log('[Async/await]Depois de 3s...')

   await esperarPor(1500)
    console.log('[Async/await]Depois de 1.5...')

}
exutarPromise()
excutarAsync()

