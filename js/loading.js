function loadingScreen() {
    document.getElementById('loadingScreen').style.display = "block";
    document.getElementById('volumeStateToggle').style.pointerEvents = "none";

    setTimeout(unloadTheLoadingScreen, 2500);
}

function unloadTheLoadingScreen() {
    document.getElementById('loadingScreen').style.display = "none";
    document.getElementById('volumeStateToggle').style.pointerEvents = "all";
}