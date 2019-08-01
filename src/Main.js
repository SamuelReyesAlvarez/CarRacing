// @author: Samuel Reyes Alvarez
// @version: 1 (01/08/2019)

const SPEED = 30;

var canvas;
var canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.textAlign = "center";

    initVars();
    carReset();
    loadImages();

    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}

function moveEverything() {
    carMove();
}

function drawEverything() {
    drawGraphics();
}

function initVars() {
    carX = canvas.width / 2;
    carY = canvas.height / 2;
    carSpeed = 0;
    carAng = -0.5 * Math.PI;
    keyHeldGas = false;
    keyHeldReverse = false;
    keyHeldTurnLeft = false;
    keyHeldTurnRight = false;
}

function loadingDoneSoStartGame() {
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / SPEED);
}