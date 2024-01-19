
/* Variables & Data Types */

//Question 1: There are 8 Primitive Data Types in JavaScript, list them all 
//Note: Arrays and Objects are not primitive data-types
//Answer: string, number, BigInt, symbol, boolean, undefined, null

//Question 2: Is JavaScript a dynamically typed Language? or a Statically typed language?
//Answer: dynamically typed language

//Question 3: Variable Scoping
// Part 1 - What 2 types of scope can variables declared with the "var" keyword have?
//Answer: global scope (declared outside of any block of code) or local scope (declared inside a block
//of code such as a function, a foor loop, etc.)

//Part 2 - As of ES6 JavaScript has 2 new variable declaration keywords: "let" and "const".  
//How are let and const variables scoped?
//Answer: globally scoped (visible throughout the entire program)

//Part 3 - What is the difference between "let" and "const"? Hint: it has to do with variable reassignment
//Answer: Declaration with 'const' makes a variable not reassignable (we cannot assign it a different value 
//once it has been declared with 'const' and initialized with some value). Declaration with 'let' allows for
//the variable to be reassigned with a different value after it has been declared and initialized.


//Question 4:

//Part 1: Read the code written below. What is wrong with the code?

// var carBrandOne = "Ford";
// let carBrandOne = "Mercedes";

// comment out the code above and write a correction to the code below this  line
var carBrandOne = "Ford";
carBrandOne = "Mercedes";
//Answer: variable under the name 'carBrandOne' has already been declared and initialized with 'var', meaning that redeclaring it
//with the same name using keyword 'let' will produce an error. To reassign it with a new value 'Mercedes', 
// 'carBrandOne = 'Mercedes'; should be used instead.

//Part 2: Read the code written below. What is wrong with the code?

// const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
// myConstant = 10;
// comment out the code above and write a correction to the code below this  line
const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"};
myConstant.id = 10;
//Answer: the statement 'myConstant = 10;' will cause an error because an object has already been assigned to the variable 'myConstant'
//and giving it a value of 10 which is a number primitive will cause an error. If we wanted to change the id property of myConstant to 10,
//we need to use 'myConstant.id = 10;'


// Part 3: Read the code written below. What will happen? Will this throw an error?
const myConstant2 = {id: 2, name: "Bill", favoriteSnack: "potato chips"}
myConstant2["name"] = "James"
//There won't be any error. The value of the 'name' property of myConstant2 will be changed from 'Bill' to 'James'. That is because 
//even though myConstant2 is declared with a 'const' keyword, that does not mean that myConstant2's is immutable. Its properties
//can still be changed. 

//Part 4: Read the code written below. Look at the function call below the defined function,
// Will declaring a let variables with the same name throw an error in this case? Why or why not?
// What will the function return?

function variablesExample(number){
    let returnMessage = '';
    if(number > 10){
        let message = "the given number is larger than 10";
        returnMessage = message;
    }else if(number === 10){
        let message = "the given number is equvalent to 10";
        returnMessage = message;
    }else{
        let message = "the given number is less than 10";
        returnMessage = message;

    }
    console.log(returnMessage);
    return returnMessage;
}
variablesExample(15);
//Answer: using 'let' to declare 'message' variables will not throw an error. Because each 'message' variable is declared within a
//separate scope, in this case each of if/else if/else blocks has its own scope and each 'message' variable is declared in its own
//specific scope. The function will return the string 'the given number is larger than 10'.

//Question 5: 

// Part-1: What are acceptable characters that you can use to start variable names?
//Answer: lowercase and uppercase letter characters, underscore, '$' sign

//Part-2: What are acceptable characters that you can use to name variables (after the first character of the name)?
// Answer: lowercase and uppercase letters, integers from 0 to 9, underscore, '$' sign

/* END OF VARIABLES AND STRINGS SECTION */



/* Strings */

// Given the string below,
// Part 1 - Write code that will return the 8th character of the string
// Part 2 - Then write code that will return (or console.log) "is a"
// Note - don't convert this string to an array
let coolString = "Hello World is a tradition";
//Part1: 
coolString[7];
//Part2:
console.log(coolString.slice(12, 16));
//Part 3
// How would you return the 4th from the last character from the coolString without just hard coding the index of that character?
coolString[coolString.length - 4];
//Part 4
// Look at the variables below that have been initialized with string data.  
//What are the 2 ways you can concatinate these strings together?
let aString = "Back to "
let bString = "The Future"

//Write the 2 ways of concatinating the strings below this line.  Declare a new variable for the results.
//One way:
let result1 = aString + bString;
//Another way:
let result2 = aString.concat(bString);

/*For Loops */
// You are provided an array of strings below
// an example of a console.log is also provided

let namesArray = ["Joe", "Larry", "Bob", "James", "David", "Tim", "Jimmy", "Jessie", "Marty"];
console.log(namesArray["The first name is: ", 0]);

/*directly below this comment, 
write a for loop that iterates over the namesArray from the beginning to the end of the array and logs the names to the console */
for(let i = 0; i < namesArray.length; i++){
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray from the END to the BEGINnING of the array and logs the names to the console
for(let i = namesArray.length - 1; i >= 0; i--){
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray BUT only logs every other name to the console
for(let i = 0; i < namesArray.length; i++){
    if (i % 2 == 0){
        console.log(namesArray[i]);
    }
}

/*While Loops*/

// Inside the function below, Write a while loop that will console.log("Hello World") "number" times.  Use continueBoolean in your while loop's specified condition

function whileLoopQuestion1(number){
    let continueBoolean = true;
    while(continueBoolean){
        console.log("Hello World");
        number--;
        if(number == 0){
            continueBoolean = false;
        }
    } 
}
whileLoopQuestion1(20);


/* Array Methods */

//What does the Array.prototype.push() method do? What does it return?
//It pushes a new element sent to it to the end of the array it is applied to. It returns new array's length.

//What does the Array.prototype.unshift() method do? What does it return?
//It appends a new element to the start of the array it is applied to. It returns that element's value. 

//What does the Array.prototype.pop() method do? What does it return?
//It removes the last element in the array, and returns the removed element.

//What does the Array.prototype.shift() method do? What does it return?
//It removes the first element in the array, and returns that element.

// What does the Array.prototype.join() method do? What does the 1 optional parameter do to modify how this method works? What does it return?
//It takes all the elements from the array it is applied to and places them in the original order in a new string. The one optional parameter passed to it
//places the value of that parameter in between each pair of elements from the original array into the new string. It returns the new string
//thus created.

//What does the Array.prototype.slice() method do? What will it return?
//It cuts out a portion of the original array and returns that new portion of elements as a new array. It does not modify the original
//array.

//What does the Array.prototype.splice() method do? What will it return?
//It removes elements from or adds new elements to the array it is applied to. It modifies the original array and returns it.

//Look at the Array Below
let nestedArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],[13,14,15],[16,17,18]], 19];
//How many dimensions does this array have?
//3

//How would you access the value 11?
nestedArray[3][0][1];

// how would you access the value 5?
nestedArray[1][1];

// How would you access the last element in the array without knowing the array's length?
nestedArray.reverse()[0];

// How would you access the 3rd element in the array?  What will that element's value be?
nestedArray[2];
//the elements value is [7,8,9]

/* Functions */

/* Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

write a function named convertCtoF.
The function should take 1 argument.
The parameter should be named celsius.

Your function needs to accept an argument of a temperature in Celsius, and return the equivalent temperature in Fahrenheit
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
convertCtoF(30); should return 86;
*/
function convertCtoF (celsius) {
    return celsius * (9/5) + 32;
}
//test:
console.log(convertCtoF(30));