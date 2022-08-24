function vidTitle() {
    var myDiv = document.getElementById("spaceNameText");
    myDiv.innerHTML = document.getElementById("spaceVideo").title;
}

function changeSoundState() {
    if (document.getElementById("volumeStateToggle").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>') {
        document.getElementById("volumeStateToggle").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    }

    else if (document.getElementById("volumeStateToggle").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>') {
        document.getElementById("volumeStateToggle").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
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
  ['Study with StudyMD','MrkPc_mFQWU','@StudyMD'],
  ['Study with KharmaMedic','fJP7c8xt1n4','@KharmaMedic'],
  ['Study with Sebastian','CPIi6JEUufU','@Sebastian'],
  ['Study with Abao','grBFMP3HDZA','@Abao']
];

var code = [
  ['Code with Darian Doria','Pn2mzyU52yI','@Darian Doria'],
  ['Code with Me','XKn6NKGA3U4','@Code With Me'],
  ['Code with Claudy','cQTYy9YULJc','@Claudy']
];

var space = [
  ['Low Lunar Orbit','XU8zZjLaEjE','@Seán Doran'],
  ['NASA Footage','49UwspRBRr0','@Seán Doran'],
  ['The Sun','WXnwyTkIux8','@Seán Doran']
];

var mystery = [
  ['Colourful Bubbles','RhlQvbvMg-0','@Community Member'],
  ['A peaceful place','DbuebKNKQsQ','@The Jazz Hop Café'],
  ['Jellyfish Aquarium','gdJjc6l6iII','@Cat Trumpet'],
  ['Lofi keyboard','cbuZfY2S2UQ','@yanu_']
];

var cafe = [
  ['Sarutahiko coffee','qMHbh6XmgwM','@Jun\'s Cafe Stroll'],
  ['Study with KharmaMedic','fJP7c8xt1n4','@StudyMD'],
  ['Study with Sebastian','CPIi6JEUufU','@StudyMD'],
  ['Study with Abao','grBFMP3HDZA','@StudyMD']
];

var games = [
  ['City of Gamers','FFfdyV8gnWk','@DeepShot'],
  ['Genshin Soundtrack','jC0w_zBQqeA','@Anson Thai'],
  ['Relaxing Undertale Music','pwkaSIq5giQ','@Lou Says'],
  ['EVE space city','nJ38P5elTkg','@Selcuk Celebi']
];

var celebrity = [
  ['Study with BTS','SVDooWT60Ho','@엔투빙 [N2BING]'],
  ['Study with TWICE','V2rWleWi-5w','@j k'],
];

var snow = [
  ['Relaxing Snowfall','vz91QpgUjFc','@Relaxing Sounds Of Nature'],
  ['Cozy Cabin Snowscape','3SHG_U2R1mk','@Relax Sleep ASMR'],
  ['Snowfall Sounds in City','YRhPU8x4JBk','@Relax Ambience'],
  ['Heavy Snow in Forest','eS2ssUROF5o','@Cat Ambience'],
  ['Blizzard in Hallstatt','uezehoBAqLg','@Outdoor Ambience']
];

var walk = [
  ['Walking in Thunderstorm','f3lVkdM3fGQ','@Nomadic Ambience'],
  ['Hike through the Forest','hld4uaO1MDE','@4K Relaxation Channel'],
  ['Rain, Zermatt Switzerland','LFOx-vmYrts','@Nomadic Ambience'],
  ['Walk in Nature Bordeaux','hzz7U-2h17w','@The Relaxed Walker'],
  ['Heavy Rainstorm in NYC','uMnGzVPUEB4','@Nomadic Ambience'],
];

var city = [
  ['Snowfall in Time Square','F8MN0o6RS9o','@Nomadic Ambience'],
  ['Chicago at Night','EH3GHJEBDcE','@SlowTv Relax&Background'],
  ['Luxury Miami Apartment','QUqhgZjrrsE','@Ambient Renders'],
  ['Night City View','Ho7a8rpufHg','@Planet Calm']
];

var art = [
  ['Lofi Art Beats','rb7D_TZXr6M','@Crockd'],
  ['3 AM Drawing Sesion','eZgF3gVrq7I','@amyeuu'],
  ['Forest Window View','gyvzdEXgNJw','@Framic window views'],
  ['You\'re in Toronto','bLAzpxidPN0','@Just Windows']
];

var pets = [
  ['Relax with my dog','aKVBZpJgY0A','@Fall In Chill'],
  ['Study with KharmaMedic','fJP7c8xt1n4','@StudyMD'],
  ['Relax with my cat','GrG2-oX5z24','@Fall in Chill']
];

var beach = [
  ['Tropical Beach','BNTs6-pNFRk','@NatureZilla'],
  ['Island, Thailand','DGIXT7ce3vQ','@Relaxing Soundzzz'],
  ['Tropical Island, Maldives','Nep1qytq9JM','@Relaxing Soundzzz'],
  ['Seaside Cafe Ambience','q1_3oQ3LoX4','@Seaside Café Jazz']
];

var windows = [
  ['Tropical Storm','iLs04Z6uBqU','@Relaxation Windows'],
  ['Los Angeles Bay View','b4ng8YGmSS4','@Opticstream360'],
  ['Forest Window View','gyvzdEXgNJw','@Framic window views'],
  ['You\'re in Toronto','bLAzpxidPN0','@Just Windows']
];

function getVideoInformation(arrayName) {
  i = i + 1;
  i = i % arrayName.length;
  document.getElementById("spaceVideo").title = arrayName[i][0];
  vidTitle();
  document.getElementById("shareSpaceLinkButton").ariaLabel = arrayName[i][1]
  document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/" + arrayName[i][1] + "?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&&loop=1&playlist=" + arrayName[i][1];
  document.getElementById("theCreatorUserName").innerHTML = arrayName[i][2];
}

var myArray = [study,space,mystery,windows,code,beach,celebrity,snow,walk,art,cafe,pets,city,games]

function playRandomVideo() {
  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  var itemNumber = Math.floor(Math.random() * 3);
  document.getElementById("spaceVideo").title = randomItem[itemNumber][0];
  vidTitle();
  document.getElementById("shareSpaceLinkButton").ariaLabel = randomItem[itemNumber][1];
  document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/" + randomItem[itemNumber][1] + "?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0&mute=1&loop=1&playlist=" + randomItem[itemNumber][1];
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
      'onStateChange': onPlayerStateChange,
    }
  });
}

