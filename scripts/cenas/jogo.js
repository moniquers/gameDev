class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 25, 110, 135, 220, 270);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 25, 52, 52, 104, 104, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 220, 100, 75, 200, 150, 10);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed() {
        if (keyCode === 32) {
            personagem.pula();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        vida.draw();
   
        personagem.exibe();
        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.aplicaGravidade();
        const linhaAtual = this.mapa[this.indice % this.mapa.length];
        const inimigo = inimigos[linhaAtual.inimigo];

        inimigo.alteraVelocidade(linhaAtual.velocidade);
        inimigo.exibe();
        inimigo.move();

        if (inimigo.jaPassou()) {
            this.indice++;
            inimigo.aparece();
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            if(vida.vidas === 0){
                filter(GRAY);
                image(imagemGameOver, width / 2 - 200, height / 3)
                somDoJogo.stop();
                noLoop();
            }
        }

        if(keyIsDown(LEFT_ARROW))
            personagem.corre(LEFT_ARROW)
        if(keyIsDown(RIGHT_ARROW))
            personagem.corre(RIGHT_ARROW)

    }
}