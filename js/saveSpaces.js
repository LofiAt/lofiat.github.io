function saveTheSpace () {
    // Get the element
    var elem = document.querySelector('.favouriteSpaceWrapper');

    // Create a copy of it
    var clone = elem.cloneNode(true);

    // Update the ID and add a class
    clone.class = 'favouriteSpaceWrapper';
    clone.classList.add('text-large');

    // Inject it into the DOM
    elem.after(clone);
}

function deleteSavedSpace() {
    var element = document.getElementById("myElementID");
    element.parentNode.removeChild(element);
}
