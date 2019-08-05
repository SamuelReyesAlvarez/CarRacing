// @author: Samuel Reyes Alvarez
// @version: 3 (05/08/2019)

const SPEED = 30;

var p1 = new carClass();
var p2 = new carClass();
var started = false;
var finished = false;

var canvas;
var canvasContext;
var winner;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.textAlign = "center";

    initVars();
    loadImages();

    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}

function moveEverything() {
    if (!started || finished) {
        return;
    }
    p1.carMove();
    p2.carMove();
    checkForWinner();
}

function drawEverything() {
    drawTracks();
    drawCars();
    if (!started) {
        initialMessage();
        if (p1.keyHeldGas && p2.keyHeldGas) {
            started = true;
        }
    }
    if (finished) {
        finalMessage(winner);
    }
}

function initVars() {
    p2.carInit(car2Pic, "Blue Car");
    p1.carInit(carPic, "Red Car");
    keyReset();
    started = false;
    finished = false;
}

function loadingDoneSoStartGame() {
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / SPEED);
}

function checkForWinner() {
    if (p1.winner || p2.winner) {
        finished = true;
        winner = p1.winner ? p1.myName : p2.myName;
    }
}