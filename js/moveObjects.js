function getMargins(element) {
    var style = element.currentStyle || window.getComputedStyle(element);

    var result = {
        getX: function() {
            return parseInt(style.marginLeft);
        },
        getY: function() {
            return parseInt(style.marginTop);
        }
    };

    return result;
}

function prepareDragging(element, handle) {
    var dragging = false;

    var clickX, clickY;
    var positionX, positionY;

    var style = element.style;

    function onMouseDown(e) {
        clickX = e.clientX;
        clickY = e.clientY;

        var margins = getMargins(element);

        // this approach prevents against different margin sizes
        positionX = element.offsetLeft - margins.getX();
        positionY = element.offsetTop - margins.getY();

        dragging = true;
    }

    function onMouseUp(e) {
        dragging = false;
    }

    function onMouseMove(e) {
        if (dragging) {
            var x = positionX + e.clientX - clickX;
            var y = positionY + e.clientY - clickY;
            
            style.left = x + 'px';
            style.top = y + 'px';
        }
    }

    handle.addEventListener('mousedown', onMouseDown);  
    window.addEventListener('mouseup', onMouseUp);  
    window.addEventListener('mousemove', onMouseMove);
    
    var remove = function() {
        if (remove) {
            handle.removeEventListener('mousedown', onMouseDown);  
            window.removeEventListener('mouseup', onMouseUp); 
            window.removeEventListener('mousemove', onMouseMove);

            remove = null;
        }
    };

    return remove;
}

  prepareDragging(document.querySelector('#musicInfo'), document.querySelector('#musicHandle'));
  prepareDragging(document.querySelector('#notesInfo'), document.querySelector('#notesHandle'));
  prepareDragging(document.querySelector('#timerInfo'), document.querySelector('#timerHandle'));
  prepareDragging(document.querySelector('#quoteInfo'), document.querySelector('#quoteHandle'));
  prepareDragging(document.querySelector('#soundsInfo'), document.querySelector('#soundsHandle'));
