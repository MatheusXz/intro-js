let prompt = require('prompt-sync')();

function soma(numeros = [0]) {
    let result = 0;
    numeros.map((e) => result += e)
    return result;
}

let listNumeros = [];
let num = 0;
do {

    num = parseInt(prompt("Digite um numero para somar ou digite 0 para sair: "));
    if (num === 0) {
        break;
    }
    listNumeros.push(num);

} while (num !== 0);

const total = soma(listNumeros);

console.log('Total: ' + total);