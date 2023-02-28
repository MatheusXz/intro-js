
let prompt = require('prompt-sync')();

let num, nota1, nota2, media;

num = prompt(`Nota 1: `)
nota1 = parseFloat(num)
num = prompt(`Nota 2: `)
nota2 = parseFloat(num)

media = (nota1 + nota2) / 2

if (media < 5) {
    console.log(`Sua media é ${media} e você teve um desempenho: I`)
} else if (media >= 5 && media < 6.5) {
    console.log(`Sua media é ${media} e você teve um desempenho: R`)
} else if (media >= 6.5 && media < 8.5) {
    console.log(`Sua media é ${media} e você teve um desempenho: B`)
} else if (media <= 10) {
    console.log(`Sua media é ${media} e você teve um desempenho: MB`)
} else {
    console.log(`
    
    Media muito fora da reta!!!

    `)
}