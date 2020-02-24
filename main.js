//Javascript Fille

// Event Listeners
    document.addEventListener('click', ClickHandler);
    document.addEventListener('dblclick', dblclickHandler);
    document.addEventListener('mousedown', mousedownHandler);
    document.addEventListener('mouseup', mouseupHandler);
    document.addEventListener('scroll', scrollHandler);
    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);

// Event Functions
function ClickHandler() {
    console.log('Click Event');
}

function dblclickHandler() {
    console.log("Double Click Event");
}

function mousedownHandler() {
    console.log("Mouse Down Event");
}

function mouseupHandler() {
    console.log("Mouse Up Event");
}

function scrollHandler() {
    console.log("Scroll Event");
}

function keydownHandler() {
    console.log("Key Down Event");
}

function keyupHandler() {
    console.log("Key Up Event");
}
