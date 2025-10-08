let x = 300
let y = 300
let r = 255
let g = 255
let b = 255

function setup() {
    createCanvas(600, 600)
}

function draw() {
    fill(r, g, b)
    background(0)
    rectMode(CENTER)
    square(x, y, 200)

    if (mouseIsPressed && (x - 100) < mouseX && mouseX < (x + 100) && (y - 100) < mouseY && mouseY < (y + 100)) { 
        r = 255
        g = 150
        b = 255
    }

}

function mouseDragged() {
    if ((x - 100) < mouseX && mouseX < (x + 100) && (y - 100) < mouseY && mouseY < (y + 100) ) {
        x = mouseX
        y = mouseY
    }
}

function mouseReleased() {
    r = 255
    g = 255
    b = 255
}