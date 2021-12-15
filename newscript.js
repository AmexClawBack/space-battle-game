
const myShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        if (Math.random() < this.accuracy) {
        target.hull = (target.hull - this.firepower)
        console.log(`You have hit the enemy ship for ${this.firepower} points, leaving them with ${target.hull} health points.`)
        }else console.log("You have missed your target")
        if (this.hull <= 0) {
            alert("You Lose!")
        }
    }
}

const alienShip = {
    hull: Math.floor(Math.random() * 4) + 3,
    firepower: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
    attack(target) {
        if (Math.random() < this.accuracy) {
        target.hull = (target.hull - this.firepower)
        console.log(`You have been hit by the enemy ship for ${this.firepower} points, leaving you with ${target.hull} health points.`)
        }else console.log("Your enemy missed")
    }

}


const game = (target) => {
        if (target.hull <= 0) {
            alert("That ship exploded")
        }else console.log('The fight continues')
    }

    myShip.attack(alienShip);
    game(alienShip);
    alienShip.attack(myShip);
    game(myShip);