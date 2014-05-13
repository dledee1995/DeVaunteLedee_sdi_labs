//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;

var i = 0;
// The while loop is leaping through a set number of tables
while (i < 8) {
	// The variables are set to comfirm to see if they are true or false
	p = confirm("First value:  Click OK for true or Cancel for false.");
	q = confirm("Second value:  Click OK for true or Cancel for false.");
	r = confirm("third value:  Click OK for true or Cancel for false.");
	// the if statement is going through and checking to see if each of the questions are true false or not.
	
	if (p || (q || r)){
		console.log(" With " + p + " and " + q  + ", " +  r  +  ", the outcome is TRUE. ");
		// else if saying if it is not the begining outcome this will happen.
	} else {
		console.log(" With " + p + " and " + q  +  ", " +  r + ", the outcome is FALSE. ");
	}
	
	i++;
}


// variables
var age = 1;
var price = 12;
// prompt asking for age
age = prompt(" Please enter your age ");
if (age >= 55 || age <= 10) {
	// outputing what happens if your age is 55 and above or if your age is 10 and below.
	console.log(" You get a discount price of ", price - 5 + " dollars enjoy your movie! ");
	
	// else if saying if it is not the begining outcome this will happen.
} else{
	console.log( "Your ticket is " + price + " dollars enjoy your movie!" );
	
};






// variables
var tire1 = 0;
var tire2 = 0;
var tire3 = 0;
var tire4 = 0;
// prompt to see how much tire pressure
tire1 = parseInt(prompt( " How much pressure does the 1st tire have? "));
tire2 = parseInt(prompt( " How much pressure does the 2nd tire have? "));
tire3 = parseInt(prompt( " How much pressure does the 3rd tire have? "));
tire4 = parseInt(prompt( " How much pressure does the 4th tire have? "));


// if statement is seeing if each of the set of tires are equal and if they are they will give a output and if not a different output
if (tire1 == tire2 && tire3 == tire4 ) {
	// outputting that the tires are good
	console.log(" the tires are up to specifications ");
	
	// if the beginning if statement is not true the else will run.
} else{
	// outputting that the tires are not good
	console.log( " The tires are not up to specifications please adjust. ");
};
