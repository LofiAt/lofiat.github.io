// Get the container element
var btnContainer = document.getElementById("theTimer");

// Get all buttons with class="timerTitle" inside the container
var btns = btnContainer.getElementsByClassName("timerTitle");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeTimer");
    current[0].className = current[0].className.replace(" activeTimer", "");
    this.className += " activeTimer";
  });
}

function nameChange() {

    var btn = document.getElementById("timerStartStop");

    if (btn.value == "Start") {
        btn.value = "Pause";
        btn.innerHTML = "Pause";
    }
    else {
        btn.value = "Start";
        btn.innerHTML = "Start";
    }

}

function shortBreak() {
    document.getElementById("minutes").innerHTML = "05";
    document.getElementById("seconds").innerHTML = "00";

    if (document.getElementById("minutes").innerHTML === "05") {
        document.getElementById("timerStartStop").value = "Start";
        document.getElementById("timerStartStop").innerHTML = "Start";
    }

    else {
        document.getElementById("timerStartStop").value = "Pause";
        document.getElementById("timerStartStop").innerHTML = "Pause";
    }

    
const progressBar = document.querySelector(".outerRing"),
minElem = document.querySelector("#minutes"),
secElem = document.querySelector("#seconds"),
startStop = document.querySelector("#timerStartStop"),
setting = document.querySelector("#timerSettings");

let minutes = document.querySelector("#minutes").innerHTML,
seconds = document.querySelector("#seconds").innerHTML,
progress = null,
progressStart = 0,
progressEnd = parseInt(minutes) * 60 + parseInt(seconds),
speed = 1000,
degTravel = 360 / progressEnd,
toggleSettings = false,
secRem = 0,
minRem = 0;

function progressTrack() {
progressStart++;

secRem = Math.floor((progressEnd - progressStart) % 60);
minRem = Math.floor((progressEnd - progressStart) / 60);

secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

progressBar.style.background = `conic-gradient(
      #9d0000 ${progressStart * degTravel}deg,
      #17171a ${progressStart * degTravel}deg
    )`;
if (progressStart == progressEnd) {
  progressBar.style.background = `conic-gradient(
      #00aa51 360deg,
      #00aa51 360deg
    )`;
  clearInterval(progress);
  startStop.innerHTML = "Start";
  progress = null;
  progressStart = 0;
}
}

function startStopProgress() {
if (!progress) {
  progress = setInterval(progressTrack, speed);
} else {
  clearInterval(progress);
  progress = null;
  progressStart = 0;
  progressBar.style.background = `conic-gradient(
      #17171a 360deg,
      #17171a 360deg
    )`;
}
}

function resetValues() {
if (progress) {
  clearInterval(progress);
}
minutes = document.querySelector("#minutes").innerHTML;
seconds = document.querySelector("#seconds").innerHTML;
toggleSettings = false;
minElem.contentEditable = false;
minElem.style.borderBottom = `none`;
secElem.contentEditable = false;
secElem.style.borderBottom = `none`;
progress = null;
progressStart = 0;
progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
degTravel = 360 / progressEnd;
progressBar.style.background = `conic-gradient(
      #17171a 360deg,
      #17171a 360deg
    )`;
}

startStop.onclick = function () {
if (startStop.innerHTML === "Start") {
  if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
    startStop.innerHTML = "Pause";
    startStopProgress();
  } else {
    alert("Enter the Time Value in your Timer!");
  }
} else {
  startStop.innerHTML = "Start";
  startStopProgress();
}
};

setting.onclick = function () {
if (!toggleSettings) {
  toggleSettings = true;
  minElem.contentEditable = true;
  minElem.style.borderBottom = `1px dashed #ffffff50`;
  secElem.contentEditable = true;
  secElem.style.borderBottom = `1px dashed #ffffff50`;
} else {
  resetValues();
}
};

minElem.onblur = function () {
resetValues();
};

secElem.onblur = function () {
resetValues();
};

};

