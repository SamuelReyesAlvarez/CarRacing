var carPic = document.createElement("img");
var picsToLoad = 0;

var trackPics = [];

function countLoadedImageAndLaunchIfReady() {
    picsToLoad--;
    
    if (picsToLoad <= 0) {
        loadingDoneSoStartGame();
    }
}

function loadImages() {
    var imageList = [
        {varName: carPic, file: "player1"},

        {trackType: TRACK_ROAD, file: "road"},
        {trackType: TRACK_WALL, file: "wall"}
    ];

    picsToLoad = imageList.length;

    for (let i = 0; i < imageList.length; i++) {
        if (imageList[i].trackType != undefined) {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].file);
        } else {
            beginLoadImage(imageList[i].varName, imageList[i].file);
        }
    }
}

function beginLoadImage(imgVar, fileName) {
    imgVar.onload = countLoadedImageAndLaunchIfReady;
    imgVar.src = "img/" + fileName + ".png";
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadImage(trackPics[trackCode], fileName);
}