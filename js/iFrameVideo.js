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

function setHeartIfLiked(vidLink) {
  var idArr = [];
  var children = document.getElementById("savedSpaces").children;
  for (var i = 0; i < children.length; i++) {
    idArr.push(children[i].id);
  }

  for (var i = 0; i < idArr.length; i++) {
    if (vidLink === idArr[i]) {
      setHeart();
    }
  }
}

var study = [
  ['Study with StudyMD','MrkPc_mFQWU','@StudyMD'],
  ['Study - KharmaMedic','fJP7c8xt1n4','@KharmaMedic'],
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
  ['Study - KharmaMedic','fJP7c8xt1n4','@StudyMD'],
  ['Study with Sebastian','CPIi6JEUufU','@StudyMD'],
  ['Study with Abao','grBFMP3HDZA','@StudyMD']
];

var games = [
  ['City of Gamers','FFfdyV8gnWk','@DeepShot'],
  ['Genshin Soundtrack','jC0w_zBQqeA','@Anson Thai'],
  ['Undertale Music','pwkaSIq5giQ','@Lou Says'],
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
  ['Walk in Thunderstorm','f3lVkdM3fGQ','@Nomadic Ambience'],
  ['Hike through the Forest','hld4uaO1MDE','@4K Relaxation Channel'],
  ['Zermatt Switzerland','LFOx-vmYrts','@Nomadic Ambience'],
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
  ['You are in Toronto','bLAzpxidPN0','@Just Windows']
];

var pets = [
  ['Relax with my dog','aKVBZpJgY0A','@Fall In Chill'],
  ['Study - KharmaMedic','fJP7c8xt1n4','@StudyMD'],
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
  ['You are in Toronto','bLAzpxidPN0','@Just Windows']
];

var synthwave = [
  ['Electric Mixtape I','k3WkJq478To','@Dr.Bonkers Inc'],
  ['Night Drive','QAhvvQQurw4','@vexulus'],
  ['Galactic Waves','gj8AkNynwWs','@Chill Pulse Music'],
  ['Miami Vice','k8nHWwO1U2Q','@White Bat Audio'],
  ['Cyberpunk Mixtape','y2ECgOhoDGs','MrSuicideSheep']
];

var transport = [
  ['Train Ride Ambience','Cec4Z-Vlf7Q','@Calmed By Nature'],
  ['Takeoff & Landing','_NL7Pk9EqDg','@Flavas of Chill'],
  ['City Traffic Sounds','fh3EdeGNKus','@Nomadic Ambience'],
  ['Busan to Seoul','nABR88G_2cE','@RideScapes']
];

function getVideoInformation(arrayName) {
  i = i + 1;
  i = i % arrayName.length;
  document.getElementById("spaceVideo").title = arrayName[i][0];
  vidTitle();
  document.getElementById("shareSpaceLinkButton").ariaLabel = arrayName[i][1];
  document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/" + arrayName[i][1] + "?rel=0&loop=1&playlist=" + arrayName[i][1]+ "&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0";
  document.getElementById("theCreatorUserName").innerHTML = arrayName[i][2];
  document.getElementById("virtualSpaces").ariaLabel = arrayName;
  setHeartIfLiked(arrayName[i][1]);
}

var myArray = [study,space,mystery,windows,code,beach,celebrity,snow,walk,art,cafe,pets,city,games,synthwave,transport]

function playRandomVideo() {
  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  var itemNumber = Math.floor(Math.random() * 3);
  document.getElementById("spaceVideo").title = randomItem[itemNumber][0];
  vidTitle();
  document.getElementById("shareSpaceLinkButton").ariaLabel = randomItem[itemNumber][1];
  document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/" + randomItem[itemNumber][1] + "?rel=0&loop=1&playlist=" + randomItem[itemNumber][1]+ "&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0";
  document.getElementById("theCreatorUserName").innerHTML = randomItem[itemNumber][2];
  document.getElementById("virtualSpaces").ariaLabel = randomItem;
  setHeartIfLiked(randomItem[i][1]);
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
  player.seekTo(0);
  player.playVideo();
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
    player.setVolume(50);
  };

  if(player.isMuted()) {
    vol50();
    player.unMute();
    document.getElementById('volumeStateToggle').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    document.getElementById('volumeSlider').value = vol;
    if(vol<1) {
      player.unMute();
      document.getElementById('volumeSlider').value = 50;
      player.setVolume(50);
      document.getElementById('volumeStateToggle').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    }
  } else {
    player.mute();
    document.getElementById('volumeStateToggle').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    document.getElementById('volumeSlider').value = 0;
  }
});

function deleteSavedSpace(idName) {
  document.getElementById(idName).remove()
}

var likedSpaces = [];

