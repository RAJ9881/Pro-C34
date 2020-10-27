//Create variables here
var dog, happyDog, database, foodS, foodStock,food,milk;
var dog_Img,happyDog_Img,milk_Img;
function preload()
{
  //load images here
  
  dog_Img=loadImage("../images/dogImg.png");
  happyDog_Img=loadImage("../images/dogImg1.png");
//milk_Img=loadImage("../images/milk.png")
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database();
  console.log(database);


  dog=createSprite(350,350,10,20);
  dog.addImage(dog_Img );
  dog.scale=0.2;

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
 
  

}


function draw() {  
  background(rgb(46, 139, 87));
  readGameState = database.ref('gameState');
  readGameState.on("value", function (data) {
      gamestate = data.val();
  })

 displayFood();

  if (keyWentDown(UP_ARROW)) {
     writeStock(foodS);
      dog.addImage(happyDog_Img);
  }
  

  drawSprites();
  //add styles here
  textSize(20);
  fill("yellow02.");
  text("Press the up arrow to feed the dog!", 280, 120);
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if (x < 0) {
      x = 0;
  } else {
      x = x - 1;
  }
  database.ref('/').update({
      food: x
  })
}


function displayFood() {
  
  var x = 80;
  var y = 100;
  if (foodS !== 0) {
      for (var i = 0; i < foodS; i++) {
          if (i % 10 === 0) {
              x = 80;
              y = y + 50;
          }
        
          x = x + 30;
      }
  }
}

