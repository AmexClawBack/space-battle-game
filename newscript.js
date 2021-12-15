
const myShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        target.hull = target.hull - this.firepower;
        console.log(`You have hit the enemy ship for ${this.firepower} points, leaving them with ${target.hull} health points.`)
    }
}

const alienShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        target.hull = target.hull - this.firepower;
        console.log(`You have been hit the by enemy ship for ${this.firepower} points, leaving you with ${target.hull} health points.`)
    }


}
myShip.attack(alienShip)

const game = {
    function(target) {
        if (target.hull <= 0) {
            alert("That ship exploded")
        }
    }
}