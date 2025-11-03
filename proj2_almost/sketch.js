//sketch.js
//Brendan Calalang
//11/1/25
//JavaScript file for name.tbd

let winWidth = 600;
let winHeight = 600;
let entry = -1;
let started = false;
let eyex = 310;
let eyey = 300;
let counter = 0;
const start = document.getElementById('startButton');
const textbox = document.getElementById('textbox');
const entries = [{ppl: [1], data: ["September 12", "7:30 PM", "Not busy at all"]},
                {ppl: [2, 3], data: ["September 17", "6:00 PM", "pretty chill"]},
                {ppl: [6], data: ["September 19", "7:30 PM", "pretty chill"]},
                {ppl: [1, 2, 3, 5], data: ["September 24", "1:30 PM", "kinda busy, but not too bad"]},
                {ppl: [], data: ["October 3", "7:30 PM", "nobody came :("]},
                {ppl: [1], data: ["October 7", "6:00 PM", "it wasn't too busy"]},
                {ppl: [2, 3, 6], data: ["October 8", "1:30 PM", "Pretty busy"]},
                {ppl: [4, 5], data: ["October 14", "6:00 PM", "good"]},
                {ppl: [1], data: ["October 17", "7:30 PM", "not busy at all"]},
                {ppl: [3], data: ["October 20", "12:00 PM", "not busy"]},
                {ppl: [2, 6], data: ["October 21", "6:00 PM", "not too busy"]},
                {ppl: [4], data: ["October 24", "7:30 PM", "Chill shift"]},
                {ppl: [], data: ["October 29", "1:30 PM", "not one person came"]},
                {ppl: [], data: ["November 5", "6:00 PM", "nobody came"]},
                {ppl: [], data: ["November 7", "7:30 PM", "nobody came"]},
                {ppl: [], data: ["November 11", "6:00 PM", "nobody came"]},
                {ppl: [5], data: ["November 12", "6:00 PM", "not too busy"]},
                {ppl: [], data: ["November 14", "7:30 PM", "nobody came"]},
                {ppl: [2, 4], data: ["November 18", "6:00 PM", "chill"]},
                {ppl: [6], data: ["November 19", "6:00 PM", "surprisingly not that busy for a Tuesday night"]},
                {ppl: [1, 3], data: ["November 25", "6:00 PM", "not busy"]},
                {ppl: [5], data: ["November 26", "6:00 PM", "not busy"]},
                {ppl: [1], data: ["December 2", "6:00 PM", "not busy"]},
                {ppl: [2], data: ["December 3", "1:30 PM", "not busy"]},
                {ppl: [4], data: ["December 3", "6:00 PM", "not busy"]},
                {ppl: [2, 3, 6], data: ["December 9", "6:00 PM", "not exceedingly busy"]},
                {ppl: [5], data: ["December 10", "6:00 PM", "shockingly not busy at all"]},
                {ppl: [1], data: ["January 23", "12:00 PM", "not busy"]},
                {ppl: [3, 5, 6], data: ["January 26", "3:00 PM", "kinda busy"]},
                {ppl: [], data: ["January 30", "12:00 PM", "Nobody came :("]},
                {ppl: [1], data: ["February 2", "3:00 PM", "not busy"]},
                {ppl: [2, 4], data: ["February 13", "12:00 PM", "not busy"]},
                {ppl: [3], data: ["February 13", "6:00 PM", "not busy"]},
                {ppl: [5], data: ["February 16", "3:00 PM", "not busy"]},
                {ppl: [1], data: ["February 27", "12:00 PM", "not busy"]},
                {ppl: [6], data: ["March 2", "3:00 PM", "not busy"]},
                {ppl: [2], data: ["March 4", "12:00 PM", "very chill"]},
                {ppl: [4], data: ["March 6", "12:00 PM", "very chill"]},
                {ppl: [], data: ["March 9", "3:00 PM", "nobody came :("]},
                {ppl: [2], data: ["March 27", "12:00 PM", "very not busy"]},
                {ppl: [1, 2, 3, 4, 5, 6], data: ["March 30", "3:00 PM", "actually very busy"]},
                {ppl: [2, 3], data: ["April 3", "12:00 PM", "very not busy"]},
                {ppl: [4], data: ["April 3", "7:30 PM", "very not busy"]},
                {ppl: [1, 2, 5, 6], data: ["April 6", "3:00 PM", "moderately busy"]},
                {ppl: [4], data: ["April 10", "12:00 PM", "very chill"]},
                {ppl: [3], data: ["April 17", "12:00 PM", "very not busy"]},
                {ppl: [1, 2, 5], data: ["April 20", "3:00 PM", "moderately busy"]},
                {ppl: [], data: ["April 24", "12:00 PM", "not busy"]}]

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

