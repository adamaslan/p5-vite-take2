import "../css/style.css";
import { sketch } from "p5js-wrapper";

let theShader;

sketch.preload = function () {
  // load the shader
  theShader = loadShader("assets/basic.vert", "assets/basic.frag");
};

sketch.setup = function () {
  // shaders require WEBGL mode to work
  pixelDensity(1);
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
};

sketch.draw = function () {
  theShader.setUniform("u_resolution", [width, windowHeight]);

  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0, 0, windowWidth, height);
};
// let ypos = 140;
// let ystep = 30;
// let xpos = 80;
// let xstep = 30;
// sketch.setup = function () {
//   createCanvas(400, 400);
//   noLoop();
// };

// sketch.draw = function () {
//   background(255);
//   fill(50);
//   noStroke();

//   for (let j = 0; j < 5; j++) {
//     for (let i = 0; i < 7; i++) {
//       rect(xpos + xstep * i, ypos + ystep * j, 20, 20);
//     }
//   }
// };

// sketch.setup = function () {
//   createCanvas(800, 600);
// };

// sketch.draw = function () {
//   background(100);
//   fill(255, 0, 0);
//   noStroke();
//   rectMode(CENTER);
//   rect(mouseX, mouseY, 50, 50);
// };

// sketch.mousePressed = function () {
//   console.log("here");
// };
