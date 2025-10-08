let shapeX = 300
let shapeY = 300
let g, b;

function setup() {
    frameRate(30);
    createCanvas(600, 600);
    noStroke();

    g = random(10, 255);
    b = random(255);
}

function draw() {
    background(0);
    fill(0, g, b);

    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
       shapeY-= 5;
        } else if (keyCode === DOWN_ARROW) {
       shapeY+= 5;
        } else if (keyCode === LEFT_ARROW) {
       shapeX-= 5;
        } else if (keyCode === RIGHT_ARROW) {
       shapeX+= 5;
        }
    }

    circle(shapeX, shapeY, 500)
    
}
