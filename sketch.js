let x, y;
let r = 100;
let g = 150;
let b = 255;


function setup() {
    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(255);
    x = lerp(x, mouseX, 0.1);
    y = lerp(y, mouseY, 0.1);
    fill(r, g, b,);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed() {
    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
}