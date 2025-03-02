const num = [1, 2, 3, 4, 5, 6, 7, 8,]

const dobro = []

//for (let i = 0; i < num.length; i++){
//    dobro.push(num[i] * 2)
//}

for ( const nums of num){
    dobro.push(nums * 2)
}
console.log(dobro)