//  Global Variables
var testEmail = "dledee1995@gmail.com";
// Function
var emailFunction = function(testEmail) {

	// Local Variables
	var atPosition = testEmail.lastIndexOf("@");
	var atSign = testEmail.indexOf("@");
	var noSpace = testEmail.indexOf(" ");
	var dot = testEmail.indexOf(".");

	// if statements / else
	if (noSpace > 0) {
		console.log("Please take out space");

	} else {

		console.log("You have entered your email correctly with no spaces. Welcome!");
	}

	if (dot < 2) {
		console.log("Please take out . ");

	} else {

		console.log("You have entered the corrent amount of . signs. Welcome!");
	}

	if (atPosition > atSign) {
		console.log(" Please do not use more than one @ symbols");
	} else {
		console.log("You have the corrent amount of @ signs. Welcome!");
	}

	if (atSign < -1) {

		console.log("Please use an @ symbol");

	} else {

		console.log("You have the corrent amount of @ signs. Welcome!");
	}

};
// Calling the function
emailFunction(testEmail);

//  Variables
var mySplit = "fork,spoon,spork";
var b = ",";
var c = "/";
// Function
var splitString = function(mySplit, b, c) {

	console.log("The array is:", mySplit);

	var newString = "";
	var splitArray = mySplit.split(b);
	// For loop
	for (var i = 0; i < splitArray.length; i++) {

		if (newString === "") {
			newString = splitArray[i];

		} else {

			newString = newString + c + splitArray[i];
		}

	}

	console.log("The array is:" + newString);

};
// Calling function
splitString(mySplit, b, c);
