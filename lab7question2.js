let offsetX = 0
let offsetY = 0
function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  
  for(let x = 0; x < 5; x++){
    offsetX = offsetX + 80 
    for(let y = 0; y < 5; y++){
    offsetY = offsetY + 80 
    addCircle(-40,-40+offsetY,"tomato")
  }
    addCircle(-40+offsetX,40,"tomato")
    
  }
  
  
}

function addCircle(x,y,color){
  push()
  fill(color)
  ellipse(x,y,80)
  pop()
}
