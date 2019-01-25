var canvas = document.querySelector(".ninja-bees"); // link canvas tag to the document

// get the context object
var ctx = canvas.getContext("2d");

// --------------------- BEES

$(".btn-start").click(function() {
  $(".btn-start").toggle();
  $(".ninja-bees").removeClass("none");
});

//

var BeeImg = new Image();
BeeImg.src = "./images/Bee.png";

class Bee {
  constructor(BeeX, BeeY) {
    this.x = BeeX;
    this.y = BeeY;
    this.width = 50;
    this.height = 50;
    this.isTouched = false;
    this.isKicked = false;
    this.angle = 0;

    // this.strength = strength;
  }

  drawBee() {
    if (ninja.health > 0) {
      this.x -= 2.5;
      this.y += 0.5;
    }
    ctx.drawImage(BeeImg, this.x, this.y, this.width, this.height);
  }
}

//---- Bee Movment

//-------- OPtion 2 movement :

// var time = new Date();
// this.angle +=
//   ((2 * Math.PI) / 500000) * time.getSeconds() +
//   (Math.PI / 15000000) * time.getMilliseconds();
// ctx.save();
// ctx.rotate(this.angle);

// ctx.drawImage(BeeImg, (this.x -= 2), this.y, 50, 50);

// ctx.restore();

/*
    if (ninja.isTouched === true) {
      ninja.health -= 1;
    }

    if (ninja.health <= 0) {
      ninjaImg = ninjaDeathImg;
      // timeset + game over message + button restart
    }



*/

//---------------- NINJA characters --------------

var ninjaImg = new Image();
ninjaImg.src = "./images/Ninja.png";
ninjaImg.onload = function() {
  drawNinja();
};

var ninjaLeftImg = new Image();
ninjaLeftImg.src = "./images/Ninja-kick-left.png";

var ninjaJumpImg = new Image();
ninjaJumpImg.src = "./images/Ninja-JUMP.png";

var backToPosition = new Image();
backToPosition.src = "./images/Ninja.png";

var ninjaRightImg = new Image();
ninjaRightImg.src = "./images/Ninja-kick-right.png";

var ninjaDownImg = new Image();
ninjaDownImg.src = "./images/Ninja-Down.png";

var ninjaDeathImg = new Image();
ninjaDeathImg.src = "./images/Ninja-Death.png";

// ---------  AUDIO
// var ninjaTouchedSound = new Audio("./audio/AHOU.mp3");
// var beeTouchedSound = new Audio("./audio/Bzzz.mp3");
// var beeTouchedSound2 = new Audio("./audio/blop.mp3");
// var kickLeftSound = new Audio("./audio/Coup1.mp3");
// var kickRightSound = new Audio("./audio/kick.mp3");
// var ninjaDeathSound = new Audio("./audio/deathsound.mp3");
// var jumpSound = new Audio("./audio/JUMPsound.mp3");
// var ninjaDownSound = new Audio("./audio/Downffffiit.mp3");
//var ambianceSound = new Audio("../audio/ambianceSound.mp3");

// ambianceSound.play();
// beeTouchedSound2.play();
// ninjaDownSound.play();
// jumpSound.play();
// ambianceSound.play();
// kickLeftSound.play();
// ninjaDeathSound.play();
// kickRightSound.play();

// ---------------------------

var ninja = {
  x: 100,
  y: 400,
  width: 150,
  height: 150,
  isTouched: false,
  health: 3,
  kills: 0
};

function drawNinja() {
  ctx.drawImage(ninjaImg, ninja.x, ninja.y, ninja.width, ninja.height);
  // ctx.strokeRect(ninja.x, ninja.y, ninja.width, ninja.height);
}

var point = {
  x: canvas.width,
  y: 0
};

var allBees = [
  new Bee(point.x + 80, point.y + 930),

  new Bee(point.x + 110, point.y - 310),
  new Bee(point.x + 100, point.y + 230),
  new Bee(point.x + 100, point.y - 240),
  new Bee(point.x + 150, point.y - 310),
  new Bee(point.x - 100, point.y + 240),
  new Bee(point.x + 50, point.y - 240),
  new Bee(point.x - 10, point.y + 280),
  new Bee(point.x + 150, point.y + 240),
  new Bee(point.x + 80, point.y + 230),
  new Bee(point.x + 100, point.y - 230),
  new Bee(point.x + 80, point.y + 230),
  new Bee(point.x + 100, point.y - 230),
  new Bee(point.x + 10, point.y + 310)
];
drawingLoop();

