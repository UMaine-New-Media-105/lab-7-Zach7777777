 let colorSelector = ["tomato", "orangered","coral","palevioletred","darkslategrey"]
 let offset = 0 
 let offset2 = 0
function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  
//   addCircle(30,30,random(colorSelector))
  
  
  
  for(let i = 0; i < 14; i++){
    offset = offset + 28
    addCircle(-10+offset,-10+offset,random(colorSelector))
  }
  for(let i = 0;i < 14; i++){
    offset2 = offset2 + 28
    addCircle(410-offset2, -10 +offset2,random(colorSelector))
  }
  
  
}

function addCircle(x,y,color){
  push();
  noStroke();
  fill(color)
  ellipse(x,y,40)
  pop();
}
