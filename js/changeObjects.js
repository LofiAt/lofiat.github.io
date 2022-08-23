function closeThisObject(objectId) {
    document.getElementById(objectId).style.display = "none"
}

function openThisObject(objectName) {
    document.getElementById(objectName).style.display = "block"
}

function openSideBarObject() {
    document.getElementById("spacesMenu").style.marginLeft = "308px"
}

function closeSideBarObject() {
    document.getElementById("spacesMenu").style.marginLeft = "0px"
}

function changeThisSpacesObject() {
    document.getElementById("spacesMenu").style.marginLeft = "308px";

    if (document.getElementById("importantDarkUxInformation").style.marginLeft === "8px") {
        document.getElementById("spacesMenu").style.marginLeft = "308px"
    }

    else if (document.getElementById("importantDarkUxInformation").style.marginLeft === "316px") {
        document.getElementById("spacesMenu").style.marginLeft = "0px"
    }
}

function changeBackgroundImage(bgImage) {
    document.body.style.backgroundImage = "url(" + bgImage + ")";
}

function changeThisObject(objectTitle) {
    if (document.getElementById(objectTitle).style.display === "block") {
        document.getElementById(objectTitle).style.display = "none";
    }

    else if (document.getElementById(objectTitle).style.display = "none") {
        document.getElementById(objectTitle).style.display = "block";
    }
}

function highlighted(toBeHighlighted) {
    document.getElementById(toBeHighlighted).style.color = "#000"; // forecolor
}

function sideSetToOpen() {
    document.getElementById("sideBarTabClosed").style.display = "none";
    document.getElementById("sideBarTabOpened").style.display = "block";
}

function sideSetToClose() {
    document.getElementById("sideBarTabClosed").style.display = "block";
    document.getElementById("sideBarTabOpened").style.display = "none";
}

function changeThisIcon() {
    if(document.getElementById("sideBarTabOpened").style.display === "block") {
        document.getElementById("importantDarkUxInformation").style.marginLeft = "8px";
        document.getElementById("sideBarTabClosed").style.display = "block";
        document.getElementById("sideBarTabOpened").style.display = "none";
    }

    else {
        document.getElementById("importantDarkUxInformation").style.marginLeft = "316px";
        document.getElementById("sideBarTabClosed").style.display = "none";
        document.getElementById("sideBarTabOpened").style.display = "block";
    }
}

function moveImportantDarkUxInformation() {
    if (document.getElementById("spacesMenu").style.marginLeft === "308px"){
        document.getElementById("importantDarkUxInformation").style.marginLeft = "316px";
    }

    else if (document.getElementById("spacesMenu").style.marginLeft === "0px"){
        document.getElementById("importantDarkUxInformation").style.marginLeft = "8px";
    }
}

function changeColour() {

    if (document.getElementById("saveSpace").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path fill="#d68e7f" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'){
        document.getElementById("saveSpace").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    }

    else if (document.getElementById("saveSpace").innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'){
        document.getElementById("saveSpace").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d68e7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path fill="#d68e7f" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    }
}

function changeRoomTitle() {
    var x = document.getElementById("changeRoomNameInput").value;
    document.getElementById("theSpaceName").innerHTML = x;
    document.getElementById("changeRoomNameInput").innerHTML = document.getElementById("theSpaceName").innerHTML;
}

function changeToHalfOpacity(name) {
    document.getElementById(name).style.opacity = "0.5"
}

function changeToFullOpacity(name) {
    document.getElementById(name).style.opacity = "1"
}

function changeBgColor(divName, color) {
    document.getElementById(divName).style.stroke = color;
}