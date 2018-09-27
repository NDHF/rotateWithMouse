function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("newX").innerHTML = x;
    document.getElementById("newY").innerHTML = y;

    var imageHeight = document.getElementById("rotatingDivImage").offsetHeight;
    var imageWidth = document.getElementById("rotatingDivImage").offsetWidth;
    var imageTop = document.getElementById("rotatingDivImage").offsetTop;
    var imageLeft = document.getElementById("rotatingDivImage").offsetLeft;

    var imageXCenter = (imageLeft + (imageWidth / 2));
    var imageYCenter = (imageTop + (imageHeight / 2));

    var distanceFromImageXCenter = (x - imageXCenter);
    var distanceFromImageYCenter = (y - imageYCenter);
    document.getElementById("distanceFromImageXCenter").innerHTML = distanceFromImageXCenter;
    document.getElementById("distanceFromImageYCenter").innerHTML = distanceFromImageYCenter;

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
};

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
};


// This function will allow game sprite to be rotated with "l" and "k" buttons

document.addEventListener("keydown", function (event) {

    console.log("You pressed the " + event.key + " key!");

    if (event.key === "l") {
        rotateFunction("keyboardRight");
    } else if (event.key === "k") {
        rotateFunction("keyboardLeft");
    }
});

function rotateFunction(newDirection) {

    var avatarDirections = ["up", "right", "down", "left"];

    var indexOfCurrentClass = avatarDirections.indexOf(currentClass);

    //Remove class
    document.getElementById("rotatingDiv").classList.remove(currentClass);

    function changeDirection(index) {
        document.getElementById("rotatingDiv").classList.add(avatarDirections[index]);
        document.getElementById("rotatingDivImage").src = "image/" + avatarDirections[index] + ".png";
    }

    if (newDirection === "keyboardRight") {
        if (indexOfCurrentClass === 3) {
            changeDirection(0)
        } else {
            indexOfCurrentClass++;
            changeDirection(indexOfCurrentClass);
        }
    }

    if (newDirection === "keyboardLeft") {
        if (indexOfCurrentClass === 0) {
            changeDirection(3);
        } else {
            indexOfCurrentClass--;
            changeDirection(indexOfCurrentClass);
        }
    }

    if (newDirection === "up") {
        changeDirection(0);
    } else if (newDirection === "right") {
        changeDirection(1);
    } else if (newDirection === "down") {
        changeDirection(2);
    } else if (newDirection === "left") {
        changeDirection(3);
    }
};

document.addEventListener("mousemove", myFunction);

document.addEventListener("mouseout", clearCoor);