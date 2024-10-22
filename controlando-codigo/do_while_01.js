let quatidade = 0
const dataFuturo = Date.now() + 3000

do {
    quatidade++
}while (Date.now()  < dataFuturo)
console.log(quatidade)