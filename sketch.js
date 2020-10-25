//Create variables here
var dog, happyDog, database, foodS, foodStock
var dog_Img,happyDog_Img;
function preload()
{
  //load images here
  
  dog_Img=loadImage("../images/dogImg.png");
  happyDog_Img=loadImage("../images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database();
  console.log(database);


  dog=createSprite(350,350,10,20);
  dog.addImage(dog_Img );
  dog.scale=0.2;

  var foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  


}


function draw() {  
  background(rgb(46, 139, 87));




  drawSprites();
  //add styles here

}



