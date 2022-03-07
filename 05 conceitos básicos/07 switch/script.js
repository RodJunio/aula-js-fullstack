let dia = Number(prompt(`Veja seu objetivo do dia: 
1 = Domingo
2 = Segunda-feira
3 = Terça-feira
4 = Quarta-feira
5 = Quinta-feira
6 = sexta-feira
7 = Sábado`));

let objetivo = "";
let titulo = ""

switch(dia) {
    case 1:
        objetivo = "Ir ao culto";
        titulo = "Hoje é final de semana aproveitar seu tempo livre!"
        break;
    case 2:
        objetivo = "Estudar para faculdade";
        titulo = "Hoje é dia de dar o seu melhor para virar um dev";
        break;
    case 3: 
        objetivo = "Estudar Javascript";
        titulo = "Hoje é dia de dar o seu melhor para virar um dev";
        break
    case 4:
        objetivo = "malhar e assistir o jogo do Mengão";
        titulo = "Hoje é dia de dar o seu melhor para virar um dev, mas não perca a diversão";
        break
    case 5:
        objetivo = "Estudar Inglês";
        titulo = "Hoje é dia de dar o seu melhor para virar um dev";
        break
    case 6:
        objetivo = "Comer hamburguer e estudar typescript";
        titulo = "Hoje é dia de dar o seu melhor para virar um dev, mas não perca a diversão";
        break
    case 7:
        objetivo = "Jogar vídeo-game";
        titulo = "Hoje é final de semana aproveitar seu tempo livre!"
        break
}
document.getElementById("dia").innerHTML = `Seu objetivo de hoje é: ${objetivo}`;
document.getElementById("titulo").innerHTML = titulo;