var i0 = [0, 0];
var i1 = [0, 0];
var i2 = [0, 0];

var x0 = [0, 0];
var x1 = [0, 0];
var x2 = [0, 0];

var shape = 1.

var w = 0;
var h = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);
  textFont("Germania One");
  w = width / 12;
  h = height / 12;
  fill('#f4f4f4');
  stroke('#f4f4f4');
  strokeWeight(1);

}





function draw() {


  background('#1F1F1F');

  shape = (h + w) / 2;
  textSize(shape * 2);

  if (mouseX > w * 3 && mouseX < w * 9 && mouseY > h * 1 && mouseY < h * 11) {
    for(i = 1; i < 4; i++) {
     logo();
    }
  }

  else{};
  //top left
  if (mouseX > w * 3 && mouseX < w * 5 && mouseY > h * 2 && mouseY < h * 5) {
    breakout(0)
  }
  //middle left
  else if (mouseX > w * 3 && mouseX < w * 5 && mouseY > h * 5 && mouseY < h * 8) {
    breakout(1)
  }
  //bottom left
  else if (mouseX > w * 3 && mouseX < w * 5 && mouseY > h * 8 && mouseY < h * 10) {
    breakout(2)
  }

  //top left
  else if (mouseX > w * 7 && mouseX < w * 9 && mouseY > h * 2 && mouseY < h * 5) {
    breakout(3)
  }
  //middle left
  else if (mouseX > w * 7 && mouseX < w * 9 && mouseY > h * 5 && mouseY < h * 8) {
    breakout(4)
  }
  //bottom left
  else if (mouseX > w * 7 && mouseX < w * 9 && mouseY > h * 8 && mouseY < h * 10) {
    breakout(5)
  }


  else {

    for (i = 0; i < 3; i++) {
      //rotate(200);
      //translate(0, -200);
      fill(255);
      textAlign(CENTER);
      text('it', w * 6, h * 6);
    }
  }

} //draw

function logo() {
  for (i = 1; i < 4; i++) {
    createA('index0.html');
    text('i', w * 5, h + (h * 3 * i));
    text('t', w * 7, h + (h * 3 * i));
    push();
    fill(0);
    strokeWeight(2);
    ellipse(w * 4, h / 4 + (h * 3 * i), shape);
    ellipse(w * 8, h / 4 + (h * 3 * i), shape);
    pop();
  }
}

function breakout(broke) {
  for (i = 1; i < 7; i++) {


    if (i === broke) {}

    else {
      if (i%2===1)
        {

          text('i', w * 1, h + (h* 3 * Math.floor(i/2)));
          push();
          fill(0);
          strokeWeight(2);
          ellipse(w * 4, (h / 4 + (h * 3 * Math.floor(i/2))), shape);
          pop();

      }

      else {

        text('t', w * 11, h + (h * 3 * Math.floor(i/2)));
        push();
        fill(0);
        strokeWeight(2);
        ellipse((w * 8), h / 4 + (h * 3 * Math.floor(i/2)), shape);
        pop();
    }
  }
}
}
