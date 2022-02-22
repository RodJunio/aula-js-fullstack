//Crie um arquivo JS e importe no seu arquivo HTML
//Pedir nome da pessoa mais velha
//Pedir idade da pessoa mais velha
//Pedir nome da pessoa mais nova
//Pedir idade da pessoa mais nova
//calcular diferença de idade
//Exibir o nome da pessoa mais velha e sua idade
//Exibir o nome da pessoa mais velha e sua idade
//Exibir a diferença de idade

const nomeVelha = prompt("Digite o nome da pessoa mais velha");
const idadeVelha = prompt("Digite a idade da pessoa mais velha");

const nomeNova = prompt("Digite o nome da pessoa mais Nova");
const idadeNova = prompt("Digite a idade da pessoa mais Nova");

let diferencaIdade = idadeVelha - idadeNova;

alert(`${nomeVelha} é a pessoa mais velha e ela/ele tem ${idadeVelha} anos.

${nomeNova} é a pessoa mais velha e ela tem ${idadeNova} anos 

A diferença de idade entre elas é de ${diferencaIdade} anos`);