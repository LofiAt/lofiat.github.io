function vidTitle() {
    var myDiv = document.getElementById("spaceNameText");
    myDiv.innerHTML = document.getElementById("spaceVideo").title;
}

function changeYoutubeVolumeValue(amount) {
  document.getElementById("spaceVideo").src
}

function changeSoundState() {
    if (document.getElementById("volumeStateToggle").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>') {
        document.getElementById("volumeStateToggle").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    }

    else if (document.getElementById("volumeStateToggle").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>') {
        document.getElementById("volumeStateToggle").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    }
}

function setSoundIconToDefault() {
    if (document.getElementById("volumeStateToggle").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>') {
          document.getElementById("volumeStateToggle").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
      }
  }

function studyWithMe() {
    if (document.getElementById("spaceVideo").src === "https://www.youtube.com/embed/eyTcjnX83j4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1") {
        document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/1VOWybJxQz0?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1";
        document.getElementById("spaceVideo").title = "Study with StudyMD";
        setSoundIconToDefault();
    }

    else if (document.getElementById("spaceVideo").src === "https://www.youtube.com/embed/1VOWybJxQz0?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1") {
        document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/CPIi6JEUufU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1";
        document.getElementById("spaceVideo").title = "Study with Sebastian";
        setSoundIconToDefault();
    }

    else if (document.getElementById("spaceVideo").src === "https://www.youtube.com/embed/CPIi6JEUufU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1") {
        document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/fJP7c8xt1n4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1";
        document.getElementById("spaceVideo").title = "Study with KharmaMedic";
        setSoundIconToDefault();
    }

    else {
        document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/eyTcjnX83j4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1";
        document.getElementById("spaceVideo").title = "Study w/ Study to success";
        setSoundIconToDefault();
    }
}

