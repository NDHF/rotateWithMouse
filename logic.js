function myFunction(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("newX").innerHTML = x;
    document.getElementById("newY").innerHTML = y;

    let imageHeight = document.getElementById("rotatingDivImage").offsetHeight;
    let imageWidth = document.getElementById("rotatingDivImage").offsetWidth;
    let imageTop = document.getElementById("rotatingDivImage").offsetTop;
    let imageLeft = document.getElementById("rotatingDivImage").offsetLeft;

    let imageXCenter = (imageLeft + (imageWidth / 2));
    let imageYCenter = (imageTop + (imageHeight / 2));

    let distanceFromImageXCenter = (x - imageXCenter);
    let distanceFromImageYCenter = (y - imageYCenter);
    document.getElementById("distanceFromImageXCenter").innerHTML = distanceFromImageXCenter;
    document.getElementById("distanceFromImageYCenter").innerHTML = distanceFromImageYCenter;

    if ((distanceFromImageXCenter < 200) && (distanceFromImageYCenter < 200)) {
        if ((distanceFromImageYCenter < 0) && (Math.abs(distanceFromImageXCenter) > distanceFromImageYCenter)) {
            console.log("UP");
            rotateFunction("up");
        } else if ((distanceFromImageYCenter > 0) && (Math.abs(distanceFromImageXCenter) < distanceFromImageYCenter)) {
            console.log("DOWN");
            rotateFunction("down");
        } else if ((distanceFromImageXCenter > 0) && (Math.abs(distanceFromImageYCenter) < distanceFromImageXCenter)) {
            console.log("RIGHT");
            rotateFunction("right");
        } else if ((distanceFromImageXCenter < 0) && (Math.abs(distanceFromImageYCenter) > distanceFromImageXCenter)) {
            console.log("LEFT");
            rotateFunction("left");
        }
    }
};

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
};

// This function will allow game sprite to be rotated with "l" and "k" buttons

document.addEventListener("keydown", function (event) {

    console.log("You pressed the " + event.key + " key!");

    if (event.key === "l") {
        rotateWithKeyboard("keyboardRight");
    } else if (event.key === "k") {
        rotateWithKeyboard("keyboardLeft");
    }
});

function rotateFunction(newDirection) {
    let avatarDirections = ["up", "right", "down", "left"];

    if (avatarDirections.includes(newDirection) === false) {
        console.error("rotateFunction argument was not 'up', 'down', 'left' or 'right'. Input was " + newDirection);
    } else {
        document.getElementById("rotatingDiv").className = "";

        document.getElementById("rotatingDiv").classList.add(newDirection);
        document.getElementById("rotatingDivImage").src = "image/" + newDirection + ".png";
    }
};

function rotateWithKeyboard(keyboardDirection) {

    let currentClass = document.getElementById("rotatingDiv").classList.item(0);

    document.getElementById("rotatingDiv").classList.remove(currentClass);

    let avatarDirections = ["up", "right", "down", "left"];

    let indexOfCurrentClass = avatarDirections.indexOf(currentClass);

    if (indexOfCurrentClass === -1) {
        console.error("WARNING: currentClass is null, indexOfCurrentClass is -1. Will be set to 'up'");
        indexOfCurrentClass = 0;
    }

    if (keyboardDirection === "keyboardRight") {
        if (indexOfCurrentClass === 3) {
            indexOfCurrentClass = 0;
        } else {
            indexOfCurrentClass++;
        }
    }

    if (keyboardDirection === "keyboardLeft") {
        if (indexOfCurrentClass === 0) {
            indexOfCurrentClass = 3;
        } else {
            indexOfCurrentClass--;
        }
    }
    rotateFunction(avatarDirections[indexOfCurrentClass]);
};

document.addEventListener("mousemove", myFunction);
document.addEventListener("mouseout", clearCoor);