document.getElementById("saveSpace").addEventListener("click", function(){
  if (document.getElementById("saveSpace").ariaLabel === "add") {
    likedSpaces.push([document.getElementById("spaceNameText").innerHTML,document.getElementById("shareSpaceLinkButton").ariaLabel,document.getElementById("theCreatorUserName").innerHTML,document.getElementById("virtualSpaces").ariaLabel]);
    addSpaceToLiked(document.getElementById("spaceNameText").innerHTML,document.getElementById("shareSpaceLinkButton").ariaLabel,document.getElementById("theCreatorUserName").innerHTML,document.getElementById("virtualSpaces").ariaLabel);
    document.getElementById("saveSpace").ariaLabel = "remove";
  }
  else {
    document.getElementById("saveSpace").ariaLabel = "add";
    deleteSavedSpace(document.getElementById("shareSpaceLinkButton").ariaLabel);
  }
});

function addSpaceToLiked(spaceName, spaceLink, spaceCreator, spaceGroup) {
  var image = checkGroup(spaceGroup);
  var div = `<div class="favouriteSpaceWrapper" id=`+spaceLink+` draggable="true">
  <span class="dragFavouriteSpace"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></span>
  <div class="spacesNameInList" onclick="loadingScreen(); openVideo('`+spaceLink+`','`+spaceCreator+`','`+spaceName+`')"><img class="space-category-icon" src=`+image+` alt="An emoji for `+spaceGroup+` space category."><div class="favouriteSpaceName">`+spaceName+`</div></div>
  <span class="removeTheSavedSpace" onclick="deleteSavedSpace('`+spaceLink+`'); resetHeart()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
</div>`;

  document.getElementById("savedSpaces").insertAdjacentHTML(`beforeend`,div);
}

function checkGroup(spaceGroup) {
  if (spaceGroup == beach) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/beach-with-umbrella_1f3d6-fe0f.png";
  }
  else if (spaceGroup == code) {
    return "https://em-content.zobj.net/thumbs/240/apple/285/laptop_1f4bb.png";
  }
  else if (spaceGroup == celebrity) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/microphone_1f3a4.png";
  }
  else if (spaceGroup == games) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/joystick_1f579-fe0f.png";
  }
  else if (spaceGroup == space) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/ringed-planet_1fa90.png";
  }
  else if (spaceGroup == windows) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/window_1fa9f.png";
  }
  else if (spaceGroup == mystery) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/face-with-monocle_1f9d0.png";
  }
  else if (spaceGroup == walk) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/person-walking_1f6b6.png";
  }
  else if (spaceGroup == snow) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/snowman_2603-fe0f.png";
  }
  else if (spaceGroup == study) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/woman-technologist_1f469-200d-1f4bb.png";
  }
  else if (spaceGroup == city) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/cityscape_1f3d9-fe0f.png";
  }
  else if (spaceGroup == cafe) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/hot-beverage_2615.png";
  }
  else if (spaceGroup == art) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/artist-palette_1f3a8.png";
  }
  else if (spaceGroup == pets) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/cat_1f408.png";
  }
  else if (spaceGroup == transport) {
    return "https://em-content.zobj.net/thumbs/120/apple/325/bullet-train_1f685.png";
  }
  else if (spaceGroup == synthwave) {
    return "https://em-content.zobj.net/thumbs/160/apple/325/videocassette_1f4fc.png";
  }
  else {
    return "https://em-content.zobj.net/thumbs/120/apple/325/prohibited_1f6ab.png";
  }
}

function openVideo(spaceLink, spaceCreator, spaceName) {
  setHeart();
  document.getElementById("spaceVideo").src = "https://www.youtube.com/embed/" + spaceLink + "?rel=0&loop=1&playlist=" + spaceLink + "&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&showsearch=0&iv_load_policy=3&enablejsapi=1&disablekb=0";
  document.getElementById("spaceVideo").title = spaceName;
  vidTitle();
  document.getElementById("shareSpaceLinkButton").ariaLabel = spaceLink;
  document.getElementById("theCreatorUserName").innerHTML = spaceCreator;
}

function setHeart() {
  document.getElementById("saveSpace").ariaLabel = "remove";
  document.getElementById("saveSpace").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path fill="#d68e7f" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
}

function resetHeart() {
  document.getElementById("saveSpace").ariaLabel = "add";
  document.getElementById("saveSpace").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
}

function changeHeartState() {
  if (document.getElementById("saveSpace").ariaLabel === "remove") {
    document.getElementById("saveSpace").ariaLabel = "add";
    document.getElementById("saveSpace").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  }
  else if (document.getElementById("saveSpace").ariaLabel === "add") {
    document.getElementById("saveSpace").ariaLabel = "remove";
    document.getElementById("saveSpace").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path fill="#d68e7f" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  }
}
