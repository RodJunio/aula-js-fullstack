function trocarImagem(filename, gamename) {
    document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
    document.querySelector('.imagem').setAttribute('data-game', gamename);
}