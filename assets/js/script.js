const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

const draw = (cursorX, cursorY) => {
    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = 20; 
    context.strokeStyle = "#000";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
};

const mouseDown = (evt) => {
    initialX = evt.offsetX;
    initialY = evt.offsetY;

    draw(initialX, initialY);
    mainCanvas.addEventListener('mousemove', mouseMoving);
};

const mouseMoving = (evt) => { 
    draw(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
    mainCanvas.removeEventListener("mousemove", mouseMoving);
}

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);
