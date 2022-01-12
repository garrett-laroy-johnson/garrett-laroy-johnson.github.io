let frame = [innerWidth, innerHeight]
let start = [frame[0]/2,frame[1]/2];
let curves = [];
let curvy = [];
let last = [0,0];
let slowest;
let jitter = [5,200]; //jitter mix and max
let num = 250;



function setup() {
 createCanvas(frame[0],frame[1]);

 stroke(0,0,0);
 genCurves(curves);

   noFill();
 strokeWeight(10);
 slowest = slow();
 genCurves(curvy);
 stroke(255,0,0);
}

function draw() {
 background("#daff7d");
 if (abs(curves[slowest].x-curves[slowest].goal[0])<0.05) {
     noLoop();
   console.log("animation paused");
     }

 for(i=0;i<curves.length;i++){
   curves[i].move();
 }
 stroke('#595758');
drawCurves(curves);

   for(i=0;i<curvy.length;i++){
   curvy[i].move();
 }
 stroke('#ffeef2');

drawCurves(curvy);


}

let curve = class {
 constructor(x, y, weight) {
   this.x = x;
   this.y = y;
   this.weight = weight;
   this.goal = [];
   this.lrp = (random(100)/2000);
   this.jit = (random(jitter[1]-jitter[0])+jitter[0]);

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

function mousePressed() {

 for (i=0;i<curves.length;i++){
   curves[i].target();
 }

  for (i=0;i<curvy.length;i++){
   curvy[i].target();
 }
 loop();
 console.log("animation started")
}


function slow () {
 let slowest = [1, 0]; // speed and index
 for (i=0;i<curves.length;i){
   let last = i-1;
   if (slowest[0] < curves[i].lrp){
     slowest = [curves[i].lrp,i];
   }
   return slowest[1];
 }
}


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
