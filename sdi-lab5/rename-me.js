//alert("JavaScript works!");

//Variables
var x = parseFloat(prompt("Please enter a number "));
var z = prompt("Please choose a operator, +,-,/,*");
var y = parseFloat(prompt("Please enter a number "));

if (isNaN(x)) {

	console.log(" please enter a valid number");

} else if (isNaN(y)) {

	console.log(" please enter a valid number ");

} else {
	console.log(" You entered " + x + z + y);
}

//* ||  z != "*" ||  z != "/"

if (z === "+") {
	console.log("You entered: " + z);
} else if (z === "-") {
	console.log("You entered: " + z);
} else if (z === "*") {
	console.log("You entered: " + z);
} else if (z === "/") {
	console.log("You entered: " + z);
} else {
	console.log("Please enter a valid operator: " + z);
}

// Functions
//addition function
var additionFunction = function(x, y, z) {

	if (z === "+" && !isNaN(x)) {
		//console.log(x + y);
		var t = (x + y);
		//console.log(t);
		return t;
	}

	//return x + y;

};

//subtration function
var subtractionFunction = function(x, y, z) {
	if (z === "-" && !isNaN(x)) {
		//console.log(x - y);
		var t2 = (x - y);

		return t2;

	}

};
//multi function
var multiplyFunction = function(x, y, z) {

	if (z === "*" && !isNaN(x)) {
		console.log(x * y);
	}

	return;

};
//division function
var divisionFunction = function(x, y, z) {
	if (z === "/") {
		if (y === 0) {
		console.log("You entered 0 please enter another number ");
		}else{
			console.log(x / y);
			
		}

	};
	return;

};
// Calling Functions
if (z === "+") {
	var tt = additionFunction(x, y, z);
	console.log(tt);
};
if (z === "-") {
	var ttt = subtractionFunction(x, y, z);
	console.log(ttt);
};
if (z === "*") {
	var ttttt = multiplyFunction(x, y, z);
	console.log(tttt);
};

if (z === "/") {
	var tttttt = multiplyFunction(x, y, z);
	console.log(tttttt);
};
//additionFunction(x,y,z);
//subtractionFunction(x,y,z);
//multiplyFunction(x,y,z);
//divisionFunction(x,y,z);

