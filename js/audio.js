

function changeVolumeValue(volumeValue, nameOfAudio, theMutedIconToBeChanged) {
    var audioObject = document.getElementById(nameOfAudio);
    audioObject.volume = volumeValue;

    if (volumeValue === 0) {
        document.getElementById(theMutedIconToBeChanged).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    }
}

function changeMuteOrUnmute(myAudio) {
    if (document.getElementById(myAudio).muted === true) {
        document.getElementById(myAudio).muted = false;
    }

    else if (document.getElementById(myAudio).muted === false) {
        document.getElementById(myAudio).muted = true;
    }
}

function muteAll() {
    Array.from(document.querySelectorAll('audio')).forEach(el => el.muted = true)
}

function unmuteOnMove(audioName, theIconToBeChanged) {
    document.getElementById(audioName).muted = false;
    document.getElementById(theIconToBeChanged).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
}

function changeSoundStateForAudio(muteUnmuteName) {
    if (document.getElementById(muteUnmuteName).innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>') {
        document.getElementById(muteUnmuteName).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    }

    else if (document.getElementById(muteUnmuteName).innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>') {
        document.getElementById(muteUnmuteName).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    }
}

function changePLaylist() {
    var spotifyPlaylist = document.getElementById('changeTheMusicPlayListInput').value;
    spotifyPlaylist = spotifyPlaylist.replace('https://open.spotify.com/','');
    spotifyPlaylist = spotifyPlaylist.substring(0, spotifyPlaylist.indexOf('?'));
    document.getElementById('spotifyEmbed').src = 'https://open.spotify.com/embed/' + spotifyPlaylist + '?utm_source=generator';
    document.getElementById('changeTheMusicPlayListInput').value = "";
}

function resetPlaylist() {
    document.getElementById('spotifyEmbed').src = 'https://open.spotify.com/embed/playlist/3BagbZs5aHeJke8kQqyomJ?utm_source=generator';
}