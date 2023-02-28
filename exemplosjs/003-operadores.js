let entrada = require('prompt-sync')();

let n, n1, n2;
let cont = entrada(`Quantas vezes deseja executar o codigo?`)

while (cont > 0) {
    n = entrada(`1º valor: `)
    n1 = parseFloat(n)
    n = entrada(`2º valor: `)
    n2 = parseFloat(n)

    let soma, sub, mult, div, resto

    soma = n1 + n2
    sub = n1 - n2
    mult = n1 * n2
    div = n1 / n2
    resto = n1 % n2

    console.log(`
        Soma          : ${soma.toFixed(2)},
        Subtração     : ${sub.toFixed(2)},
        Multiplicação : ${mult.toFixed(2)},
        Divisão       : ${div.toFixed(2)},
        Resto         : ${resto.toFixed(2)},
     `)
     entrada();
     cont--
    } 
    console.log("FIM")