function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    let r = 128 + sin(frameCount * 0.05) * 127;
    let g = 128 + sin(frameCount * 0.03 + PI / 2) * 127;
    let b = 128 + sin(frameCount * 0.04 + PI) * 127;

    fill(r, g, b);
    noStroke();
    ellipse(width / 2, height / 2, 100, 100);  
}