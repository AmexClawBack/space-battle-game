class SpaceShip {
    constructor (hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(target) {
        target.hull = target.hull - (this.firepower * this.accuracy);
    }
    
}

class Usscp extends SpaceShip {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
    }
}
class Alien extends SpaceShip {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
    }
}

const alien = [];

for(let i = 0; i < 6; i++) {
    alien[i] = new Alien(4, 4, 0.7)
}

const captain = new Usscp(20, 5, 0.7)

function startGame (arr, obj) {
    let i = 0;
    while (i < arr.length && arr[i].hull > 0) {
        // You attack the first alien ship
        obj.attack(arr[i])
        if(arr[i].hull > 0) { //alien survives, attacks player
            arr[i].attack(obj);
            
        if(obj.hull < 0) {
            return "You Lost!"
        } i += 1;
       return "You Won!"
        }
    }
}

console.log(startGame(alien, captain));


