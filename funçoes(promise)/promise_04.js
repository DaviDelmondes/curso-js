//callback
setTimeout(function(){
    console.log('Executando callback...')
    setTimeout(function(){
        console.log('Executando callback...')
        setTimeout(function(){
            console.log('Executando callback...')
            setTimeout(function(){
                console.log('Executando callback...')
            },2000)
        },2000)
    },2000)
},2000)

// promise 

function esperarPor(tempo = 2000){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log('Excutando por promise')
            resolve()
        }, tempo)
    })
}
esperarPor()
    .then(esperarPor)
    .then(esperarPor)
    .then(esperarPor)