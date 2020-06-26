
//////////////////////////////////////////////
// RANDOMIZED: Alien hull, fire, and accuracy
//////////////////////////////////////////////
let alienHull = Math.floor((Math.random() * (6 - 3)) + 3);
let alienFire = Math.floor((Math.random() * (4 - 2)) + 2);
let alienAccu = (Math.random() * (0.8 - 0.6)) + 0.6;

//////////////////////////////////////////////
// ACTOR CLASS
//////////////////////////////////////////////
class Actor {
    constructor(hull, fire, accu) {
        this.hull = Math.floor(hull);
        this.fire = Math.floor(fire);
        this.accu = Math.floor(accu);
    };
    // Function that powers YOUR attack
    yourAttack() {
        console.log("You are attacking the alien ship!");
        let yourHealthBar = this.hull;
        if (this.accu > Math.random()) {
            healthBar = this.hull - this.fire;
            return console.log(`You hit the alien with ${this.fire} firepower and they have ${yourHealthBar} life left!`);
        } else {
            return console.log(`You missed! The alien has ${yourHealthBar} life left!`);
        };
    };
    // Function that powers ALIEN attack
    alienAttack() {
        console.log("The alien ship is attacking you!");
        let alienHealthBar = this.hull;
        if (this.accu > Math.random()) {
            healthBar = this.hull - this.fire;
            return console.log(`The alien ship has hit you with ${this.fire} firepower! And you now have ${alienHealthBar} life left!`);
        } else {
            return console.log(`They missed! You still have ${alienHealthBar} life left!`);
        };
    };
};


////////////////////////////////////////////////
// ACTOR OBJECTS
////////////////////////////////////////////////
let ussSchwar = new Actor(20, 5, 0.7);
let alien = new Actor(alienHull, alienFire, alienAccu);

//////////////////////////////////////////////
// FUNCTIONS FOR GAME PLAY
//////////////////////////////////////////////
// WELCOME
let welcomePlay = () => {
    console.log("Welcome aboard the USS Schwarzenegger to Space Battle!");
    console.log("You are being approached by alien ships!")

};
// ATTACK PLAY
let gamePlay = () => {
    alien.yourAttack();
    ussSchwar.alienAttack();
    console.log("What do you want to do? ATTACK or RUN");
};

// RETREAT PLAY
let retreatOptions = () => {
    let retreat = console.log("Are you cowering in retreat? YES or NO");
    if (retreat.toUpperCase() === "YES") {
        console.log("Game Over!");
    } else if (retreat.toUpperCase() === "NO") {
        welcomePlay();
        gamePlay();
    } else {
        console.log("Invalid response! YES or NO");
    }
};

////////////////////////////////////////////////
// PLAYING OF GAME
////////////////////////////////////////////////
// Step 1
welcomePlay();
let action = console.log("What do you want to do? ATTACK or RUN");
// Step 2
if (action.toUpperCase() === "ATTACK") {
    alienHealthBar = alien.hull;
    yourHealthBar = ussSchwar.hull;
    while (alienHealthBar > 0 && yourHealthBar > 0) {
        gamePlay();
        alienHealthBar = alienHealthBar - alien.hull;
        yourHealthBar = yourHealthBar - ussSchwar.hull;
        console.log(alienHealthBar, yourHealthBar);
    };
    if (alien.hull <= 0) {
        console.log("An enemy ship has been destroyed! What do you want to do? ATTACK or RUN");
    };
    if (ussSchwar.hull <= 0) {
        console.log("Your ship has been destroyed. YOU LOSE!");
    };
};
// Step 3
// if (action.toUpperCase() === "RUN") {
//     retreatOptions();
// };