//addDay
//purpose: goes to the next day and changes the room accordingly
//input: none
//output: none
function addDay() {
    
    //increments day and gets that day's data
    entry++;
    let entryData = entries[entry % entries.length].data;

    //prints data
    textbox.innerHTML = entryData[0] + "<br>" + entryData[1] + "<br>" + entryData[2]

    //makes the room
    makeRoom()
}

function setup () {
    let canvas = createCanvas(winWidth, winHeight);
    stroke(0);
    makeJCC();
}

function draw () {
    /*
    fill(255)
    stroke(0);
    counter++;
    if (started && (counter == 50)) {
        line(eyex - 2, eyey, eyex + 2, eyey)
    }

    if (started && (counter == 60)) {
        circle(eyex, eyey, 3)
    }
    */

    fill(255)
    rect(0, 0, 50, 50)
    fill(0)
    noStroke()
    text("x: " + mouseX, 0, 10)
    text("y: " + mouseY, 0, 25)

    if (counter > 100) {
        counter = 0;
    }
    
}

//makeRoom
function makeRoom() {
    stroke(0);
    fill(255);
    background(255);

    //makes the walls and ceiling
    line(430, 100, 430, 500)
    line(430, 100, 500, 0)
    line(430, 500, 500, 600)
    line(0, 100, 430, 100)
    line(0, 500, 430, 500)

    //makes the furniture and people
    makeWhiteboard();
    makeStool(350, 440);
    makeStool(40, 440);
    makeMe();
    makeTable();
    makePeople(entries[entry % entries.length].ppl);

}

//makeMe
//purpose: draws me to the canvas
//input: none
//output: none
function makeMe() {

    beginShape() //back leg
    vertex(randomize(355), randomize(444))
    vertex(randomize(297), randomize(440))
    vertex(randomize(299), randomize(515))
    vertex(randomize(250), randomize(515))
    vertex(randomize(268), randomize(420))
    vertex(randomize(338), randomize(421))
    endShape();

    beginShape() //back arm
    vertex(randomize(321), randomize(346))
    vertex(randomize(294), randomize(427))
    vertex(randomize(270), randomize(427))
    vertex(randomize(275), randomize(441))
    vertex(randomize(307), randomize(443))
    vertex(randomize(344), randomize(361))
    endShape();

    beginShape() //body
    vertex(randomize(375), randomize(410))
    vertex(randomize(368), randomize(346))
    vertex(randomize(343), randomize(327))
    vertex(randomize(329), randomize(323))
    vertex(randomize(315), randomize(337))
    vertex(randomize(330), randomize(386))
    vertex(randomize(327), randomize(441))
    vertex(randomize(355), randomize(444))
    endShape(CLOSE);

    beginShape() //front leg
    vertex(randomize(355), randomize(444))
    vertex(randomize(297), randomize(440))
    vertex(randomize(299), randomize(521))
    vertex(randomize(256), randomize(521))
    vertex(randomize(268), randomize(420))
    vertex(randomize(338), randomize(421))
    endShape();

    beginShape() //head
    vertex(randomize(300), randomize(300))
    vertex(randomize(310), randomize(280))
    vertex(randomize(325), randomize(275))
    vertex(randomize(348), randomize(285))
    vertex(randomize(340), randomize(325))
    vertex(randomize(310), randomize(325))
    endShape(CLOSE);

    beginShape() //nose
    vertex(randomize(302), randomize(305))
    vertex(randomize(306), randomize(315))
    vertex(randomize(300), randomize(315))
    endShape(CLOSE);

    beginShape() //front arm
    vertex(randomize(321), randomize(346))
    vertex(randomize(299), randomize(427))
    vertex(randomize(275), randomize(427))
    vertex(randomize(280), randomize(441))
    vertex(randomize(312), randomize(443))
    vertex(randomize(344), randomize(361))
    endShape();

    line(randomize(308), randomize(318), randomize(315), randomize(318)) //mouth

    circle(randomize(310), randomize(300), randomize(3)) //eye
}

