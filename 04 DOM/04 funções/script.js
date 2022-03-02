function alterar(titulo, campo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = campo;
}
//usando parametros como variavel:

alterar("Olá", "Tudo bem?");