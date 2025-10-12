let winWidth = 1000;
let winHeight = 500;
let xvalue = 100;
let yvalue = 100;
let interval = 100;
let timer = 0;
let dust_list = [];
let cleaned = 0;
function setup() {
  // Create the canvas (adjust width and height as needed)
  let canvas = createCanvas(winWidth, winHeight);
  noStroke();
  fill('brown');
}
function draw() {
    background(255);
    if (mouseIsPressed) {
        for (let dirt of dust_list) {
            dirt.move();
        }
    }
    for (let dirt of dust_list) {
        dirt.render();
        dirt.update();
    }
    timer++;
    if (timer > interval) {
        //xvalue = random(0, 1000);
        //yvalue = random(0, 500);
        //ellipse(xvalue, yvalue, 3, 3);
        newdirt = new Dirt();
        dust_list.push(newdirt);
        interval = random(1, 2);
        console.log(interval);
        timer = 0;
    }
}

class Dirt {
    constructor() {
        xvalue = random(0, 1000);
        yvalue = random(0, 500);
        this.position = createVector(xvalue, yvalue);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.generate = true;
    }

    render() {
        if (this.generate) {
            ellipse(this.position.x, this.position.y, 100, 100);
            //text(cleaned, this.position.x, this.position.y);
        }
    }

    move() {
        let xdistance = (mouseX - this.position.x);
        let ydistance = (mouseY - this.position.y);
        let distance = sqrt(sq(xdistance) + sq(ydistance));
        if (distance < 100) {
            //this.velocity.add(createVector((xdistance), (ydistance)));

            this.velocity = (createVector((xdistance), (ydistance)));
        }

    }

    update() {
        this.velocity.div(3, 3);
        this.position.add(this.velocity);
        if (mouseIsPressed && (abs(mouseX - this.position.x) < 10) && (abs(mouseY - this.position.y) < 10 && this.generate)) {
            this.generate = false;
            cleaned++;
        }
    }
}

/*
function prune() {
    for (let i = 0; i < dust_list.length; i++) {
        let curr_dirt = dust_list[i];
        if (curr_dirt.position.x > winWidth) {
            console.log("delete");
            delete curr_dirt;
        }
    }
}
*/

/*
function mouseDragged() {
    for (let dirt of dust_list) {
        dirt.move();
    }
}
*/
