window.onload = timeBegins
window.onload = worship
window.onload = shortBreak
window.onload = longBreak


function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds; 

      if (diff <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          start = Date.now() + 1000;
      }
  };
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 1000);
}

function timeBegins() {
    var theNumber = 25;
    var whereToShow = document.querySelector('#time');

    if (document.getElementById("waitTime").style.display === "none" && document.getElementById("longWait").style.display === "none") {
        var theNumber = 25;
        var whereToShow = document.querySelector('#time');
    }

    else if (document.getElementById("time").style.display === "none" && document.getElementById("longWait").style.display === "none") {
        theNumber = 5;
        var whereToShow = document.querySelector('#waitTime');
    }

    else if (document.getElementById("time").style.display === "none" && document.getElementById("waitTime").style.display === "none") {
        theNumber = 15;
        var whereToShow = document.querySelector('#longWait');
    }

    var Minutes = 60 * theNumber,
        display = whereToShow;
    startTimer(Minutes, display);
};


function change() {

    if (document.getElementById('start').style.boxShadow == "none") {
        document.getElementById('start').style.boxShadow = "0px 3px #e0cdb6"
    }
    else {
        document.getElementById('start').style.boxShadow = "none"
    }
}

function nameChange() {

    var btn = document.getElementById("start");

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
    document.getElementById("waitTime").style.display = "flex"
    document.getElementById("time").style.display = "none";
    document.getElementById("longWait").style.display = "none";
    if (document.getElementById("waitTime").innerHTML == "05:00" && document.getElementById("time").style.display == "none" && document.getElementById("longWait").style.display == "none") {
        document.getElementById("start").value = "Start";
        document.getElementById("start").innerHTML = "Start";
        document.getElementById('start').style.boxShadow = "0px 3px #e0cdb6";
    }

    else {
        document.getElementById("start").value = "Pause";
        document.getElementById("start").innerHTML = "Pause";
        document.getElementById('start').style.boxShadow = "none";
    }
};

function lofi() {
    document.getElementById("time").style.display = "flex";
    document.getElementById("waitTime").style.display = "none";
    document.getElementById("longWait").style.display = "none";
    if (document.getElementById("time").innerHTML == "25:00" && document.getElementById("waitTime").style.display == "none" && document.getElementById("longWait").style.display == "none") {
        document.getElementById("start").value = "Start";
        document.getElementById("start").innerHTML = "Start";
        document.getElementById('start').style.boxShadow = "0px 3px #e0cdb6";
    }
    
    else {
        document.getElementById("start").value = "Pause";
        document.getElementById("start").innerHTML = "Pause";
        document.getElementById('start').style.boxShadow = "none";
    }
};

function longBreak() {
    document.getElementById("time").style.display = "none";
    document.getElementById("waitTime").style.display = "none";
    document.getElementById("longWait").style.display = "flex";
    if (document.getElementById("longWait").innerHTML == "15:00" && document.getElementById("waitTime").style.display == "none" && document.getElementById("time").style.display == "none") {
        document.getElementById("start").value = "Start";
        document.getElementById("start").innerHTML = "Start";
        document.getElementById('start').style.boxShadow = "0px 3px #e0cdb6";
    }
    
    else {
        document.getElementById("start").value = "Pause";
        document.getElementById("start").innerHTML = "Pause";
        document.getElementById('start').style.boxShadow = "none";
    }
};

if (document.getElementById("longWait").style.display == "none" && document.getElementById("waitTime").style.display == "none" && document.getElementById("time").style.display == "flex") {
    if (document.getElementById("time").innerHTML == "00:00") {
        document.getElementById("time").style.display = "none";
        document.getElementById("waitTime").style.display = "flex";
        document.getElementById("longWait").style.display = "none";
    }
}

else if (document.getElementById("longWait").style.display == "flex" && document.getElementById("waitTime").style.display == "none" && document.getElementById("time").style.display == "none") {
    if (document.getElementById("longWait").innerHTML == "00:00") {
        document.getElementById("time").style.display = "flex";
        document.getElementById("longWait").style.display = "none";
        document.getElementById("waitTime").style.display = "none";
    }
}

else if (document.getElementById("longWait").style.display == "none" && document.getElementById("waitTime").style.display == "flex" && document.getElementById("time").style.display == "none") {
    if (document.getElementById("waitTime").innerHTML == "00:00") {
        document.getElementById("waitTime").style.display = "none";
        document.getElementById("longWait").style.display = "flex";
        document.getElementById("time").style.display = "none"
    }
}
