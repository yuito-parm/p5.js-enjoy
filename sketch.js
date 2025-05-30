circles = [];


function setup() {
    createCanvas(400, 400);
    background(255);
}

function draw() {
    background(255);

    for (let c of circles) {
        fill(c.r, c.g, c.b,);
        noStroke();
        ellipse(c.x, c.y, 50, 50);
    }
}

function mousePressed() {
    let newCircle = {
        x: mouseX,
        y: mouseY,
        r: random(0, 256),
        g: random(0, 256),
        b: random(0, 256)
    }
    circles.push(newCircle);
}