function onPlayerReady() {
  console.log("hey Im ready");
  if (document.getElementById("volumeStateToggle").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>') {
    document.getElementById("volumeStateToggle").ariaLabel = "hear";
    player.unMute();
    document.getElementById('volumeSlider').value = vol;
    player.setVolume(document.getElementById('volumeSlider').value);
  }

  else if (document.getElementById("volumeStateToggle").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>') {
    document.getElementById("volumeStateToggle").ariaLabel = "mute";
    player.mute();
    document.getElementById('volumeSlider').value = 0;
    player.setVolume(vol);
  }
  //do whatever you want here. Like, player.playVideo();
}

function onPlayerStateChange() {
  console.log("my state changed");
}

document.getElementById("volumeSlider").addEventListener('input', function(event) {
  console.log(player);

  vol = document.getElementById('volumeSlider').value;
  player.setVolume(vol);

  if (vol > 0) {
    player.unMute();
    document.getElementById('volumeStateToggle').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
  } else {
    document.getElementById('volumeStateToggle').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
  }
});

document.getElementById("volumeStateToggle").addEventListener('click', function(event) {
  console.log(player);

  function vol50(){
    vol50 = function(){}; // kill it as soon as it was called
    player.unMute();
    document.getElementById('volumeSlider').value = 50;
  };

  if(player.isMuted()) {
    vol50()
    player.unMute();
    document.getElementById('volumeSlider').value = vol;
  } else {
    player.mute();
    document.getElementById('volumeSlider').value = 0;
  }
});