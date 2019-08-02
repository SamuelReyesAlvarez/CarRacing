function drawRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
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
    for (let row = 0; row < TRACK_ROWS; row++) {
        for (let col = 0; col < TRACK_COLUMNS; col++) {
            var trackLeftEdgeX = col * TRACK_WIDTH;
            var trackTopEdgeY = row * TRACK_HEIGHT;

            canvasContext.drawImage(trackPics[trackGrid[trackTileToIndex(col, row)]], trackLeftEdgeX, trackTopEdgeY);
        }

    }
}

function drawCars() {
    drawBitmapCenteredAtLocationWithRotation(p1.myBitmap, p1.carX, p1.carY, p1.carAng);
    drawBitmapCenteredAtLocationWithRotation(p2.myBitmap, p2.carX, p2.carY, p2.carAng);
}

function initialMessage() {
    printText("white", "32px Arial", "Welcome to Car Racing", 400, 100);
    printText("white", "16px Arial", "Blue Car use WASD keys", 260, 300);
    printText("white", "16px Arial", "Red Car use arrow keys", 540, 300);
    printText("white", "14px Arial", "The race starts when both", 420, 430);
    printText("white", "14px Arial", "players press simultaneously", 420, 445);
    printText("white", "14px Arial", "up button (w key and up arrow)", 420, 460);
}

function finalMessage(winnerName) {
    printText("white", "48px Arial", winnerName + " won the race", 400, 100);
    printText("white", "14px Arial", "Press Enter to restart", 420, 445);
}