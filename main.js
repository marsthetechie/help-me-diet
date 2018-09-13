let plate1 = "assets/pizza.svg";
let plate2 = "assets/food.svg";
let plate3 = "assets/chicken.svg";
let closedPlate = "assets/cover.svg";

let cover1 = document.getElementById('cover1');
let cover2 = document.getElementById('cover2');
let cover3 = document.getElementById('cover3');

let openPlate1;
let openPlate2;
let openPlate3;

let numClosedPLates = 3;

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