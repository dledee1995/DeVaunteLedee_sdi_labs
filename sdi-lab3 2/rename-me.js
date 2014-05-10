//alert("JavaScript works!");

// variables

var QB = "Cam Newton";
var team = "\"Carolina\" Panthers";
var GamesWon = 13;
var superbowl = false;
var OppTeam = "49ers";
var GamesLost = 5;
var Championship = true;
var odds = 9;
//var CG = true;
//output

console.log(" The best quarterback of the NFC South is " + QB + ".");
console.log(" The football team in the Blue Jerseys are the " + team + " . ");
console.log(" The " + team + " Won " + (GamesWon + 3) + " Games this year");

//confirm
Championship = confirm(" Did the " + team + " make it to the Championship ");

if (Championship == true) {

	//console.log(" The " + team + " won " + (GamesWon + 1) + " to get to the Championship ");
	GamesWon = parseFloat(GamesWon);

	// confirm
	superbowl = confirm(" Did the " + team + " make it to the superbowl? ");

	if (superbowl == true) {
		
		console.log("working");
		
		odds = parseInt(prompt(" On a scale from 1-10 what are their odds of winning? if there a 4 other teams left? "));
		console.log("The" + team + " Won " + (GamesWon + 2) + " Games to get to the superbowl");

		console.log(" The " + team + " Win The superBowl!");

		console.log(" The " + team + " returns to Charlotte ");

	} else {
		console.log(" The " + team + " did not make it to The superBowl!");

		console.log(" The " + team + " returns to Charlotte ");
	}

} else {

	CG = prompt(" Did the team play hard ?");
	console.log("The" + team + " Lost " + GamesLost + " games this year");

	if (CG == "no") {
		
		console.log(" The " + team + " did not make it to the Championship  they lost to the "  + OppTeam );

		console.log(" The " + team + " returns to Charlotte ");
	} else if(CG == "yes") {
		
		console.log( " The " + team + " played hard against the " + OppTeam);
		console.log(" The " + team + " tied in the Championship with the "  + OppTeam );

		console.log(" The " + team + " returns to Charlotte ");
	}
}

