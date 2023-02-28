// Below code demonstrates different ways to handle variables logically with explanations


// this creates the global variable x and assigns it the number value of 5
// var x = 5;
// console.log(5);
// x += 1;
// console.log(x);
// x++;
// console.log(x);
// x = x+1;
// console.log(x);
// the above examples are 3 different ways to increment the value of x by 1

// var y = 8;
// y -= 1;
// y--;
// y = y-1;
// console.log(y);
// //these are three different ways to decrease y by 1

// var z = 8;
// z = z * 2;
// console.log(z);
// z *= 2
// console.log(z);
// these are 2 ways to multiply the value of z by 2

// var a = 8;
// a = a / 2;
// console.log(a);
// a /= 2;
// console.log(a);
//these are two ways to divide a by 2 in place;


//the modulus sign (modulus takes the value and divides the number and returns the remainer) is the percentage sign
// var b = 17;
// b= b % 2;
// console.log(b);
//17 divided by 2 is 16, with a remainder of 1 so it should return a value of 1 in the console

function evenOrOdd(num){		// this function will check if a number is odd or even by doing the following:
	var tester = num % 2;		//  the integer passed through the parameter of the evenOrOdd function will be divided by 2 and be assigned to the tester variable 
	if(tester === 0){			// if tester is strictly equal to 0 (meaning it has no remainder),
			console.log("The value passed is even"); // print to the console that the value passed is even
		} else if (tester === 1) {	// otherwise, if the tester is has a remainder, 
			console.log("The value passed is odd"); // print to the console the value passed is odd
		} else { // otherwise,
			console.log ("Hey there! Please provide a number for this function!"); // print to the console that the user needs to provide a number for this function
		}
	}

evenOrOdd(10.005); // here we called the function and passed through a float.