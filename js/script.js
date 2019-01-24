var canvas = document.querySelector(".ninja-bees"); // link canvas tag to the document

// get the context object
var ctx = canvas.getContext("2d");

// --------------------- BEES

var BeeImg = new Image();
BeeImg.src = "./images/Bee.png";

class Bee {
  constructor(BeeX, BeeY, BeeWidth, BeeHeight) {
    this.x = BeeX;
    this.y = BeeY;
    this.width = BeeWidth;
    this.height = BeeHeight;
    this.isTouched = false;
    this.angle = 0;
    this.health = 3;

    // this.strength = strength;
  }
}

function drawBee() {
  if (!ninja.isTouched) {
    this.x -= 3;
  }

  if (ninja.isTouched === true) {
    health -= 1;
  }

  if (health <= 0) {
    ninjaImg = ninjaDeathImg;
    // timeset + game over message + button restart
  }
}

//---- Bee Movment

//-------- OPtion 2 movement :
/* 

var time = new Date();
this.angle +=
  ((2 * Math.PI) / 500000) * time.getSeconds() +
  (Math.PI / 15000000) * time.getMilliseconds();
ctx.save();
ctx.rotate(this.angle);

ctx.drawImage(BeeImg, (this.x -= 2), this.y, 50, 50);

ctx.restore();








*/

//------------- NINJA characters

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

// class ninja {
//   constructor(x, y,  BeeY, width, eight) {
//     this.x = BeeX;
//     this.y = BeeY;
//     this.width = BeeWidth;
//     this.height = BeeHeight;
//     this.isTouched = false;
//     this.angle = 0;
//     health = 3;

//   }
// }

var ninja = {
  x: 600,
  y: 380,
  width: 150,
  height: 150,
  isTouched: false
};

//-- if ninja object crashed stop the game
function drawNinja() {
  ctx.drawImage(ninjaImg, ninja.x, ninja.y, ninja.width, ninja.height);
}

var allBees = [
  new Bee(750, 240, 200, 200),
  new Bee(900, 230, 200, 200),
  new Bee(910, 310, 200, 200),
  new Bee(620, 280, 200, 200),
  new Bee(450, -240, 200, 200),
  new Bee(80, -230, 200, 200),
  new Bee(110, -310, 200, 200),
  new Bee(100, -240, 200, 200),
  new Bee(900, -230, 200, 200),
  new Bee(150, -310, 200, 200),
  new Bee(200, 240, 200, 200),
  new Bee(100, 230, 200, 200),
  new Bee(300, 310, 200, 200)
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
        ninja.y += 5;
      }

      setTimeout(suiteTraitement, 400);

      function suiteTraitement() {
        ninjaImg = backToPosition;
      }

      break;
  }
};

function drawingLoop() {
  ctx.clearRect(0, 0, 1200, 550); //-- to erase the whole canvas before drawing (x,y, width, height)

  drawNinja();

  allBees.forEach(function(oneBee) {
    oneBee.drawBee();
    console.log(oneBee);
  });

  checkCrashes();

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
    if (HitCollision(Ninja, oneBee)) {
      Ninja.isTouched = true;
      oneBee.isTouched = true;

      if (
        HitCollision(Ninja, oneBee) &&
        (ninjaImg === ninjaLeftImg || ninjaImg === ninjaRightImg)
      ) {
        Ninja.isTouched === false;

        // function togglebee () {BeeImg}; +    blop.play
        // score +=1
      }

      if (HitCollision(Ninja, oneBee) && ninjaImg === ninjaDownImg) {
        Ninja.isTouched === false;
      } else {
        // aoutch.play
        health -= 1;
      }
    }
  });
}

//-----------
$(".btn-start").click(function() {
  $(".start").addClass("hidden");
});
