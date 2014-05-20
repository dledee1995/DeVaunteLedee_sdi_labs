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
		}

	};

};

JordanFunctions();

