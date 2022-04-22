/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    document.getElementById("expandWindowButton").style.display = "none";
    document.getElementById("shrinkWindowButton").style.display = "block";
  } 
  else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    document.getElementById("expandWindowButton").style.display = "none";
    document.getElementById("shrinkWindowButton").style.display = "block";
  } 
  else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    document.getElementById("expandWindowButton").style.display = "none";
    document.getElementById("shrinkWindowButton").style.display = "block";
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    document.getElementById("expandWindowButton").style.display = "block";
    document.getElementById("shrinkWindowButton").style.display = "none";
  } 
  else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
    document.getElementById("expandWindowButton").style.display = "block";
    document.getElementById("shrinkWindowButton").style.display = "none";
  } 
  else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
    document.getElementById("expandWindowButton").style.display = "block";
    document.getElementById("shrinkWindowButton").style.display = "none";
  }
}