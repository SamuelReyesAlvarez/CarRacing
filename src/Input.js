const KEY_ARROW_LEFT = 37;
const KEY_ARROW_UP = 38;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN = 40;
const KEY_LETTER_A = 65;
const KEY_LETTER_W = 87;
const KEY_LETTER_D = 68;
const KEY_LETTER_S = 83;
const KEY_ENTER = 13;

function keyReset() {
    p1.setupControls(KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT);
    p2.setupControls(KEY_LETTER_W, KEY_LETTER_S, KEY_LETTER_A, KEY_LETTER_D);
}

function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, p1, true);
    setKeyHoldState(evt.keyCode, p2, true);
    evt.preventDefault();
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, p1, false);
    setKeyHoldState(evt.keyCode, p2, false);
}

function setKeyHoldState(keyCode, car, setTo) {
    if (keyCode == car.controlKeyForGas) {
        car.keyHeldGas = setTo;
    }

    if (keyCode == car.controlKeyForReverse) {
        car.keyHeldReverse = setTo;
    }

    if (keyCode == car.controlKeyForTurnLeft) {
        car.keyHeldTurnLeft = setTo;
    }

    if (keyCode == car.controlKeyForTurnRight) {
        car.keyHeldTurnRight = setTo;
    }

    if (finished && keyCode == KEY_ENTER) {
        initVars();
    }
}