function possivelErro(chanceErro){
   return new Promise((resolve,reject)=>{
      if(Math.random() < chanceErro){
         reject('Houve um erro')
      }else{
         resolve('Tudo certo')
      }
   })
}

possivelErro(0.5)
   .then(v => console.log(v))
   .catch(erro => console.log(erro))
   .finally(() => console.log('Fim'))