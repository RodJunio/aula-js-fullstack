function trocarImagem(filename, gamename) {
    document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
    document.querySelector('.imagem').setAttribute('data-game', gamename);
    
    let texto = "Pro Evolution Soccer, ou PES, é o jogo de futebol de maior sucesso da Konami, mas não foi o primeiro. A empresa japonesa já lançou mais de 30 jogos de futebol ao longo da sua história. E a história é longa. Kagemasa Kozuki, o fundador da Konami, geria um negócio de locação e manutenção de máquinas jukebox e fliperamas em Toyonaka, em Osaka. Mas em 21 de março de 1969, ele decidiu abrir a própria fábrica de máquinas de fliperamas. Produzir jogos, porém, demoraria mais alguns anos. Em 1973 a empresa foi incorporada como Konami Industry Co., Ltd.";
    document.getElementById('text').innerHTML = texto;

    let text2 = "Em 1999, o Counter-Strike foi lançado como uma modificação do jogo Half-Life. À medida que o Counter-Strike progrediu desde uma versão Beta até a um jogo completo lançado comercialmente, a jogabilidade clássica foi melhorada para algo que definiu os jogos de tiros competitivos e acabou por criar uma comunidade de jogadores dedicados que têm vindo a seguir o jogo durante mais de uma década.";
    document.getElementById('text').innerHTML = text2;
}