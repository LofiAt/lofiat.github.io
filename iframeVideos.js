window.onload = beach
window.onload = studyWithMe
window.onload = vidTitle

var muteValue =  document.getElementById("theValue").innerHTML;

volControl = `${muteValue}`;

function vidTitle() {
    var myDiv = document.getElementById("placeName");
    myDiv.innerHTML = document.getElementById("video").title;
}

function studyWithMe() {
    if (document.getElementById("video").src === "https://www.youtube.com/embed/eyTcjnX83j4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1") {
        document.getElementById("video").src = "https://www.youtube.com/embed/1VOWybJxQz0?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1";
        document.getElementById("video").title = "Study with StudyMD";
    }

    else if (document.getElementById("video").src === "https://www.youtube.com/embed/1VOWybJxQz0?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1") {
        document.getElementById("video").src = "https://www.youtube.com/embed/CPIi6JEUufU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1";
        document.getElementById("video").title = "Study with Sebastian";
    }

    else if (document.getElementById("video").src === "https://www.youtube.com/embed/CPIi6JEUufU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1") {
        document.getElementById("video").src = "https://www.youtube.com/embed/fJP7c8xt1n4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1";
        document.getElementById("video").title = "Study with KharmaMedic";
    }

    else {
        document.getElementById("video").src = "https://www.youtube.com/embed/eyTcjnX83j4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1";
        document.getElementById("video").title = "Study w/ Study to success";
    }
}
