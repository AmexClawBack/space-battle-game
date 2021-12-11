class SpaceShip {
    constructor (name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

const myShip = new SpaceShip('USS Hello World', 20, 5, .7)
console.log(myShip);

class enemyShips extends SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy = accuracy

        super(name, hull, firepower, accuracy)
    }
};

// for (let i = 0; i < enemyShips.length; i++) {
//     console.log(i)
// } // figure out how to run a for loop to generate enemy ships into array without hardcoding it

const enemyOne = new SpaceShip('text1', 6, 4, .8);
const enemyTwo = new SpaceShip('text2', 6, 4, .8);
const enemyThree = new SpaceShip('text3', 6, 4, .8);
const enemyFour = new SpaceShip('text4', 6, 4, .8);
const enemyFive = new SpaceShip('text5', 6, 4, .8);
const enemySix = new SpaceShip('text6', 6, 4, .8);


// Enemy ships
const enemies = [enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive, enemySix];

console.log(enemies);