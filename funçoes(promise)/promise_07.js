function possivelErro(chanceErro){
   return new Promise((resolve,reject)=>{
      try{
         if(Math.random() < chanceErro){
            reject('Houve um erro')
         }else{
            resolve('Tudo certo')
         }

      } catch(e){
         reject(e)
      }
   })
}

possivelErro(0.5)
   .then(
      v =>  v + '!!!',
      erro => console.log(`#1:${erro}`)
   )
   .then(
      v => console.log(v),
      erro => console.log(`#2:${erro}`)
   )
   
   