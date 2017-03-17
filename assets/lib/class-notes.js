//ES6

//Let
// function myFunction() {
// 	var myName = "Amanda";
// 	return myName;
// }

// console.log(myFunction());

// var person = true;
// if (person === true) {
// 	var newName = "Bryan";
// }
// console.log(newName);

// //Block Scope
// //The let keyword allows us set a local variable inside of a block that wouldn't otherwise create local variables (if statement, for loops, etc.)
// if (person === true) {
// 	let myFiance = "Jaime";
// }
// console.log(myFiance); //will throw a error

//This gives us more control over our scope and what variables are accessible where. 

//For loops and let
//with var
// for (var i = 0; i<10; i++) {
// 	console.log(i);
// }

// console.log("outside loop", i);

// //with let
// for (let j = 0; j<10; j++) {
// 	console.log(j);
// }

// console.log("outside loop", j);


//Const
//This keyword is similar to var, lets us make a variable's value "read only"
// const API_KEY = "dlaksjdiojejflkjfiejlsfj";
// console.log(API_KEY);
// API_KEY = "new stuff";
// console.log(API_KEY);

//Template Strings and Template Literals 
// var fName = "Amanda";
// var lName = "Muir";
// var age = 30;
// var info = "Teacher's name is " + fName + " " + lName + ", and they are " + age + " years old.";
// console.log(info);

//New way = template literals!! yay!!
// var multilineStr = `Amanda
// This is a new line.`;
// console.log(multilineStr);

// //Also allows for way easier string concatenation
// //concat with template literals
// var fName = "Amanda";
// var lName = "Muir";
// var age = 30;
// var info = `Teacher's name is ${fName} ${lName}, and they are ${age} years old`;
// console.log(info);

//Old way
// var Croft = {
// 	firstName: "Lara",
// 	lastName: "Croft",
// 	sayName: function() {
// 		console.log(`Hi, I'm ${this.firstName} ${this.lastName}.`);
// 	}
// }
// Croft.sayName();

// //New way = remove function keyword and the colon
// var Drake = {
// 	firstName: "Nathaniel",
// 	lastName: "Drake",
// 	sayName() {
// 		console.log(`Hi, I'm ${this.firstName} ${this.lastName}.`);
// 	}
// }
// Drake.sayName();


// //ARROW FUNCTIONS
// //A new way to write functions, with a bit of different functionality and scope

// //Example of a very basic arrow function
// var add = (a,b) => {
// 	return a+b;
// }


// //This can be simplifies more:
// //Bc this function onlt returns something,we can remove the word return
// //You can also get rid of the brackets {}
// var add = (a,b) => a+b;

// //quick sidenote for ternary statements
// //a ternary statement is a shorter way to write an if statement
// //its compatible with ES5(the old way)

// if(Croft.firstName == "Lara") {
// 	console.log("Tomb Raider");
// } else {
// 	console.log("Imposter");
// }
// console.log(Croft.firstName == "Lara" ? "Tomb Raider" : "Imposter");

//Drawbacks of Arrow Functions
//They don't bind their own version of the "This" keyword
//old way
// var person = {
// 	name: "Amanda",
// 	sayName: function() {
// 		console.log( "Hi, I'm " + this.name + ".");
// 	}
// }
// person.sayName();

// //ES6
// //Arrow functions keep the same scope as their surrounding code, rather than changing their scope likea traditional function
// var person2 = {
// 	name: "Bryan",
// 	sayName: () => {
// 		// console.log(`Hi, I'm ${this.name}`);
// 		console.log(this);
// 	}
// }

// person2.sayName();

// //In order to access "this" as our object, and thus hhave access to the properties inside of the object (ex: this.name), we need a traditional function so we have a traditional scope


// var person3 = {
// 	name: "Gunnar",
// 	sayName() {
// 		console.log(`Hi, I'm ${this.name}`);
// 	}
// }

// person3.sayName();

//Downfalls of Arrow functions (continues)
//2. arrow functions are always anonymous, so you can'y name them unless you make them a method or the definition of a variable 

//Theyre really useful for non-method functions (for things like forereach)
//They give us better control over some functions than a traditional function would
//for example:
//old way
// var person = {
// 	name: "Amanda",
// 	hobbies: ["Computers", "Knitting", "Singing"],
// 	showHobbies: function() {
// 		var name = this.name;
// 		this.hobbies.forEach(function(hobby) {
// 			console.log(name + " likes " + hobby);
// 		});
// 	}
// }
// person.showHobbies();

// //New Way
// //By using an arrow function inside of our forEach, we can keep the same scope as our showHobbies function has, so we don't have to create hacks to hold on to things like this.name

// var person2 = {
// 	name: "Kenneth",
// 	hobbies: ["whatever", "you know", "that's good"],
// 	showHobbies: function() {
// 		var name = this.name;
// 		this.hobbies.forEach((hobby) => {
// 			console.log(`${this.name} likes ${hobby}`);
// 		});
// 	}
// }

// person2.showHobbies();


//Rest Parameters
//we can view things like the parameters passed into a function, in ES5, with a keyword "arguments"
//Old way
// var sum = function() {
// 	console.log()
// }
// sum(2,3,4,5);

