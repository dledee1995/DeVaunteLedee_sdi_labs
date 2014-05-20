//alert("JavaScript works!");


var objconstructor = function(jordanMake,jordanModel,jordanYear, jordanRelease) {
	this.make = jordanMake;
	this.model = jordanModel;
	this.year = jordanYear;
	this.release = jordanRelease;
};

var JordanFunctions = function() {

	for (var i = 0; i < jsonData.Jordans.length; i++) {

		if (i === 0) {
			firstJordan = new objconstructor(jsonData.Jordans[i].make, jsonData.Jordans[i].model, jsonData.Jordans[i].year, jsonData.Jordans[i].release);
			console.log(firstJordan);
			console.log(" My first pair of sneakers where called the " + firstJordan.model + ". They are known as " + firstJordan.make + " which originally came out in " + firstJordan.release + " then got re-released in " + firstJordan.year );
		}else {
			secondJordan = new objconstructor(jsonData.Jordans[i].make, jsonData.Jordans[i].model, jsonData.Jordans[i].year, jsonData.Jordans[i].release);
		console.log(secondJordan);
		console.log(" The sneakers Micheal Jordan wore in the movie Space jam are known as " + secondJordan.make + " the official name of the shoes are " + secondJordan.model + ". The shoes originally were released in " + secondJordan.release + " then the shoes re-released in " + secondJordan.year);
		}

	};

};

JordanFunctions();

