//alert("JavaScript works!");
//function
var myFunction = function() {
	// Variables
	var nflTeams = ["Giants", "Panthers", "Broncos", "Ravens"];
	var teamHomes = ["NewYork", "Carolina", "Denver", "Baltimore"];
	var newTeam = "Arawaks";
	var newHome = "Orlando";

	nflTeams.push(newTeam);
	teamHomes.push(newHome);
	//for loop
	for (var i = 0; i < nflTeams.length; i++) {

		console.log("The Football team known as the " + nflTeams[i] + " is located in " + teamHomes[i]);

		// };

	};
	// return for array push
	return [nflTeams];

	//console.log(newfirstName);

};
var nfl = myFunction();
console.log(nfl);

