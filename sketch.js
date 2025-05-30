function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    let size = 50 + sin(frameCount * 0.1) * 20;

    fill(150, 200, 255);
    noStroke();
    ellipse(width / 2, height / 2, size, size);  
}