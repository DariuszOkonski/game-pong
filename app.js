let canvas;
let canvasContext;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  canvasContext.fillStyle = "red";
  canvasContext.fillRect(220, 100, 50, 20);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(350, 200, 50, 50);
};
