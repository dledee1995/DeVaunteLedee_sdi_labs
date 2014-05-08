//alert("JavaScript works!");

// Variables
var QB = " Cam Newton ";
var team = "\ Carolina \" Panthers";
var GamesPlayed = 17;
var superbowl = false; 
var GamesWon = 12;

GamesWon= prompt(" How many Games did they win? " , " 12 ");
GamesWon = parseFloat(GamesWon);

// Outputs
console.log(" The quarterback of the panthers is " + QB + ".");
console.log(" The best football team in the Nfc South is the " + team + " . ");
console.log(" The " + team + " have played " + GamesPlayed + " Games this season ");
console.log(" The " + team + " Won " + GamesWon + " Games out of " + GamesPlayed);
// Confirm
superbowl = confirm(" Did the " + team + " Win the superbowl?");
