const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var keyHeldGas;
var keyHeldReverse;
var keyHeldTurnLeft;
var keyHeldTurnRight;

function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, true);
    evt.preventDefault();
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, false);
}

function setKeyHoldState(keyCode, setTo) {
    if (keyCode == KEY_UP_ARROW) {
        keyHeldGas = setTo;
    }

    if (keyCode == KEY_DOWN_ARROW) {
        keyHeldReverse = setTo;
    }

    if (keyCode == KEY_LEFT_ARROW) {
        keyHeldTurnLeft = setTo;
    }

    if (keyCode == KEY_RIGHT_ARROW) {
        keyHeldTurnRight = setTo;
    }
}