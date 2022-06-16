let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 5;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  const framesPerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);
};

function moveEverything() {
  ballX = ballX + ballSpeedX;

  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballX > canvas.clientWidth) {
    ballSpeedX = -ballSpeedX;
  }
}

function drawEverything() {
  colorRect(0, 0, canvas.clientWidth, canvas.clientHeight, "black");

  colorRect(0, 100, 10, 100, "white");

  colorRect(ballX, 110, 10, 10, "white");
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
