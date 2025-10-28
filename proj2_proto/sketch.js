let winWidth = 600;
let winHeight = 600;
let entry = -1;
let started = false;
const start = document.getElementById('startButton');
const textbox = document.getElementById('textbox');
const entries = [["9/12", "7:30 PM", "Not busy at all"],
                ["9/17", "6:00 PM", "pretty chill"],
                ["9/19", "7:30 PM", "pretty chill"],
                ["9/24", "1:30 PM", "kinda busy, but not too bad"],
                ["10/3", "7:30 PM", "nobody came :("],
                ["10/7", "6:00 PM", "it wasn't too busy"],
                ["10/8", "1:30 PM", "Pretty busy"],
                ["10/14", "6:00 PM", "good"],
                ["10/17", "7:30 PM", "not busy at all"],
                ["10/20", "12:00 PM", "not busy"],
                ["10/21", "6:00 PM", "not too busy"],
                ["10/24", "7:30 PM", "Chill shift"],
                ["10/29", "1:30 PM", "not one person came"],
                ["11/5", "6:00 PM", "nobody came"],
                ["11/7", "7:30 PM", "nobody came"],
                ["11/11", "6:00 PM", "nobody came"],
                ["11/12", "6:00 PM", "not too busy"],
                ["11/14", "7:30 PM", "nobody came"],
                ["11/18", "6:00 PM", "chill"],
                ["11/19", "6:00 PM", "surprisingly not that busy for a Tuesday night"],
                ["11/25", "6:00 PM", "not busy"],
                ["11/26", "6:00 PM", "not busy"],
                ["12/2", "6:00 PM", "not busy"],
                ["12/3", "1:30 PM", "not busy"],
                ["12/3", "6:00 PM", "not busy"],
                ["12/9", "6:00 PM", "not exceedingly busy"],
                ["12/10", "6:00 PM", "shockingly not busy at all"],
                ["1/23", "12:00 PM", "not busy"],
                ["1/26", "3:00 PM", "kinda busy"],
                ["1/30", "12:00 PM", "Nobody came :("],
                ["2/2", "3:00 PM", "not busy"],
                ["2/13", "12:00 PM", "not busy"],
                ["2/13", "6:00 PM", "not busy"],
                ["2/16", "3:00 PM", "not busy"],
                ["2/27", "12:00 PM", "not busy"],
                ["3/2", "3:00 PM", "not busy"],
                ["3/4", "12:00 PM", "very chill"],
                ["3/6", "12:00 PM", "very chill"],
                ["3/9", "3:00 PM", "nobody came :("],
                ["3/27", "12:00 PM", "very not busy"],
                ["3/30", "3:00 PM", "actually very busy"],
                ["4/3", "12:00 PM", "very not busy"],
                ["4/3", "7:30 PM", "very not busy"],
                ["4/6", "3:00 PM", "moderately busy"],
                ["4/10", "12:00 PM", "very chill"],
                ["4/17", "12:00 PM", "very not busy"],
                ["4/20", "3:00 PM", "moderately busy"],
                ["4/24", "12:00 PM", "not busy"]]

start.onclick = function () {
    if (!started) {
        start.style.display = "none"
        started = true;
        addDay();
    }
}

document.addEventListener("keydown", function(event) {
    if ((event.key == ' ' || event.code == 'Space') && started) {
        addDay();
    }
  })


function addDay() {
    entry++;
    entry %= entries.length;
    let entryData = entries[entry];
    textbox.innerHTML = entryData[0] + "<br>" + entryData[1] + "<br>" + entryData[2]
    changeDrawing()
}

function changeDrawing() {
    switch (entry) {
        case 0:
            makeRoom();
            break;
        case 1:
            makeRoom();
        default:
            makeRoom();
    }
}


function setup () {
    let canvas = createCanvas(winWidth, winHeight);
    stroke(0);
    makeJCC();
}

function draw () {

    /*
    fill(255)
    rect(0, 0, 50, 50)
    fill(0)
    noStroke()
    text("x: " + mouseX, 0, 10)
    text("y: " + mouseY, 0, 25)
    */
}



