let distanceInLy = prompt(`Qual a distância em anos-luz?`);

let chosenOption = prompt(`Escolha em qual medida deseja converter a distância:
1- Parsec(pc)
2- Unidade astronômica(AU)
3- Quilômetros(km)`);

let chosenUnity;
let converteDistance;

switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec";
    converteDistance = distanceInLy * 0.306601;
    break
  case "2":
    chosenUnity  ="Unidade Astronômica"
    converteDistance = distanceInLy * 63241.1;
    break
  case "3":
    chosenUnity = "Quilômetros"
    converteDistance = distanceInLy * 9.5 * Math.pow(10,12)
    break
  default:
    chosenUnity = "Unidade não identidicada"
    converteDistance ="Conversão fora do escopo"
}

alert(`Distância em Anos Luz: ${distanceInLy}
${chosenUnity}: ${converteDistance}`)
