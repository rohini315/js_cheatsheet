// JavaScript Cheatsheet

// ============================Part I===========================================

// Variables
// Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container
	var num= 1234
	var string="Hello"

// Debugging
// Searching for an error in the code
	console.log("This should show up in the console");
	alert("This should pop-up in the browser");

// Different Data Types

	// * String: represents sequence of characters. Represented by quotes
			var str="hello"

	// * Number:represents numeric values
			var number=78
			var float=3.14

	// * Boolean:represents boolean value either false or true
			// This would return False
			2=="2"  
			
			// This would return True
			100 > 5
			
	// * Undefined:no value

	// * Object:Kind of like arrays, but you deﬁne the keys
			var artist={name:"Vincent",last:"Van Gogh"};
		// Pull out data with bracket notation
			console.log(artist['name']);
		// Pull out data using dot notation
			console.log(artist.name);

// Array:Arrays are used to hold a collection of data, of any data type.They can hold multiple data types
	var my_array=["art","music","food",15,]
	// * You can index into arrays to pin point each individual elements
		console.log(my_array[0]);
	// art should show up in the console


// Testing:Any test returns a boolean true or false
	// This would return False
	"Hello"=="Goodbye"
	// This would return True
	2+2==3+1
	// This would return True
	5!="5"
	// <, >, <=, >= are also valid comparison operators


// Logic
	// The if statement allows us to run code only if a certain test evaluates to true
	if (0 > 100){
		console.log("This will never show up in the console, bc its false");
	}

	if(0<100){   
		console.log("This will show up in the console log"); 
	}

	// The else statement runs only if the statement in the if statement is false


// Functions:A function is a way to encapsulate code for later use 
	// * It can take arguments, which are used as variables inside thefunction.
	// * It usually returns a value, which can be used later on or displayed immediately
	// 1. Declare a Function
	// 2. Some functions have arguments
	// 3. Return the function  
	// 4. Invoke of call the function

	function add_numbers(num_1,num_2){
		return console.log(num_1+num_2);
	}

	add_numbers(100,78)

// ============================Part II===========================================


// Function I
function multiply(number_1,number_2,number_3){
	return console.log(number_1*number_2*number_3);
}

multiply(10,4,8)

// Function II
function loop_through(fav_music){
	for(var i=0;i<fav_music.length;i++) {
	return console.log(fav_music);
	}
}

loop_through(["new_wave","ambient","shoegaze"])

// Function III
function count_down(num){
	while (num>0){
	console.log(num);
	num--;
	}	
}

count_down(12)

// ============================Part III===========================================


	// 1.Create a script with two variables assigned to two numbers. Add them together and output the result to the console. Now do the same with two strings
		var num_one=123
		var num_two=456
		var addition=num_one+num_two
		console.log(addition)

		var word_one="hello"
		var word_two="world"
		console.log(word_one + ' ' + word_two)

	// 2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
		var interest = ["art","food","travel","music"]
		console.log(interest[1],interest[3])


	// 3.Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.
	var num=3
	// var num=200 
	if (num < 10) {
	alert(num + " is less than 10");
	 } 
	 else{
		console.log("your num is", num, "which is not less than 10");
  	}

	// 4.Write a similar program to check if a string stored in a variable is the same as another string.
		var string="abc"
		var string_2="123"

		if (string==string_2){
			console.log("These are the same");
		} 
		else {
			console.log("These two strings are not the same");
		}

	// 5.Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
		function name(some_name){
			return alert(some_name); 
		}

	name("Rohini");

	// 6.Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
		function undef(){
			return console.log("this should appear");
		}

	undef();


// Optional Problem:Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options.
		function choose_door(door_num){
			if (door_num==1) {
		 		console.log("You won a car");
		 	} else if (door_num==2){
		 		console.log("You win a piece of paper");
		 	} else if (door_num==3){
		 		console.log("You win a dog");
		 	} else {
		 		console.log("you win nothing");
		 	}
	 	}

 	choose_door(3)











