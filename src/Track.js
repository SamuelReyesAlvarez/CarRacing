const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40;
const TRACK_COLUMNS = 20;
const TRACK_ROWS = 15;
const TRACK_ROAD = 0;
const TRACK_OUTERWALL = 1;
const TRACK_INNERWALL = 2;
const TRACK_TREES = 3;
const TRACK_GOAL = 4;
const TRACK_PLAYER = 9;

var trackGrid = [
    3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3,
    3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3,
    3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    2, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2,
    2, 0, 0, 0, 1, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 0, 0, 2,
    2, 0, 0, 1, 2, 0, 0, 2, 3, 3, 3, 2, 0, 0, 0, 2, 2, 0, 0, 2,
    2, 0, 0, 2, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2,
    2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2,
    2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 2,
    2, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 2, 0, 0, 2,
    2, 9, 9, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2,
    2, 2, 2, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2,
    2, 4, 0, 0, 0, 0, 2, 3, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2,
    2, 4, 0, 0, 0, 0, 2, 3, 3, 2, 2, 2, 3, 3, 2, 0, 0, 0, 2, 3,
    2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3
];

function numberTrackAtTileCoord(trackTileCol, trackTileRow) {
    var trackIndex = trackTileToIndex(trackTileCol, trackTileRow);
    return trackGrid[trackIndex];
}

function getTrackAtPixelCoord(pixelX, pixelY) {
    var tileCol = Math.floor(pixelX / TRACK_WIDTH);
    var tileRow = Math.floor(pixelY / TRACK_HEIGHT);

    if (tileCol < 0 || tileCol >= TRACK_COLUMNS || tileRow < 0 || tileRow >= TRACK_ROWS) {
        return TRACK_INNERWALL;
    }

    return trackGrid[trackTileToIndex(tileCol, tileRow)];
}

function trackTileToIndex(tileCol, tileRow) {
    return (tileCol + TRACK_COLUMNS * tileRow);
}