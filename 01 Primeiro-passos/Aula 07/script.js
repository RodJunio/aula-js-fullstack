alert('Bem-vindo! A segur pediremos que informe alguns dados.');

let nome = prompt('Informe seu nome');
let idade = prompt('Informe sua idade');
let confirme = confirm(`Sua é idade é ${idade} anos?`);
alert(`Seu nome é ${nome} e sua idade é ${idade}.`)