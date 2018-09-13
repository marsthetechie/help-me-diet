// Covered plates

let coverImage1 = document.getElementById('cover1');
let coverImage2 = document.getElementById('cover2');
let coverImage3 = document.getElementById('cover3');

let numClosedPlates = 3;

// Variables for open plates

let openPlate1;
let openPlate2;
let openPlate3;

// Plate plate1 is pizza (junk food)

let plate1 = "http://res.cloudinary.com/marsthetechie/image/upload/v1536869618/pizza.png";
let plate2 = "http://res.cloudinary.com/marsthetechie/image/upload/v1536869619/food.png";
let plate3 = "http://res.cloudinary.com/marsthetechie/image/upload/v1536869619/chicken.png";
const closedPlate = "http://res.cloudinary.com/marsthetechie/image/upload/v1536869618/cover.png";

// Restart Button

let startButton = document.getElementById('start-button');

let currentlyPlaying = true;

// Checks if the open plate is junk food (pizza)

const isJunkFood = pizza => {
    if (pizza.src === plate1) {
        return true;
    } else {
        return false;
    }
}

// Checks clicked plate, not to be clicked more times

const isClicked = plate => {
    if (plate.src === closedPlate) {
        return false;
    } else {
        return true;
    }
}

// Checks if all the covers are open

const playPlates = plate => {
    numClosedPlates--;
    if (numClosedPlates === 0) {
        gameOver('win');
    } else if (isJunkFood(plate)) {
        gameOver();
    }
}

// Randomize food on plates

const randomPlateGenerator = () => {
    let junkFood = Math.floor(Math.random() * 3);
    if (junkFood === 0) {
        openPlate1 = plate1;
        openPlate2 = plate2;
        openPlate3 = plate3;
    } else if (junkFood === 1) {
        openPlate2 = plate1;
        openPlate3 = plate2;
        openPlate1 = plate3;
    } else if (junkFood === 2) {
        openPlate3 = plate1;
        openPlate1 = plate2;
        openPlate2 = plate3;
    }
}

// For clicking on plate covers

cover1.onclick = () => {
    if (currentlyPlaying && !isClicked(coverImage1)) {
        coverImage1.src = openPlate1;
        playPlates(cover1);
    }

}

cover2.onclick = () => {

    if (currentlyPlaying && !isClicked(coverImage2)) {
        cover2.src = openPlate2;
        playPlates(cover2);
    }

}

cover3.onclick = () => {

    if (currentlyPlaying && !isClicked(coverImage3)) {
        cover3.src = openPlate3;
        playPlates(cover3);
    }

}

// Restarts the game

const restart = () => {
    numClosedPlates = 3;
    coverImage1.src = closedPlate;
    coverImage2.src = closedPlate;
    coverImage3.src = closedPlate;
    startButton.innerHTML = "Good luck!";
    currentlyPlaying = true;

    randomPlateGenerator();
}

startButton.onclick = () => {
    restart();
}

// Ends the game

const gameOver = str => {
    currentlyPlaying = false;
    if (str === 'win') {
        startButton.innerHTML = "Diet successful! Play again?";
    } else {
        startButton.innerHTML = "Uki is eating pizza. Bye Diet. You lost. Try again?";
    }
}

restart();