//makeP1
//purpose: draws the first person to the canvas
//input: none
//output: none
function makeP1() {
    beginShape()
    vertex(63, 280)
    vertex(85, 300)
    vertex(85, 320)
    vertex(70, 330)
    vertex(80, 415)
    vertex(130, 425)
    vertex(135, 525)
    vertex(100, 525)
    vertex(95, 445)
    vertex(40, 445)
    vertex(50, 290)
    endShape(CLOSE);
    circle(79, 306, 3)
    line(80, 318, 85, 318)
}

//makeP2
//purpose: draws the second person to the canvas
//input: none
//output: none
function makeP2() {
    beginShape()
    vertex(153, 248)
    vertex(135, 226)
    vertex(121, 226)
    vertex(110, 235)
    vertex(110, 270)
    vertex(125, 270)
    vertex(138, 300)
    vertex(120, 340)
    vertex(115, 548)
    vertex(160, 548)
    vertex(167, 444)
    endShape(CLOSE);
    circle(119, 246, 3)
    line(110, 265, 120, 265)
}

//makeP3
//purpose: draws the third person to the canvas
//input: none
//output: none
function makeP3() {
    beginShape()
    vertex(0, 570)
    vertex(0, 215)
    vertex(20, 225)
    vertex(20, 270)
    vertex(15, 275)
    vertex(14, 306)
    vertex(26, 318)
    vertex(28, 369)
    vertex(21, 433)
    vertex(23, 570)
    endShape(CLOSE);
    circle(13, 244, 4)
    line(20, 260, 7, 260)
}

//makeP4
//purpose: draws the fourth person to the canvas
//input: none
//output: none
function makeP4() {
    beginShape()
    vertex(218, 227)
    vertex(237, 227)
    vertex(260, 244)
    vertex(260, 278)
    vertex(240, 285)
    vertex(265, 329)
    vertex(276, 428)
    vertex(269, 578)
    vertex(196, 578)
    vertex(202, 394)
    vertex(211, 256)
    endShape(CLOSE);
    circle(253, 258, 4)
    line(260, 267, 245, 267)
}

//makeP5
//purpose: draws the fifth person to the canvas
//input: none
//output: none
function makeP5() {
    beginShape()
    vertex(435, 240)
    vertex(420, 220)
    vertex(405, 220)
    vertex(395, 240)
    vertex(395, 280)
    vertex(412, 280)
    vertex(412, 320)
    vertex(400, 365)
    vertex(410, 578)
    vertex(450, 578)
    vertex(467, 335)
    vertex(440, 280)
    endShape(CLOSE);
    circle(402, 254, 4)
    line(395, 268, 410, 268)
}

//makeP6
//purpose: draws the sixth person to the canvas
//input: none
//output: none
function makeP6() {
    beginShape()
    vertex(213, 257)
    vertex(205, 220)
    vertex(185, 215)
    vertex(165, 220)
    vertex(165, 270)
    vertex(180, 282)
    vertex(180, 316)
    vertex(172, 337)
    vertex(172, 369)
    vertex(179, 387)
    vertex(176, 595)
    vertex(244, 595)
    vertex(232, 348)
    endShape(CLOSE);
    circle(171, 242, 4)
    line(165, 255, 178, 255)
}

//makePeople
//purpose: draws the non-me people to the canvas
//input: array of ints representing the 
//output:
function makePeople(num_people) {
    num_people.forEach(person => {
        switch (person) {
            case 1:
                makeP1()
                break;
            case 2:
                makeP2()
                break;
            case 3:
                makeP3()
                break;
            case 4:
                makeP4()
                break;
            case 5:
                makeP5()
                break;
            case 6:
                makeP6()
                break;
        }
    })
}

function randomize(num) {
    return random(num - entry, num + entry);
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
