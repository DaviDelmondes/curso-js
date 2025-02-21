// fn -> 3 + 7
const somar = (a,b) => a + b
// fn -> 3 * 7
const multiplicar = (a,b) => a * b
// fn -> 3 - 7
const subtrair = (a,b) => a - b

// calcular (3)(7)(fn)
//const calcular = a =>{
//    return b => {
//        return fn =>{
//            return fn(a,b)
//        }
//    }
//}

const calcular = a => b => fn => fn(a,b)
  

console.log(calcular(10)(7)(multiplicar))
console.log(calcular(10)(7)(somar))
console.log(calcular(10)(7)(subtrair))