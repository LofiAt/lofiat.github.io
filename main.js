window.onload = showDiv;
window.onload = closeDiv;
window.onload = showOrHide;
window.onload = swap;


var sideMenu = document.getElementById('sideBar');

function showDiv() {
    sideMenu.style.display = "block";
}

function closeDiv() {
    sideMenu.style.display = "none";
}

function showOrHide() {
    if (sideMenu.style.display === "block") {
        closeDiv()
    } 
    
    else {
        showDiv()
    }
}

function swap() {
    if (document.getElementById('opened').style.visibility === "visible") {
        document.getElementById('opened').style.visibility = "hidden"
        document.getElementById('closed').style.visibility = "visible"
    }
    else {
        document.getElementById('opened').style.visibility = "visible"
        document.getElementById('closed').style.visibility = "hidden"
    }
}

function moveLeft() {
    if (document.getElementById('selectSpace').style.left == "120px") {
        document.getElementById('selectSpace').style.left = "0px"
    }
    else {
        document.getElementById('selectSpace').style.left= "0px"
    }
}

function moveRight() {
    if (document.getElementById('selectSpace').style.left == "0px") {
        document.getElementById('selectSpace').style.left = "-120px"
    }
    else {
        document.getElementById('selectSpace').style.left = "-120px"
    }
}

var tooltip = document.querySelectorAll('.coupontooltip').dataset.tooltip;

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}