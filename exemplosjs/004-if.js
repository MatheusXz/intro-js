let entrada = require('prompt-sync')();

let idade = entrada(`Digite aqui sua idade atual: `)

if(idade >= 18){
    console.log(("Você esta pronto para tirar sua habilitação").toUpperCase())
} else {
    console.log((`Você esta pronto para nada, só andar de carona mesmo!`).toLocaleUpperCase())
}