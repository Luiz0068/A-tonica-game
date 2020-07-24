var xAvatar = 225
var yAvatar = 600
let xTotal = 450
let xMetade = 225
let menuTela = true
let fase1Tela = false
let instTela = false
let creditosTela = false
var xo1 = 0
var yo1 = 0
var xo2 = 0
var yo2 = 0
var xo3 = 0
var yo3 = 0
var xt = 0
var yt = 0
var tiro = false
var vidas = 7
var pontos = 0
var raioQ = 20
var raioB = 20
var selection = 480
let indice1 = 0
let indice2 = 0
let indice3 = 0
let bg
let avatar
let menuImage
let menuImage2
let backsound_load
let projetil

proparoxitonas = ["ÂNCORA", "ANÊMONA", "ÂNGULO", "ÂNIMO",
  "ANÔNIMO", "ANORÉXICO", "ANTÍDOTO", "ARQUÉTIPO", "ARQUIPÉLAGO",
  "ARTÍSTICO","ÁRVORE","ÁTOMO","BRÓCOLIS","CÁLICE","DÍVIDA","ELÉTRICO","FÍSICO","GRÁFICO","ÍNDICE","MÁGICA"]
oxitonas = ["CAJU", "TATU", "PAJÉ", "PATÊ", "SABIÁ", "ALIÁS", "CAFÉ", "PORTUGUÊS", "JILÓ", "AMÉM","AÇAÍ","AVÓ","VOCÊ","ANEL","BAMBU","ANZOL","JOVEM","RECÉM","REFÉM","BAMBU"]
paroxitonas = ["ACÓRDÃO", "BÊNÇÃO", "ÍMÃ", "ÓRFÃ", "ÓRFÃO", "ÓRGÃOS", "SÓTÃO", "AMÁVEL", "BÔNUS", "CADÁVER", "GRÁTIS", "JÚRI", "TÁXI","ÍRIS","LÁPIS","TÊNIS","VÍRUS","ÁLBUM","JOIA","GELEIA"]


    function setup() {
      createCanvas(450, 650);
      backsound.play()
      backsound.setVolume(0.1)
    }

    function preload() {
      avatar = loadImage('images/avatar.gif')
      bg = loadImage('images/bg.jpg')
      menuImage = loadImage('images/menu.jpg')
      menuImage2 = loadImage('images/menu2.jpg')
      backsound = loadSound('sounds/backsound.mp3');
      projetil = loadImage('images/inimigo1.png')

    }

    function draw() {
      imageMode(CORNER)
      background(menuImage2);
      if (menuTela == true) {
        menu()
      }
      if (fase1Tela == true) {
        fase1()
      }
      if (instTela == true) {
        inst()
      }
      if (creditosTela == true) {
        creditos()
      }
      if (vidas <= 0) {
        gameover()
      }
    }

    function menu() {
      imageMode(CORNER)
      background(menuImage)
      rectMode(CENTER)
      stroke(0, 0, 0, 0)
      stroke('blue')
      noFill()
      rect(xMetade, selection, 200, 40, 10)
      textAlign(CENTER)
      fill('white')
      textSize(14)
      text("Mexa no menu com 'w' e 's'", xMetade, 645)
    }

    function fase1() {
      //background
      imageMode(CORNER)
      background(bg)
      //avatar
      imageMode(CENTER)
      image(avatar, xAvatar, yAvatar, 80, 80)
      //status
      fill('blue')
      rectMode(CORNER)
      rect(0, 0, xTotal, 30)
      textSize(15)
      textAlign(LEFT)
      fill('yellow')
      text('Vidas: ' + vidas, 10, 20)
      text('Pontos: ' + pontos, 360, 20)
      //palavras
      noStroke()
      fill('white')
      textStyle(BOLD)
      textAlign(CENTER)
      text(proparoxitonas[indice1], xo1, yo1)
      text(oxitonas[indice2], xo2, yo2)
      text(paroxitonas[indice3], xo3, yo3)
      yo1 += 1.5
      yo2 += 1.5
      yo3 += 1.5
      if (yo1 > 640) {
        xo1 = random(80, 370)
        yo1 = random(30, -500)
        indice1 = parseInt(random(0, 9))
      }
      if (yo2 > 640) {
        xo2 = random(80, 370)
        yo2 = random(30, -500)
        indice2 = parseInt(random(0, 9))
      }
      if (yo3 > 640) {
        xo3 = random(80, 370)
        yo3 = random(30, -500)
        indice3 = parseInt(random(0, 9))
      }
      if (keyIsDown(RIGHT_ARROW)) {
        xAvatar += 4
      }
      if (keyIsDown(LEFT_ARROW)) {
        xAvatar -= 4
      }

      if (keyIsDown(CONTROL) && tiro == false) {
        xt = xAvatar
        yt = yAvatar
        tiro = true
      }
      if (tiro) {
        image(projetil, xt, yt, 14, 23)
        yt = yt - 10
      }
      if (yt < 0) {
        tiro = false
      }
      if (dist(xo2, yo2, xt, yt) < 20) {
        pontos = pontos + 1
        xt = 0
        yt = 0
        xo2 = random(80, 370)
        yo2 = random(30, -500)
        indice2 = parseInt(random(0, 19))

      }
      if (dist(xo1, yo1, xt, yt) < 20) {
        vidas -= 1
        xt = 0
        yt = 0
        xo1 = random(80, 370)
        yo1 = random(30, -500)
        indice1 = parseInt(random(0, 19))

      }
      if (dist(xo3, yo3, xt, yt) < 20) {
        vidas -= 1
        xt = 0
        yt = 0
        xo3 = random(80, 370)
        yo3 = random(30, -500)
        indice3 = parseInt(random(0, 19))

      }
      if (dist(xAvatar, yAvatar, xo1, yo1) < 30) {
        vidas -= 1
        xAvatar = xMetade
        xo1 = random(80, 370)
        yo1 = random(30, -500)
        indice1 = parseInt(random(0, 19))
      }
      if (dist(xAvatar, yAvatar, xo2, yo2) < 30) {
        pontos = pontos + 1
        xo2 = random(80, 370)
        yo2 = random(30, -500)
        indice2 = parseInt(random(0, 19))
      }
      if (dist(xAvatar, yAvatar, xo3, yo3) < 30) {
        vidas = vidas - 1
        xAvatar = xMetade
        xo3 = random(80, 370)
        yo3 = random(30, -500)
        indice3 = parseInt(random(0, 19))
      }
      if (dist(xo1, yo1, xo2, yo2) < 50) {
        xo2 = random(50, 430)
        yo2 = random(30, -500)
      }
      if (dist(xo1, yo1, xo3, yo3) < 50) {
        xo3 = random(50, 430)
        yo3 = random(30, -500)
      }
      if (dist(xo2, yo2, xo3, yo3) < 50) {
        xo3 = random(50, 430)
        yo3 = random(30, -500)
      }
      if (yo2 >= 638) {
        vidas = vidas - 1
      }
      if (xAvatar > 420) {
        xAvatar = 420
      }
      if (xAvatar < 30) {
        xAvatar = 30
      }
    }



    function inst() {
      imageMode(CORNER)
      background(menuImage2)
      fill('white')
      noStroke()
      textStyle(BOLD)
      textSize(32)
      text("Instruções", xMetade, 100)
      textSize(20)
      textStyle(NORMAL)
      text("3° Ano do Fundamental\nPortuguês: EF03LP06", xMetade, 150)
      textSize(14)
      textSize(20)
      textAlign(CENTER)
      text("\nResumo: No jogo você controlará um \n personagem que tenta acertar as palavras \n oxítonas com seu projétil, mas tendo \n que desviar das palavras paroxítonas e \n proparoxítonas.\n\nPara controlá-lo use as setas \n esquerda e direita e para atirar use\nCTRL.", xMetade, 200)
      textSize(14)
      text("Pressione 'v' para voltar", xMetade, 610)
    }

    function creditos() {
      imageMode(CORNER)
      background(menuImage2)
      fill('white')
      noStroke()
      textSize(32)
      textAlign(CENTER)
      textStyle(BOLD)
      text("Créditos", xMetade, 100)
      textSize(14)
      textStyle(NORMAL)
      text("Pressione 'v' para voltar", xMetade, 610)
      textSize(20)
      text("Programador:\nLuiz Henrique Cavalcante da Silva", xMetade, 225)
      text("Educador:\nEdilma Santos Teixeira", xMetade, 350)
    }


    function gameover() {
      imageMode(CORNER)
      background(menuImage2)
      fill('white')
      textSize(27)
      textAlign(CENTER)
      text("GAME OVER", xMetade, 180)
      textSize(22)
      text("SCORE: " + pontos, xMetade, 210)
      textSize(14)
      text("Pressione 'r' para voltar", xMetade, 610)
    }

    function keyPressed() {
      if (key == "w" && selection > 480) {
        selection -= 50
      }
      if (key == "s" && selection < 550) {
        selection += 50
      }
      if (key == "Enter" && menuTela == true) {
        if (selection == 480) {
          menuTela = false
          fase1Tela = true
          instTela = false
          creditosTela = false
        }
        if (selection == 530) {
          menuTela = false
          fase1Tela = false
          instTela = true
          creditosTela = false
        }
        if (selection == 580) {
          menuTela = false
          fase1Tela = false
          instTela = false
          creditosTela = true
        }
      }
      if (vidas <= 0 && key === 'r') {
        menuTela = true
        fase1Tela = false
        instTela = false
        creditosTela = false
        vidas = 3
        pontos = 0
        nivel = 0
        barreiradenivel = 5
        xo3 = random(50, 430)
        yo3 = random(30, -500)
        xo2 = random(50, 430)
        yo2 = random(30, -500)
        xo1 = random(50, 430)
        yo1 = random(30, -500)
      }
      if (key === 'v') {
        if (instTela == true) {
          menuTela = true
          fase1Tela = false
          instTela = false
          creditosTela = false
          selection = 480
        }
        if (creditosTela == true) {
          menuTela = true
          fase1Tela = false
          instTela = false
          creditosTela = false
          selection = 480
        }
      }
    }