function makeRoom() {
    stroke(0);
    fill(255);
    background(255);


    line(430, 100, 430, 500)
    line(430, 100, 500, 0)
    line(430, 500, 500, 600)
    line(0, 100, 430, 100)
    line(0, 500, 430, 500)

    //table

    makeWhiteboard();
    makeTable();
    makeStool(350, 440);
    makeStool(40, 440);

    makeMe();

    circle(300, 300, 3)

}

function makeMe() {
    beginShape()
    vertex(random(200, 300), random(200, 300));
    vertex(random(200, 300), random(200, 300));
    vertex(random(200, 300), random(200, 300));
    endShape(CLOSE);
}

function makeTable() {
    quad(150, 375, 100, 400, 290, 400, 293, 375)
    quad(99, 400, 290, 400, 290, 415, 99, 415)
    quad(293, 375, 290, 400, 290, 415, 293, 385)

    quad(195, 415, 205, 415, 205, 525, 195, 525)
}

function makeStool(x, y) {
    quad(x - 5, y, x + 5, y, x + 5, y + 85, x - 5, y + 85)
    arc(x, y + 10, 100, 25, 0, PI);
    ellipse(x, y, 100, 25)
}

function makeWhiteboard() {
    quad(400, 170, 0, 170, 0, 360, 400, 360)
}

function makeWindow() {
    line(450, 110, 450, 490)
    line(450, 110, 535, 0)
    line(450, 490, 535, 600)
    quad(450, 110, 450, 490, 470, 490, 470, 110)
    quad(450, 490, 470, 490, 565, 600, 535, 600)
    quad(450, 110, 470, 110, 565, 0, 535, 0)
}

function makeJCC() {
    background(255);
    //verticals
    line(250, 100, 250, 130)
    line(250, 421, 250, 450)
    line(245, 134, 245, 421)

    line(500, 200, 500, 475);
    line(325, 130, 325, 457.5)
    line(400, 160, 400, 465)

    line(320, 156, 320, 430);

    line(495, 475, 495, 600);


    //roof edge
    line(250, 100, 325, 130);
    line(400, 160, 500, 200);

    line(400, 160, 325, 170);
    line(250, 100, 0, 150)


    line(250, 130, 320, 156);
    line(250, 130, 0, 174)


    line(250, 421, 320, 430);
    line(250, 421, 0, 440)


    line(250, 450, 325, 457.5);
    line(400, 465, 500, 475);
    line(250, 450, 0, 465);

    line(404, 185, 497, 220.5)
    line(404, 185, 404, 443)
    line(404, 443, 497, 455)
    line(497, 220.5, 497, 455)
    line(493, 224, 493, 454)
    line(493, 224, 404, 190.5)

    line(452, 209.5, 452, 449)
    line(428, 200, 428, 445)
    line(475, 218, 475, 452)


    line(246, 134, 315, 159);
    line(315, 159, 315, 429);

    line(246, 134, 0, 177);

    //line(283, 100, 283, 500)

    //window horiz
    line(245, 277.5, 315, 294)
    line(245, 205.5, 315, 226.5)
    line(245, 349, 315, 361.5)

    //window horiz far right
    line(404, 316.5, 493, 339)
    line(404, 253, 493, 281.5)
    line(404, 379.5, 493, 396.5)

    line(0, 308.5, 245, 277.5)
    line(0, 242.5, 245, 205.5)
    line(0, 374, 245, 349)

    line(404, 468, 404, 600)
    line(404, 468, 500, 476)
    line(404, 468, 360, 466)
    line(360, 466, 360, 600)
    line(360, 466, 400, 465)

    line(325, 457.5, 285, 458.5)
    line(360, 466, 235, 454)

    line(235, 454, 235, 600)

    line(137, 457.5, 137, 600)
    line(141, 460, 141, 600)
    line(141, 460, 235, 454)


    //line(450, 472, 450, 600)
    //line(428, 470, 428, 600)
    //line(472, 474, 472, 600)
}