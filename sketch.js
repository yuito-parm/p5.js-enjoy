function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);

    let count = 20;

    for (let i = 0; i < count; i++) {
        let x = map(i, 0, count -1, 50, width - 50);
        let y = height / 2 + sin(frameCount * 0.1 + i * 0.4) * 50;

        let r = 128 + sin(frameCount * 0.05 + i * 0.2) * 127;
        let g = 128 + sin(frameCount * 0.07 + i * 0.2 + PI / 3) * 127;
        let b = 128 + sin(frameCount * 0.09 + i * 0.2 + PI * 2 / 3) * 127;
    }


    fill(r, g, b);
    ellipse(x, y, 30, 30);  
}