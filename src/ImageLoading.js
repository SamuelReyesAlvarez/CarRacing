var carPic = document.createElement("img");
var car2Pic = document.createElement("img");
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
        {varName: carPic, file: "player"},
        {varName: car2Pic, file: "player2"},

        {trackType: TRACK_ROAD, file: "road"},
        {trackType: TRACK_OUTERWALL, file: "outer_wall"},
        {trackType: TRACK_INNERWALL, file: "inner_wall"},
        {trackType: TRACK_TREES, file: "tree"},
        {trackType: TRACK_GOAL, file: "goal"}
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