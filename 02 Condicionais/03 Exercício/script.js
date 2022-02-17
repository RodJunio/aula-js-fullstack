//Perguntar o nome do piloto
//Colocar a velocidade inicial da nave como 0
//Pedir uma confirmação informando que está indo para velocidade x km/s (se quiser, atualizar a velocidade)
//Exibir uma das seguintes mensagens com base na velocidade escolhida:
/**
 * se for meno que 0km/s: "Nave está parada. Considere partir e aumentar a velocidade"
 * se for menor que 40km/s: "Você está devagar, podemos aumentar mais"
 * Se for maior ou igual a 40km/s e menor que 80km/s:"Parece uma boa velocidade para manter"
 * Se for maior ou igual a 80km/s e menor que 100km/s:"Velocidade alta. Considere diminuir."
 * Se for maior ou igual a 100km/s:"Velocidade perigosa. Controle automático forçado"
 */

let pilotName = prompt(`olá, Piloto. Por favor se identifique!`);

let velocity = 0;

let newVelocity = prompt(`É hora de acelerar, ${pilotName}! Digite a velocidade desejada`);

let confirmVelocity = confirm(`Estamos acelerando para ${newVelocity} km/s`);

if (confirmVelocity) {
  velocity = newVelocity;
}

if (velocity <= 0) {
  alert(`Nave está parada. Considere partir e aumentar a velocidade.`);
} else if (velocity < 40) {
  alert(`Você está devagar, podemos aumentar mais.`);
} else if (velocity >= 40 && velocity < 80) {
  alert(`Parece uma boa velocidade para manter.`);
} else if (velocity >= 80 && velocity < 100) {
  alert(`Velocidade alta. Considere diminuir.`);
} else if (velocity >= 100) {
  alert(`Velocidade perigosa. Controle automático forçado.`);
}

alert(`Piloto: ${pilotName}

Velocidade: ${velocity} km/s`)
