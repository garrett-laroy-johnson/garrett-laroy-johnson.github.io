let g = ["g", "a", "r", "r", "e", "t", "t"];
let l = ["l", "a", "r", "o", "y"];
let j = ["j", "o", "h", "n", "s", "o", "n"];
let letters = ["g","l","j"];

let gLet = []; //letter objects
let lLet = []; //letter objects
let jLet = []; //letter objects
let nameCoords = ["gLet","lLet","jLet"];

let frame = [innerWidth, innerHeight]
let start = [frame[0]/2,frame[1]/2];
let curves = [];
let curvy = [];
let swirly = [];
let last = [0,0];
let slowest;
let jitter = [5,200]; //jitter mix and max
let num = 250;
let lines = [curves, curvy, swirly];
let colors = ['#595758', '#ffeef2', '#ED6A5E'];


function setup() {
 createCanvas(frame[0],frame[1]);
 noFill();
 strokeWeight(10);


 for (f=0;f<lines.length;f++){
   stroke(colors[f]);
   genCurves(lines[f]);
   genLetters(f);

 }
 // slowest = slow();
 }

function draw() {
 background("#daff7d");

for (f=0;f<lines.length;f++){
  let v = lines[f];
  for(i=0;i<v.length;i++){
  v[i].move();
  }
  stroke(colors[f]);
  drawCurves(lines[f]);
  }

// for (i=0;i<nameCoords.length;i++){
//   let w = nameCoords[i];
//   for (f=0;f<w.length;i++){
//     w[f].make();
//   }
//
//
// }

}

let curve = class {
 constructor(x, y, weight) {
   this.x = x;
   this.y = y;
   this.weight = weight;
   this.goal = [];
   this.lrp = (random(100)/2000);
   this.jit = (random(jitter[1]-jitter[0])+jitter[0])
 }


 target() {

   this.goal[0] = this.x + (random(this.jit)-(this.jit/2));
   this.goal[1] = this.y + (random(this.jit)-(this.jit/2));

 }



move() {
 this.x = lerp(this.x, this.goal[0], this.lrp);
this.y = lerp(this.y, this.goal[1], this.lrp);
}


};


let Letter = class {
 constructor(letter, index, line) {
   this.x;
   this.y;
   this.line;
   this.index = index;
   this.letter = letter
    }


 make() {

  this.x = this.line[this.index].x;
  this.y = this.line[this.index].y;

  fill(0, 102, 153, 51);
  text(this.letter, this.x, this.y);

 }
}



function genLetters(f){

let c = nameCoords[f];

for (i=0;i<lines[f].length;i++){


let n = int(random(num));

c[i] = new Letter(letters[i], n, lines[f]);

}

}


function mousePressed() {
for (f=0;f<lines.length;f++){
  let v = lines[f];
 for (i=0;i<lines[f].length;i++){
   v[i].target();
 }
}
 loop();
 console.log("animation started")
}

//
// function slow() {
//  let slowest = [0, 1]; //  index and speed
//  for (f=0;f<lines.length;f++){
//    let v = lines[f];
//  for (i=0;i<v.length;i){
//    let last = i-1;
//    if (slowest[1] < v[i].lrp){
//      slowest = [f, i];
//    }
//  }
//
//  }
//   return slowest; // lines[i] then index
// }


function genCurves(line){
  beginShape();
   curveVertex(start[0], start[1]);
   line[0] = new curve (start[0], start[1],1);
   curveVertex(line[0].x, line[0].y);

  for (i=1;i<num;i++){
    let last = i - 1;
   line[i] = new curve();
    let x = line[last].x + (random(line[i].jit)-(line[i].jit/2));
    let y = line[last].y + (random(line[i].jit)-(line[i].jit/2));
     x = checkX(x);
     y = checkY(y);

     line[i].x=x;
     line[i].y=y;

    curveVertex(line[i].x,line[i].y);


  }

 curveVertex(height, width);
 endShape();
  for (i=0;i<line.length;i++){
    line[i].target();
  }

}



function drawCurves (line){
  beginShape();
   curveVertex(start[0], start[1]);
  for (i=0;i<line.length;i++){
    curveVertex(line[i].x,line[i].y);
  }

   curveVertex(start[0], start[1]);
 endShape();
}

function checkX (x) {
 if (x < 0) {
   return 0;
 }
 else if (x > innerWidth) {
   return innerWidth;
 }
  else {
   return x;
 }
}
function checkY (y) {
 if (y < 0) {
   return 0;
 }
 else if (y > innerHeight) {
   return innerHeight;
 }
 else {
   return y;
 }
 }

// function checkCross(i){
//   let s = 0;
//   let cx;


//   for (i = 0;i<curves.length;i++) {
//   cx = intersect_point(curves[i].x, curves[i].y, curves[s].x, curves[s].x)
//   if (cx[0] <= 0 || cx[1] <=0) { break;
//       console.log("collision detected, exiting loop");
//                                 return false;
//       }

//   }
//   return true;
// }



// function intersect_point(point1, point2, point3, point4) {
//    const ua = ((point4[0] - point3[0]) * (point1[1] - point3[1]) -
//              (point4[1] - point3[1]) * (point1[0] - point3[0])) /
//             ((point4[1] - point3[1]) * (point2[0] - point1[0]) -
//              (point4[0] - point3[0]) * (point2[1] - point1[1]));

//   const ub = ((point2[0] - point1[0]) * (point1[1] - point3[1]) -
//              (point2[1] - point1[1]) * (point1[0] - point3[0])) /
//             ((point4[1] - point3[1]) * (point2[0] - point1[0]) -
//              (point4[0] - point3[0]) * (point2[1] - point1[1]));

//   const x = point1[0] + ua * (point2[0] - point1[0]);
//   const y = point1[1] + ua * (point2[1] - point1[1]);

//   return [x, y]
// }
