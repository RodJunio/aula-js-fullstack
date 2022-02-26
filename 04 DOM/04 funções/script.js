function alterar(titulo) {
    document.getElementById("titulo").innerHTML = "Trocou o título";
    document.getElementById("campo").value = "titulo";
}

function somar(x, y) {
    let total = x + y;

   return total;
}

let resultado = somar(10, 15);
console.log(resultado);