//The above is written as traditional function for a reason
//Arrow functions dont have a sense of their own parameters

// var sum = function() {
// 	var result;
// 	return arguments.map(function(num){
// 		result = result + num;
// 	});
// }
// console.log(sum());


// var sum = function() {
// 	return Array.prototype.map.call(function(arguments, (num) => {
// 		return num + 2;
// 	});
// }
// console.log(sum(1,2,3,4,5));

//There's an easier way!
//Rest Parameters!
// var sum = function (...args) {
// 	return args;
// }
// console.log(sum(1,2,3,4,5));

// var sum = function (...args) {
// 	return args.map((num) => {
// 		return num + 2;
// 	});
// }
// console.log(sum(1,2,3,4,5));

// var multiply = function (mul,...numbers) {
// 	return numbers.map((num) => {
// 		return mul * num;
// 	});
// }

// console.log(multiply(2,12,11,100,50));


//Spread Operators
//The opposite of rest parameters
//Allows you to say that an array should be split into individual parameters

// var max = Math.max(2,5,8,3);
// console.log(max);

// var numbers = [2,3,8,5];
// var max = Math.max(numbers);
// console.log(max);


// //old way
// max = Math.max.apply(null, numbers);
// console.log(max);

// //new ES6 way
// max = Math.max(...numbers);
// console.log(max);

// //can be used to concatenate arrays, as well
// // var moreNumbers = [12,10,45,6];
// // //old way
// // var concatArray = moreNumbers.concat(numbers);
// // console.log(concatArray);

// //New ES6 Way
// var moreNumbers = [12, 10, 45, 6, ...numbers];
// console.log(moreNumbers);
// var letterArray = ["A", "B", "F", "C", "B"];
// var newLetters = ["M", "L", "Q", "X",...letterArray,
// ...numbers, "Z", "Y", ...moreNumbers];
// console.log(newLetters);


//Destructuring
//A new way for us to extract data from arrays and objects, and to pick and choose the values that we want
// var person = {
// 	name: "Kelsey",
// 	age: "23",
// 	hobbies: ["photography", "hiking", "exploring"]
// }

// console.log(person.name);
// console.log(person["age"]);
// function getStuff() {
// 	return "hobbies";
// }

// var dynamicVar = getStuff();
// console.log(person[dynamicVar]);


//New ES6 way
// var  {age: personAge} = person;
// //This means: make a variable name personAge that is equal to the key AGE from the object PERSON
// console.log(personAge);

//There are other ways to write this that are more shorthand
//1) use the key without setting a new variable
// - This is actually not necessarily true
// it also means we might accidentally be overwriting another variable
// var{age} = person;
// console.log(age);

//2) use to grab multiple keys at once
// var {age, hobbies: studentHobbies} = person;
// console.log(age);
// console.log(studentHobbies);

//3) Bracket Notation
//lets us use variables to grab the value of keys inside an object
//however we MUST give it a new variable name for the value
// var studentAge = "age";
// var {[studentAge]: currentStudentsAge} = person;
// console.log(currentStudentsAge);

//Desturcturing With An Array
// var crew = ["Luke", "Leia", "Han", "Chewie", "R2", "3P0"];
//Old way of grabbing items from an array
// var firstMember = crew[0];
// var secondMember = crew[1];

// //ES6 Way of grabbing items from an array, using destructuring
// //note: use square brackets for arrays
// var[firstMember, secondMember] = crew;
// //Because this is all we sent through, JS is going to assume that we mean to start at index 0 and grab index 0 and index 1, and name them all accordingly
// console.log(firstMember, secondMember);

//Let's say we want to skip a portion of the array (in this case, Han. Because he's dead.)
// var [firstMember, secondMember,,fourthMember] = crew;
// console.log(fourthMember);

//Using Rest Parameters in a destructuring expression
// var [firstMember, secondMember, ...theRest] = crew;
// console.log(theRest);

//Adding keys to objects with destructuring
//OLD WAY
// function createSword() {
// 	var length = Math.floor(math.random() * 3 + 1);
// 	var minDmg = Math.ciel(Math.random() * (25 * length-1));
// 	var maxDmg = Math.ciel(Math.random() * (25 * length));
// 	var damage = Math.floor(Math.random() * (max - min + 1) + min);

//old way of defining obj keys using vars of the same name, meant repitition
// 	var sword = {
// 		length: length,
// 		damage: damage
// 	}
// 	return sword;
// }

//ES6 Way with shorthand
// function createSword() {
// 	var length = Math.floor(Math.random() * 3 + 1);
// 	var minDmg = Math.ceil(Math.random() * (25 * length-1));
// 	var maxDmg = Math.ceil(Math.random() * (25 * length));
// 	var damage = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);

// 	//using ES6 we can mix and match with the old way
// 	//If you only pass through a variable name, JS will assume you want to name the key after that var and set it equal to that var's definition
// 	var sword = {
// 		length,
// 		damage,
// 		name: "Excalibur"
// 	}
// 	return sword;
// }
// console.log(createSword());
"use strict";