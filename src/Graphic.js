function drawGraphics() {
    drawTracks();
    drawCar();
}

function drawRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}

function drawCar() {
    if (carPicLoaded) {
        drawBitmapCenteredAtLocationWithRotation(carPic, carX, carY, carAng);
    }
}

function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY, withAngle) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAngle);
    canvasContext.drawImage(graphic, -carPic.width / 2, -carPic.height / 2);
    canvasContext.restore();
}

function printText(drawColor, fontStyle, text, leftX, topY) {
    canvasContext.fillStyle = drawColor;
    canvasContext.font = fontStyle;
    canvasContext.fillText(text, leftX, topY);
}

function drawTracks() {
    for (let col = 0; col < TRACK_COLUMNS; col++) {
        for (let row = 0; row < TRACK_ROWS; row++) {
            var trackLeftEdgeX = col * TRACK_WIDTH;
            var trackTopEdgeY = row * TRACK_HEIGHT;

            canvasContext.drawImage(trackPics[trackTileToIndex(col, row)], trackLeftEdgeX, trackTopEdgeY);
        }

    }
}