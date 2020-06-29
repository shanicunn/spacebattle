// // 6 Alien ships: You fight 1 ship at a time
// // UssSchwar attacks first and in order
// // Destroy 1 ship then attack next or retreat
// // Retreat ends game, win if 6 destroyed, lose if you are destroyed
// // Hull < 0 = destroyed
// // Firepower = power of hit
// // Accuracy = Math.random(0,1) chance between 0-1 that you will hit
// // Pop-ups for input via prompt("")
// // Pop-ups with information via alert("")

///////////////////////////////////////////////
// RANDOMIZED: Alien hull, fire, and accuracy
///////////////////////////////////////////////
let randAccu = (min, max) => {
    return Math.random()  * (max - min)+ min;
};
let randFunc = (max, min) => {
    return Math.floor((Math.random() * (max - min)) + min);
}
///////////////////////////////////////////////
// ACTOR CLASS
///////////////////////////////////////////////
class Actor {
    constructor(hull, fire, accu) {
        this.hull = hull;
        this.fire = fire;
        this.accu = accu;
    };
    // Function that powers YOUR attack
    yourAttack() {
        alert("You are attacking the alien ship!");

        if (this.accu > Math.random()) {
            alienHealthBar = alienHealthBar - ussSchwar.fire;
            return ussSchwar.hull, ussSchwar.accu, ussSchwar.fire, alienHealthBar, alert(`You hit the alien and they have ${alienHealthBar} life left!`), console.log((`You hit the alien and they have ${alienHealthBar} life left!`));
        } else {
            // if (this.accu < Math.random()) 
            return ussSchwar.hull, ussSchwar.accu, ussSchwar.fire, alienHealthBar, alert(`You missed! The alien has ${alienHealthBar} life left!`), console.log(`You missed! The alien has ${alienHealthBar} life left!`);
        };
    };
    // Function that powers ALIEN attack
    alienAttack() {
        alert("The alien ship is attacking you!");
        // yourHealthBar = cloneUssSchwar.hull;
        if (alien.accu > Math.random()) {
            yourHealthBar = yourHealthBar - alien.fire;
            return alien.hull, alien.accu, alien.fire, yourHealthBar, alert(`The alien ship has hit you with ${Math.floor(alien.fire)} firepower! And you now have ${yourHealthBar} life left!`), console.log(`The alien ship has hit you with ${Math.floor(alien.fire)} firepower! And you now have ${yourHealthBar} life left!`);
        } else {
            // if (this.accu < Math.random()) 
            return alien.hull, alien.accu, alien.fire, yourHealthBar, alert(`They missed! You still have ${yourHealthBar} life left!`), console.log(`They missed! You still have ${yourHealthBar} life left!`);
        };
    };
};


////////////////////////////////////////////////
// ACTOR OBJECTS
////////////////////////////////////////////////
let ussSchwar = new Actor(20, 4, 0.7);
let alien = new Actor(randFunc(6, 3), randFunc(4, 2), randAccu(0.6, 0.8));
let cloneUssSchwar = Object.assign({}, ussSchwar);
let cloneAlien = Object.assign({}, alien);

///////////////////////////////////////////////
// GLOBAL VARIABLES 
// SO THAT THE VALUES CAN BE USED LATER
///////////////////////////////////////////////
let yourHealthBar = cloneUssSchwar.hull;
let alienHealthBar = cloneAlien.hull;
let shipsDestroyed = 0;

///////////////////////////////////////////////
// FUNCTIONS FOR GAME PLAY
///////////////////////////////////////////////
// WELCOME
let welcomePlay = () => {
    alert("Welcome aboard the USS Schwarzenegger to Space Battle!");
    console.log("Welcome aboard the USS Schwarzenegger to Space Battle!");
    alert("You are being approached by alien ships!");
    console.log("You are being approached by alien ships!");

};

// RETREAT PLAY
let retreatOptions = () => {
    let retreat = prompt("Are you cowering in retreat?", "YES or NO");
    console.log("Are you cowering in retreat?");
    if (retreat.toUpperCase() === "YES") {
        alert("Game Over!");
        console.log("Game Over!");
    } else if (retreat.toUpperCase() === "NO") {
        welcomePlay();
        gamePlay();
    } else {
        prompt("Invalid response!", "YES or NO");
        console.log("Invalid response!");
    }
};

////////////////////////////////////////////////
// PLAYING OF GAME: 3 Steps
////////////////////////////////////////////////
// Step 1
welcomePlay();
let action = prompt("What do you want to do?", "ATTACK or RUN");
console.log("What do you want to do?");
// Step 2
while (action.toUpperCase() === "ATTACK") {
    do {
        alien.yourAttack();

        if (alienHealthBar <= 0) {
            alienHealthBar = alien.hull;
            alien = new Actor(randFunc(6, 3), randFunc(4, 2), randAccu(0.6, 0.8));
            shipsDestroyed++;
            prompt("An enemy ship has been destroyed! Another ship has arrived. What do you want to do?", "ATTACK or RUN");
            console.log("An enemy ship has been destroyed! Another ship has arrived. What do you want to do?");
        } else if (alienHealthBar > 0) {
            ussSchwar.alienAttack();
            yourHealthBar = yourHealthBar - alien.fire;
            action = prompt("What do you want to do?", "ATTACK or RUN");
            console.log("What do you want to do?");
        };
        if (yourHealthBar <= 0) {
            alert("Your ship has been destroyed. YOU LOSE!");
            console.log("Your ship has been destroyed. YOU LOSE!");
            break;
        } else if (shipsDestroyed == 6) {
            alert("You win!");
            console.log("You win!");
            break;
        }

    } while (yourHealthBar > 0) {
        // while part of do while loop
    };
    if ((shipsDestroyed == 6) || (yourHealthBar <= 0)) {

        break;
    };
};
// Step 3
while (action.toUpperCase() === "RUN") {
    retreatOptions();
};

// Prompts and alerts
// prompt("Are you cowering in retreat?", "YES or NO")
// alert(`Your ship has suffered ${fire} damage from an enemy attack and you have ${hull} left`)
// alert("The enemy missed!")
// alert(`You hit the enemy with ${damage} and they have ${hull} left`)
// alert("You missed!")
// prompt("An enemy ship has been destroyed! What do you want to do?", "ATTACK or RUN");