function pomodoro() {
    document.getElementById("minutes").innerHTML = "20";
    document.getElementById("seconds").innerHTML = "00";

    if (document.getElementById("minutes").innerHTML === "20") {
        document.getElementById("timerStartStop").value = "Start";
        document.getElementById("timerStartStop").innerHTML = "Start";
    }

    else {
        document.getElementById("timerStartStop").value = "Pause";
        document.getElementById("timerStartStop").innerHTML = "Pause";
    }

    
const progressBar = document.querySelector(".outerRing"),
minElem = document.querySelector("#minutes"),
secElem = document.querySelector("#seconds"),
startStop = document.querySelector("#timerStartStop"),
setting = document.querySelector("#timerSettings");

let minutes = document.querySelector("#minutes").innerHTML,
seconds = document.querySelector("#seconds").innerHTML,
progress = null,
progressStart = 0,
progressEnd = parseInt(minutes) * 60 + parseInt(seconds),
speed = 1000,
degTravel = 360 / progressEnd,
toggleSettings = false,
secRem = 0,
minRem = 0;

function progressTrack() {
progressStart++;

secRem = Math.floor((progressEnd - progressStart) % 60);
minRem = Math.floor((progressEnd - progressStart) / 60);

secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

progressBar.style.background = `conic-gradient(
      #9d0000 ${progressStart * degTravel}deg,
      #17171a ${progressStart * degTravel}deg
    )`;
if (progressStart == progressEnd) {
  progressBar.style.background = `conic-gradient(
      #00aa51 360deg,
      #00aa51 360deg
    )`;
  clearInterval(progress);
  startStop.innerHTML = "Start";
  progress = null;
  progressStart = 0;
}
}

function startStopProgress() {
if (!progress) {
  progress = setInterval(progressTrack, speed);
} else {
  clearInterval(progress);
  progress = null;
  progressStart = 0;
  progressBar.style.background = `conic-gradient(
      #17171a 360deg,
      #17171a 360deg
    )`;
}
}

function resetValues() {
if (progress) {
  clearInterval(progress);
}
minutes = document.querySelector("#minutes").innerHTML;
seconds = document.querySelector("#seconds").innerHTML;
toggleSettings = false;
minElem.contentEditable = false;
minElem.style.borderBottom = `none`;
secElem.contentEditable = false;
secElem.style.borderBottom = `none`;
progress = null;
progressStart = 0;
progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
degTravel = 360 / progressEnd;
progressBar.style.background = `conic-gradient(
      #17171a 360deg,
      #17171a 360deg
    )`;
}

startStop.onclick = function () {
if (startStop.innerHTML === "Start") {
  if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
    startStop.innerHTML = "Pause";
    startStopProgress();
  } else {
    alert("Enter the Time Value in your Timer!");
  }
} else {
  startStop.innerHTML = "Start";
  startStopProgress();
}
};

setting.onclick = function () {
if (!toggleSettings) {
  toggleSettings = true;
  minElem.contentEditable = true;
  minElem.style.borderBottom = `1px dashed #ffffff50`;
  secElem.contentEditable = true;
  secElem.style.borderBottom = `1px dashed #ffffff50`;
} else {
  resetValues();
}
};

minElem.onblur = function () {
resetValues();
};

secElem.onblur = function () {
resetValues();
};

};

function longBreak() {
    document.getElementById("minutes").innerHTML = "15";
    document.getElementById("seconds").innerHTML = "00";
    
    if (document.getElementById("minutes").innerHTML === "15") {
        document.getElementById("timerStartStop").value = "Start";
        document.getElementById("timerStartStop").innerHTML = "Start";
    }

    else {
        document.getElementById("timerStartStop").value = "Pause";
        document.getElementById("timerStartStop").innerHTML = "Pause";
    }

    
const progressBar = document.querySelector(".outerRing"),
minElem = document.querySelector("#minutes"),
secElem = document.querySelector("#seconds"),
startStop = document.querySelector("#timerStartStop"),
setting = document.querySelector("#timerSettings");

let minutes = document.querySelector("#minutes").innerHTML,
seconds = document.querySelector("#seconds").innerHTML,
progress = null,
progressStart = 0,
progressEnd = parseInt(minutes) * 60 + parseInt(seconds),
speed = 1000,
degTravel = 360 / progressEnd,
toggleSettings = false,
secRem = 0,
minRem = 0;

function progressTrack() {
progressStart++;

secRem = Math.floor((progressEnd - progressStart) % 60);
minRem = Math.floor((progressEnd - progressStart) / 60);

secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

progressBar.style.background = `conic-gradient(
      #9d0000 ${progressStart * degTravel}deg,
      #17171a ${progressStart * degTravel}deg
    )`;
if (progressStart == progressEnd) {
  progressBar.style.background = `conic-gradient(
      #00aa51 360deg,
      #00aa51 360deg
    )`;
  clearInterval(progress);
  startStop.innerHTML = "Start";
  progress = null;
  progressStart = 0;
}
}

function startStopProgress() {
if (!progress) {
  progress = setInterval(progressTrack, speed);
} else {
  clearInterval(progress);
  progress = null;
  progressStart = 0;
  progressBar.style.background = `conic-gradient(
      #17171a 360deg,
      #17171a 360deg
    )`;
}
}

function resetValues() {
if (progress) {
  clearInterval(progress);
}
minutes = document.querySelector("#minutes").innerHTML;
seconds = document.querySelector("#seconds").innerHTML;
toggleSettings = false;
minElem.contentEditable = false;
minElem.style.borderBottom = `none`;
secElem.contentEditable = false;
secElem.style.borderBottom = `none`;
progress = null;
progressStart = 0;
progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
degTravel = 360 / progressEnd;
progressBar.style.background = `conic-gradient(
      #17171a 360deg,
      #17171a 360deg
    )`;
}

startStop.onclick = function () {
if (startStop.innerHTML === "Start") {
  if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
    startStop.innerHTML = "Pause";
    startStopProgress();
  } else {
    alert("Enter the Time Value in your Timer!");
  }
} else {
  startStop.innerHTML = "Start";
  startStopProgress();
}
};

