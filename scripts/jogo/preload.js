function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver= loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    somDoPulo = loadSound('sons/somPulo.mp3');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    fontTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    imagemVida = loadImage('imagens/assets/coracao.png');
    fita = loadJSON('fita/fita.json');
  }