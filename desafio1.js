const readline = require('readline-sync');

var num = readline.question('Digite um numero: ');



 function somarNumero (num) {
    
    let soma = 0;
  
    for (let i = 1; i < num; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        soma += i;
      }
    }
    return soma;
  }

console.log('A soma de todos os valores inteiros divisíveis por 3 ou 5 inferiores a ' + num + ' é: '+somarNumero(num))