var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function() {
    window.alert("Welcome to Robot Gladiators!")

    // Subtract the value of playerAttack from the value of enemyHealth and use that result to upodat the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    )

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

}

// fight();

for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.")
}