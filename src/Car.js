const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.5;

function carClass() {
    this.carX;
    this.carY;
    this.carSpeed;
    this.carAng;
    this.keyHeldGas;
    this.keyHeldReverse;
    this.keyHeldTurnLeft;
    this.keyHeldTurnRight;
    this.myName;
    this.homeX;
    this.homeY;
    this.winner;

    this.setupControls = function(forwardKey,backKey,leftKey,rightKey) {
        this.controlKeyForGas = forwardKey;
        this.controlKeyForReverse = backKey;
        this.controlKeyForTurnLeft = leftKey;
        this.controlKeyForTurnRight = rightKey;
    }

    this.carMove = function() {
        if (this.keyHeldGas) {
            this.carSpeed += DRIVE_POWER;
        }

        if (this.keyHeldReverse) {
            this.carSpeed -= REVERSE_POWER;
        }

        if (Math.abs(this.carSpeed) > MIN_TURN_SPEED) {
            if (this.keyHeldTurnLeft) {
                this.carAng -= TURN_RATE * Math.PI;
            }

            if (this.keyHeldTurnRight) {
                this.carAng += TURN_RATE * Math.PI;
            }
        }

        var nextX = this.carX + Math.cos(this.carAng) * this.carSpeed;
        var nextY = this.carY + Math.sin(this.carAng) * this.carSpeed;
        var drivingIntoTileType = getTrackAtPixelCoord(nextX, nextY);

        if (drivingIntoTileType == TRACK_ROAD) {
            this.carX = nextX;
            this.carY = nextY;
        } else if (drivingIntoTileType == TRACK_GOAL) {
            this.winner = true;
        } else {
            this.carSpeed *= -0.5;
        }

        this.carSpeed *= GROUNDSPEED_DECAY_MULT;
    }

    this.carInit = function(graphic, name) {
        this.myBitmap = graphic;
        this.myName = name;
        this.carSpeed = 0;
        this.carAng = -0.5 * Math.PI;
        this.keyHeldGas = false;
        this.keyHeldReverse = false;
        this.keyHeldTurnLeft = false;
        this.keyHeldTurnRight = false;
        this.winner = false;

        if (this.homeX == undefined) {
            let i = 0;
            let found = false;
            while (i < trackGrid.length && !found) {
                if (trackGrid[i] == TRACK_PLAYER) {
                    var tileRow = Math.floor(i / TRACK_COLUMNS);
                    var tileCol = i % TRACK_COLUMNS;

                    this.homeX = tileCol * TRACK_WIDTH + TRACK_WIDTH / 2;
                    this.homeY = tileRow * TRACK_HEIGHT + TRACK_HEIGHT / 2;

                    found = true;
                    trackGrid[i] = TRACK_ROAD;
                }
                i++;
            }
        }
        
        this.carX = this.homeX;
        this.carY = this.homeY;
    }
}