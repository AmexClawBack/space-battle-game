// //Dom Queries
// const startContainer = document.querySelector('#start-container');
// const gameContainer = document.querySelector('#game-container')

// const battlePrompt = document.querySelector('#battle-prompt')


console.log("hello")
class Ussship {
    constructor (name, hull, firepower, accuracy, type) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.type = type; 
    }

    //if enemy acc < Math.random, subtract firepower from enemy's hull 
    attack(target){
        let checkAgainst = Math.random()
        if(target.accuracy < checkAgainst){
            target.hull -= this.firepower
            if(target.type === "enemy"){
                console.log(`We hit ${target.name}! \nHull: ${target.hull}`)
            }else{
                console.log(`We've been hit! \nHull: ${target.hull}`)
            }
        }else{
            console.log(`We missed, ${target.type} attacks now. Brace yourself!`)
        }
       if(target.hull < 1){
           return true; 
       } else{
           return false; 
       }
    }
}

class Alienship  extends Ussship{
    constructor (name, hull, firepower, accuracy, type) {
        super(name, hull, firepower, accuracy, type)
    }
}  

let ussschwartz = new Ussship('Ussschwartz', 20, 5, .7, "Player")

let alienShips = []
for( let i = 0; i < 6; i++){
    let alienHp = Math.round((Math.random() * (6 - 3)) + 3)
    let alienFp = Math.round((Math.random() * (4 - 2)) + 2)
    let alienAcc = (Math.random()* (2) + 6) / 10
    alienShips.push(new Alienship (`enemy${i+1}`, alienHp, alienFp, alienAcc, "enemy"))
}

let battleBegin = null; 
while(battleBegin !== ("yes" || "no")){
    battleBegin = window.prompt("The aliens are ready to jump us. Do you want to start the battle?:", "yes/no")
    console.log(battleBegin)
}

let attackOrRetreat = null;
if(battleBegin === "yes"){
    let activeEnemy = 0; 
    while(ussschwartz.hull > 0){
        attackOrRetreat = null; 
        while(attackOrRetreat !== ("attack" || "retreat")){
            attackOrRetreat = window.prompt("Would you like to attack or retreat?", "attack/retreat")
        }
        if(attackOrRetreat === "attack"){
            if(ussschwartz.attack(alienShips[activeEnemy])){
                activeEnemy++;
                console.log("Enemy destroyed!") 
            }else{
                alienShips[activeEnemy].attack(ussschwartz)
            }
            
        }else{
            window.prompt("We are retreating")
        }
    }
}
//     }
// }
// //Game logic
//     function startGame(arr, obj) {
//         let i = 0;
//         while (i < arr.length && arr[i].hull > 0) {
//             // Attack first enemy ship
//             console.log(`You are attacking enemy ship ${arr[i]}`);
//             obj.attack(arr[i]);

//             if (arr[i].hull > 0) {
//                 console.log(`You hit enemy ${alien[i]}, but it is still alive. Now enemy ship is attacking you.`);

//             // Enemy attack
//             arr[i].attack(obj);

//             if (obj.hull <= 0) {
//                     console.log("You Lose")
//                 };

//             }else i++;
//         } 
//         console.log('All alien ships have been destroyed')
//     }

//     #battle-prompt.addEventListener() //where do i add this
    
//     startGame(alien[0], ussHelloWorld)


// const myShip = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7,
//     attack(target) {
//         if (Math.random() < this.accuracy) {
//         target.hull = (target.hull - this.firepower)
//         console.log(`You have hit the enemy ship for ${this.firepower} points, leaving them with ${target.hull} health points.`)
//         }else console.log("You missed")
//     }
// }

// const alienShip = {
//     hull: Math.floor(Math.random() * 4) + 3,
//     firepower: Math.floor(Math.random() * 3) + 2,
//     accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
//     attack(target) {
//         if (Math.random() < this.accuracy) {
//         target.hull = (target.hull - this.firepower)
//         console.log(`You have been hit by the enemy ship for ${this.firepower} points, leaving you with ${target.hull} health points.`)
//         }else console.log("Your enemy missed")
//     }

// }


// const game = (target) => {
//         if (target.hull <= 0) {
//             alert("That ship exploded")
//         }else console.log('The fight continues')
//     }

//     myShip.attack(alienShip);
//     game(alienShip);
//     alienShip.attack(myShip);
//     game(myShip);

