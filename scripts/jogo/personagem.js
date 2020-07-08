class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.alturaDoPulo = -30;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.totalPulos = 0;
    this.invencivel = false;
  }
  
  pula(){
    if(this.totalPulos < 2){
      this.velocidadeDoPulo = -30;
      somDoPulo.play();
      this.totalPulos++;
    }
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.totalPulos = 0;
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }

  estaColidindo(inimigo){
    if(this.invencivel)
      return false;
    const ajusteHitBoxStart = .3;
    const ajusteHitBoxLarguraEnd = .5;
    const ajusteHitBoxAlturaEnd = .6;

    return collideRectRect(
      this.x + (this.largura * ajusteHitBoxStart),
      this.y + (this.largura * ajusteHitBoxStart),
      this.largura * ajusteHitBoxLarguraEnd,
      this.altura * ajusteHitBoxAlturaEnd,
      inimigo.x + (inimigo.largura * ajusteHitBoxStart),
      inimigo.y + (inimigo.largura * ajusteHitBoxStart),
      inimigo.largura * ajusteHitBoxLarguraEnd,
      inimigo.altura * ajusteHitBoxAlturaEnd,
    );
  }

  corre(direcao){
    if(direcao === LEFT_ARROW)
      this.x -= 15;
    if(direcao === RIGHT_ARROW)

    
      this.x += 10;
  }
}
