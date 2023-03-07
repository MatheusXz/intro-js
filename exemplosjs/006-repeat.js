let prompt = require('prompt-sync')();

let num, inicial, final, cont;

num = prompt(`  Digiete o valor inicial:    ->   `)
inicial = parseInt(num)
num = prompt(`  Digiete o valor final:      ->   `)
final = parseInt(num)


if (inicial < final) {
    cont = inicial
    do {
        console.log(`valor: ${cont}`)
        cont++;
    } while (cont <= final)
} else {
    cont = inicial
    do {
        console.log(`valor: ${cont}`)
        cont--;
    } while (cont >= final)
}