setting.onclick = function () {
if (!toggleSettings) {
  toggleSettings = true;
  minElem.contentEditable = true;
  minElem.style.borderBottom = `1px dashed #ffffff50`;
  secElem.contentEditable = true;
  secElem.style.borderBottom = `1px dashed #ffffff50`;
} else {
  resetValues();
}
};

minElem.onblur = function () {
resetValues();
};

secElem.onblur = function () {
resetValues();
};

};



const progressBar = document.querySelector(".outerRing"),
  minElem = document.querySelector("#minutes"),
  secElem = document.querySelector("#seconds"),
  startStop = document.querySelector("#timerStartStop"),
  setting = document.querySelector("#timerSettings");

let minutes = document.querySelector("#minutes").innerHTML,
  seconds = document.querySelector("#seconds").innerHTML,
  progress = null,
  progressStart = 0,
  progressEnd = parseInt(minutes) * 60 + parseInt(seconds),
  speed = 1000,
  degTravel = 360 / progressEnd,
  toggleSettings = false,
  secRem = 0,
  minRem = 0;

function progressTrack() {
  progressStart++;

  secRem = Math.floor((progressEnd - progressStart) % 60);
  minRem = Math.floor((progressEnd - progressStart) / 60);

  secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
  minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

  progressBar.style.background = `conic-gradient(
        #9d0000 ${progressStart * degTravel}deg,
        #17171a ${progressStart * degTravel}deg
      )`;
  if (progressStart == progressEnd) {
    progressBar.style.background = `conic-gradient(
        #00aa51 360deg,
        #00aa51 360deg
      )`;
    clearInterval(progress);
    startStop.innerHTML = "Start";
    progress = null;
    progressStart = 0;
  }
}

function startStopProgress() {
  if (!progress) {
    progress = setInterval(progressTrack, speed);
  } else {
    clearInterval(progress);
    progress = null;
    progressStart = 0;
    progressBar.style.background = `conic-gradient(
        #17171a 360deg,
        #17171a 360deg
      )`;
  }
}

function resetValues() {
  if (progress) {
    clearInterval(progress);
  }
  minutes = document.querySelector("#minutes").innerHTML;
  seconds = document.querySelector("#seconds").innerHTML;
  toggleSettings = false;
  minElem.contentEditable = false;
  minElem.style.borderBottom = `none`;
  secElem.contentEditable = false;
  secElem.style.borderBottom = `none`;
  progress = null;
  progressStart = 0;
  progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
  degTravel = 360 / progressEnd;
  progressBar.style.background = `conic-gradient(
        #17171a 360deg,
        #17171a 360deg
      )`;
}

startStop.onclick = function () {
  if (startStop.innerHTML === "Start") {
    if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
      startStop.innerHTML = "Pause";
      startStopProgress();
    } else {
      alert("Enter the Time Value in your Timer!");
    }
  } else {
    startStop.innerHTML = "Start";
    startStopProgress();
  }
};

setting.onclick = function () {
  if (!toggleSettings) {
    toggleSettings = true;
    minElem.contentEditable = true;
    minElem.style.borderBottom = `1px dashed #ffffff50`;
    secElem.contentEditable = true;
    secElem.style.borderBottom = `1px dashed #ffffff50`;
  } else {
    resetValues();
  }
};

minElem.onblur = function () {
  resetValues();
};

secElem.onblur = function () {
  resetValues();
};