//---------------- MOVEMENT NINJA WITH KEY ----------------------

//---------------------------

document.onkeydown = function(event) {
  /// ---- exit the function without moving if Ninja is crashed ;
  if (ninja.isCrashed) {
    return;
  }

  switch (event.keyCode) {
    case 37: // LEFT ARROW
      event.preventDefault();
      // Change to kick left image
      ninjaImg = ninjaLeftImg;
      ninja.x -= 100;

      setTimeout(suiteLeftTraitement1, 100);
      function suiteLeftTraitement1() {
        ninja.x -= 15;
      }

      // Time set before ..
      setTimeout(suiteTraitement, 275);

      // .. Back to normal position image
      function suiteTraitement() {
        ninjaImg = backToPosition;
      }

      break;

    case 38: // Up arrow
      event.preventDefault();

      ninjaImg = ninjaJumpImg;
      ninja.y -= 70;

      setTimeout(suiteUPTraitement1, 100);
      function suiteUPTraitement1() {
        ninja.y -= 40;
      }

      setTimeout(suiteUPTraitement2, 150);
      function suiteUPTraitement2() {
        ninja.y -= 20;
      }
      setTimeout(suiteUPTraitement3, 175);
      function suiteUPTraitement3() {
        ninja.y -= 10;
      }

      setTimeout(suiteTraitement, 600);

      function suiteTraitement() {
        ninjaImg = backToPosition;
      }
      setTimeout(suiteBackPosition, 600);

      function suiteBackPosition() {
        ninja.y += 140;
      }

      break;

    case 39: // Right arrow
      event.preventDefault();

      ninjaImg = ninjaRightImg;
      ninja.x += 100;

      setTimeout(suiteRightTraitement1, 100);
      function suiteRightTraitement1() {
        ninja.x += 15;
      }

      setTimeout(suiteTraitement, 275);

      function suiteTraitement() {
        ninjaImg = backToPosition;
      }

      break;

    case 40: // Down arrow
      event.preventDefault();

      ninjaImg = ninjaDownImg;
      // ninja.y += 20;

      setTimeout(suiteDownTraitement1, 50);
      function suiteDownTraitement1() {
        ninja.y += 1;
      }

      setTimeout(suiteTraitement, 400);

      function suiteTraitement() {
        ninjaImg = backToPosition;
      }

      break;
  }
};
drawingLoop();

function drawingLoop() {
  ctx.clearRect(0, 0, 1280, 800); //-- to erase the whole canvas before drawing (x,y, width, height)

  drawNinja();

  allBees.forEach(function(oneBee) {
    oneBee.drawBee();
  });

  drawScore();
  checkCollision();

  requestAnimationFrame(function() {
    drawingLoop();
  });
}

//------------

function // ----------------- COLLISION (same code for all rectangle)
HitCollision(a, b) {
  return (
    a.y + a.height >= b.y &&
    a.y <= b.y + b.height &&
    a.x + a.width >= b.x &&
    a.x <= b.x + b.width
  );
}
// test : rectangleCollision(celine,pipe1) : is false, false, but when it touch become true

function checkCollision() {
  allBees.forEach(function(oneBee) {
    if (HitCollision(ninja, oneBee)) {
      if (ninjaImg === ninjaLeftImg || ninjaImg === ninjaRightImg) {
        ninja.isTouched = false;
        oneBee.isKicked = true;
        ninja.kills += 1;
      } else if (ninjaImg !== ninjaDownImg) {
        ninja.isTouched = true;
        ninja.health -= 1;
        oneBee.isTouched = true;

        if (ninja.health <= 0) {
          ninjaImg = ninjaDeathImg;

          // timeset + game over message + button restart
        }
      }

      oneBee.y -= oneBee.height * 2; //or + ninja.height;
    }
  });

  allBees = allBees.filter(function(oneBee) {
    return !oneBee.isKicked;
  });
}

//-----------
$(".btn-start").click(function() {
  $(".start").addClass("hidden");
});

// ------------ SCORE

function drawScore() {
  // Drawing TEXT ----------
  ctx.fillStyle = "white";

  ctx.font = "40px arial";
  ctx.textBaseline = "middle";
  ctx.fillText("Score : " + ninja.kills, 800, 40);
}
