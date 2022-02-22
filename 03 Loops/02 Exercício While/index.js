let warpCount = 0;
let chosenOption = '';

let spaceship = prompt(`Digite o nome da nave`);

chosenOption = prompt(`Deseja entrar em dobra espacial?
1- Sim
2- Não`);

while(chosenOption == `1`) {
    warpCount += 1;
    chosenOption = prompt(`Deseja realizar a próxima dobra?
    1- Sim
    2- Não`);
}

alert(`Nave: ${spaceship}
Quantidade de dobras: ${warpCount}`);