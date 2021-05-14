var car, wall;

function setup() {
  createCanvas(800,400);
  wall = createSprite(200, 200, 50, 100);
  wall.shapeColor = "green"
  car = createSprite(400, 200, 80, 30);
  car.shapeColor = "red"
}

function draw() {
  background(0,0,0);  
  car.y = World.mouseY;
  car.x = World.mouseX;

if(car.x-wall.x < car.width/2+wall.width/2 && wall.x-car.x<car.width/2+wall.width/2 && car.y-wall.y < car.width/2+wall.width/2 && wall.y-car.y<car.width/2+wall.width/2 ){
  car.shapeColor = "yellow";
  wall.shapeColor = "yellow";
}
else {
  wall.shapeColor = "green"
  car.shapeColor = "red"
}

  //console.log(car.x-wall.x);

  drawSprites();
}