var study = [
  ['Study with StudyMD','https://www.youtube.com/embed/MrkPc_mFQWU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['Study with KharmaMedic','https://www.youtube.com/embed/fJP7c8xt1n4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@KharmaMedic'],
  ['Study with Sebastian','https://www.youtube.com/embed/CPIi6JEUufU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Sebastian'],
  ['Study with Abao','https://www.youtube.com/embed/grBFMP3HDZA?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Abao']
];

var code = [
  ['Code with Darian Doria','https://www.youtube.com/embed/Pn2mzyU52yI?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Darian Doria'],
  ['Code with Me','https://www.youtube.com/embed/XKn6NKGA3U4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Code With Me'],
  ['Code with Claudy','https://www.youtube.com/embed/cQTYy9YULJc?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Claudy']
];

var space = [
  ['Low Lunar Orbit','https://www.youtube.com/embed/XU8zZjLaEjE?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['NASA Footage','https://www.youtube.com/embed/49UwspRBRr0?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Seán Doran'],
  ['The Sun','https://www.youtube.com/embed/WXnwyTkIux8?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Seán Doran']
];

var mystery = [
  ['Colourful Bubbles','https://www.youtube.com/embed/RhlQvbvMg-0?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Community Member'],
  ['A peaceful place','https://www.youtube.com/embed/DbuebKNKQsQ?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@The Jazz Hop Café'],
  ['Jellyfish Aquarium','https://www.youtube.com/embed/gdJjc6l6iII?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Cat Trumpet'],
  ['Lofi keyboard','https://www.youtube.com/embed/cbuZfY2S2UQ?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@yanu_']
];

var cafe = [
  ['Sarutahiko coffee','https://www.youtube.com/embed/qMHbh6XmgwM?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Jun\'s Cafe Stroll'],
  ['Study with KharmaMedic','https://www.youtube.com/embed/fJP7c8xt1n4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['Study with Sebastian','https://www.youtube.com/embed/CPIi6JEUufU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['Study with Abao','https://www.youtube.com/embed/grBFMP3HDZA?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD']
];

var games = [
  ['City of Gamers','https://www.youtube.com/embed/FFfdyV8gnWk?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@DeepShot'],
  ['Genshin Soundtrack','https://www.youtube.com/embed/jC0w_zBQqeA?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Anson Thai'],
  ['Relaxing Undertale Music','https://www.youtube.com/embed/pwkaSIq5giQ?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Lou Says'],
  ['EVE space city','https://www.youtube.com/embed/nJ38P5elTkg?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Selcuk Celebi']
];

var celebrity = [
  ['Study with StudyMD','https://www.youtube.com/embed/MrkPc_mFQWU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['Study with KharmaMedic','https://www.youtube.com/embed/fJP7c8xt1n4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['Study with Sebastian','https://www.youtube.com/embed/CPIi6JEUufU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['Study with Abao','https://www.youtube.com/embed/grBFMP3HDZA?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD']
];

var snow = [
  ['Relaxing Snowfall','https://www.youtube.com/embed/vz91QpgUjFc?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Relaxing Sounds Of Nature'],
  ['Cozy Cabin Snowscape','https://www.youtube.com/embed/3SHG_U2R1mk?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Relax Sleep ASMR'],
  ['Snowfall Sounds in City','https://www.youtube.com/embed/YRhPU8x4JBk?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Relax Ambience'],
  ['Heavy Snow in Forest','https://www.youtube.com/embed/eS2ssUROF5o?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Cat Ambience']
];

var city = [
  ['Snowfall in Time Square','https://www.youtube.com/embed/F8MN0o6RS9o?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Nomadic Ambience'],
  ['Chicago at Night','https://www.youtube.com/embed/EH3GHJEBDcE?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@SlowTv Relax&Background'],
  ['Luxury Miami Apartment','https://www.youtube.com/embed/QUqhgZjrrsE?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Ambient Renders'],
  ['Night City View','https://www.youtube.com/embed/Ho7a8rpufHg?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Planet Calm']
];

var pets = [
  ['Relax with my dog','https://www.youtube.com/embed/aKVBZpJgY0A?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Fall In Chill'],
  ['Study with KharmaMedic','https://www.youtube.com/embed/fJP7c8xt1n4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@StudyMD'],
  ['Relax with my cat','https://www.youtube.com/embed/GrG2-oX5z24?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Fall in Chill']
];

var beach = [
  ['Tropical Beach','https://www.youtube.com/embed/BNTs6-pNFRk?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@NatureZilla'],
  ['Island, Thailand','https://www.youtube.com/embed/DGIXT7ce3vQ?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Relaxing Soundzzz'],
  ['Tropical Island, Maldives','https://www.youtube.com/embed/Nep1qytq9JM?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Relaxing Soundzzz'],
  ['Seaside Cafe Ambience','https://www.youtube.com/embed/q1_3oQ3LoX4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Seaside Café Jazz']
];

var windows = [
  ['Tropical Storm','https://www.youtube.com/embed/iLs04Z6uBqU?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Relaxation Windows'],
  ['Los Angeles Bay View','https://www.youtube.com/embed/b4ng8YGmSS4?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Opticstream360'],
  ['Forest Window View','https://www.youtube.com/embed/gyvzdEXgNJw?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Framic window views'],
  ['You\'re in Toronto','https://www.youtube.com/embed/bLAzpxidPN0?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&loop=1&mute=1','@Just Windows']
];

function getVideoInformation(arrayName) {
  i = i + 1;
  i = i % arrayName.length;
  document.getElementById("spaceVideo").title = arrayName[i][0];
  vidTitle();
  document.getElementById("spaceVideo").src = arrayName[i][1];
  document.getElementById("theCreatorUserName").innerHTML = arrayName[i][2];
}

var myArray = [study,space,mystery,windows,code,beach,celebrity,snow,cafe,pets,city,games]

function playRandomVideo() {
  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  var itemNumber = Math.floor(Math.random() * 3);
  document.getElementById("spaceVideo").title = randomItem[itemNumber][0];
  vidTitle();
  document.getElementById("spaceVideo").src = randomItem[itemNumber][1];
  document.getElementById("theCreatorUserName").innerHTML = randomItem[itemNumber][2];
}



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('spaceVideo', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  console.log("hey Im ready");
  //do whatever you want here. Like, player.playVideo();
}

function onPlayerStateChange() {
  console.log("my state changed");
}

document.getElementById("volumeStateToggle").addEventListener('click', function(event) {
  console.log(player);

  if (player.isMuted()) {
    player.unMute();
  } else {
    player.mute();
  }
});
