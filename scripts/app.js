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
let alienHull = Math.floor((Math.random() * (6 - 3)) + 3);
let alienFire = Math.floor((Math.random() * (4 - 2)) + 2);
let alienAccu = (Math.random() * (0.8 - 0.6)) + 0.6;

///////////////////////////////////////////////
// ACTOR CLASS
///////////////////////////////////////////////
class Actor {
    constructor(hull, fire, accu) {
        this.hull = Math.floor(hull);
        this.fire = Math.floor(fire);
        this.accu = Math.floor(accu);
    };
    // Function that powers YOUR attack
    yourAttack() {
        alert("You are attacking the alien ship!");
        let yourHealthBar = this.hull;
        if (this.accu > Math.random()) {
            yourHealthBar = this.hull - this.fire;
            return this.hull, this.accu, this.fire, yourHealthBar, alert(`You hit the alien with ${this.fire} firepower and they have ${yourHealthBar} life left!`);
        } else {
            return this.hull, this.accu, this.fire, yourHealthBar, alert(`You missed! The alien has ${yourHealthBar} life left!`);
        };
    };
    // Function that powers ALIEN attack
    alienAttack() {
        alert("The alien ship is attacking you!");
        let alienHealthBar = this.hull;
        if (this.accu > Math.random()) {
            alienHealthBar = this.hull - this.fire;
            return this.hull, this.accu, this.fire, alienHealthBar, alert(`The alien ship has hit you with ${this.fire} firepower! And you now have ${alienHealthBar} life left!`);
        } else {
            return this.hull, this.accu, this.fire, alienHealthBar, alert(`They missed! You still have ${alienHealthBar} life left!`);
        };
    };
};


////////////////////////////////////////////////
// ACTOR OBJECTS
////////////////////////////////////////////////
let ussSchwar = new Actor(20, 5, 0.7);
let alien = new Actor(alienHull, alienFire, alienAccu);

///////////////////////////////////////////////
// FUNCTIONS FOR GAME PLAY
///////////////////////////////////////////////
// WELCOME
let welcomePlay = () => {
    alert("Welcome aboard the USS Schwarzenegger to Space Battle!");
    alert("You are being approached by alien ships!")

};
// ATTACK PLAY
// let gamePlay = () => {
//     alien.yourAttack();
//     ussSchwar.alienAttack();
//     prompt("What do you want to do?", "ATTACK or RUN");
// };

// RETREAT PLAY
let retreatOptions = () => {
    let retreat = prompt("Are you cowering in retreat?", "YES or NO");
    if (retreat.toUpperCase() === "YES") {
        alert("Game Over!");
    } else if (retreat.toUpperCase() === "NO") {
        welcomePlay();
        gamePlay();
    } else {
        prompt("Invalid response!", "YES or NO");
    }
};

////////////////////////////////////////////////
// PLAYING OF GAME
////////////////////////////////////////////////
// Step 1
welcomePlay();
let action = prompt("What do you want to do?", "ATTACK or RUN");
// Step 2
while (action.toUpperCase() === "ATTACK") {
    alienHealthBar = alien.hull;
    yourHealthBar = ussSchwar.hull;
    do {
        alien.yourAttack();

        if (alienHealthBar <= 0) {
            prompt("An enemy ship has been destroyed! What do you want to do?", "ATTACK or RUN");

        } else if (alienHealthBar > 0) {
            ussSchwar.alienAttack();

        }
        if (yourHealthBar <= 0) {
            alert("Your ship has been destroyed. YOU LOSE!");
        }
        
        action = prompt("What do you want to do?", "ATTACK or RUN");
    } while (yourHealthBar > 0) {

    };

};

// Step 3
if (action.toUpperCase() === "RUN") {
    retreatOptions();
};





// Prompts and alerts
// prompt("Are you cowering in retreat?", "YES or NO")
// alert(`Your ship has suffered ${fire} damage from an enemy attack and you have ${hull} left`)
// alert("The enemy missed!")
// alert(`You hit the enemy with ${damage} and they have ${hull} left`)
// alert("You missed!")
// prompt("An enemy ship has been destroyed! What do you want to do?", "ATTACK or RUN");