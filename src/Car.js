const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.3;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.5;

var carX;
var carY;
var carSpeed;
var carAng;

function carMove() {
    if (keyHeldGas) {
        carSpeed += DRIVE_POWER;
    }

    if (keyHeldReverse) {
        carSpeed -= REVERSE_POWER;
    }

    if (keyHeldTurnLeft && Math.abs(carSpeed) > MIN_TURN_SPEED) {
        carAng -= TURN_RATE * Math.PI;
    }

    if (keyHeldTurnRight && Math.abs(carSpeed) > MIN_TURN_SPEED) {
        carAng += TURN_RATE * Math.PI;
    }

    var nextX = carX + Math.cos(carAng) * carSpeed;
    var nextY = carY + Math.sin(carAng) * carSpeed;

    if (checkForTrackAtPixelCoord(nextX, nextY)) {
        carX = nextX;
        carY = nextY;
    } else {
        carSpeed *= -0.5;
    }

    carSpeed *= GROUNDSPEED_DECAY_MULT;
}

function carReset() {
    let i = 0;
    let found = false;
    while (i < trackGrid.length || !found) {
        if (trackGrid[i] == TRACK_PLAYER) {
            var tileRow = Math.floor(i / TRACK_COLUMNS);
            var tileCol = i % TRACK_COLUMNS;

            carX = tileCol * TRACK_WIDTH + TRACK_WIDTH / 2;
            carY = tileRow * TRACK_HEIGHT + TRACK_HEIGHT / 2;

            found = true;
            trackGrid[i] = TRACK_ROAD;
        }
        i++;
    }
}