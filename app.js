let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 4;

let paddle1Y = 250;
const PADDLE_HEIGHT = 100;

function calculateMousePos(evt) {
  // it's taking coordinates only from canvas regardless of scroll
  let rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;

  return {
    x: mouseX,
    y: mouseY - PADDLE_HEIGHT / 2,
  };
}

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  const framesPerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);

  canvas.addEventListener("mousemove", function (evt) {
    var mousePos = calculateMousePos(evt);
    paddle1Y = mousePos.y;
  });
};

function moveEverything() {
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballX > canvas.clientWidth) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballY > canvas.clientHeight) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawEverything() {
  //play court
  colorRect(0, 0, canvas.clientWidth, canvas.clientHeight, "black");

  //left paddle
  colorRect(0, paddle1Y, 10, PADDLE_HEIGHT, "white");

  //draws the ball
  colorCircle(ballX, ballY, 10, "red");
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
