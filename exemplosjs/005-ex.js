
let prompt = require('prompt-sync')();

let num, nota1, nota2, media, result = '';

num = prompt(`Nota 1: `)
nota1 = parseFloat(num)
num = prompt(`Nota 2: `)
nota2 = parseFloat(num)

media = (nota1 + nota2) / 2
{
  if (media < 5) {
    result = `I`
  } else if (media >= 5 && media < 6.5) {
    result = `R`
  } else if (media >= 6.5 && media < 8.5) {
    result = `B`
  } else if (media <= 10) {
    result = 'MB'
  } else if (media >= 10 || media <= 0) {
    console.log(`Media muito fora da reta!!!`)
  }
  console.log(`Sua media é ${media} e você teve um desempenho: ${result}`)
}
