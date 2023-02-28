// chamando a biblioteca de prompt-sync
// var nome = entrada("Nome: ");
// console.log(nome)

let entrada = require('prompt-sync')();

let nota1 = entrada(`Primeira nota: `)
let nota2 = entrada(`Segunda nota: `)
let soma = parseFloat(nota1) + parseFloat(nota2)

console.log(`Resultado final: ${soma}`)


console.log(`A soma de ${nota1} + ${nota2} = ${soma}`)
entrada();

console.log(`Fim do programa!!!`);