/*
# 1. Name at least three of the primitive data types in Javascript.  Bonus Points if you can name all 8.
string, number, null, undefined, symbol, boolean, NaN

# 2. Name one non-primitive data type.
Object

# 3. What is the difference between a function parameter and a function argument?
Function parameters are specified in function definition and they are placeholders (variables) for values passed to functions,
while function arguments are the actual values being passed to functions in function calls.

# 4. Write at least 3 of the comparison operators in Javascript.
===, ==, !=, !==, <=, >=, <, >

# 5. Name 3 keywords that can be used to declare a variable.
let, const, var

# 6. Create an array called `myArray`.
let myArray = [];

# 7. Create an object called `myObject`.
let myObject = {

};

# 8. Write two functions: one using the `fat arrow` syntax and one using the `function` keyword syntax.
function myFunc () {

};

let myFunc = (() => {

});

# 9. Write a function that returns the number 5.
function return5 () {
    return 5;
}

# 10. Write a function that takes two numbers and returns the sum of them.
function sumTwoNums (a, b) {
    return a + b;
}

# 11. Write a function that takes an array and returns the first index of the array.
function frstIndx (array) {
    return array[0];
}

# 12. Write function that takes an array of numbers and returns the sum of all of the numbers.
function sumAll (array) {
    let sum = 0;
    for(let num in array) {
        sum += num;
    }
    return sum;
}

# 13. Create an object with two properties and show two different ways to access them.
let myObj = {
    name: Kristijan,
    age: 25
}
One way to access:
myObj.name;
Another way to access:
myObj["name"];

# 14. Create a function that takes two numbers and returns the number of times that the first number is divisible by the second number.
function divisibleTimes (num1, num2) {
    let times = 0;
    while(num1 % num2 === 0) {
        times++;
        num1 /= num2;
    }
    return times;
}

# 15. List three array methods.
push, pop, shift, unshift

*/


// Answer 1
//
function divisibleTimes (num1, num2) {
    let times = 0;
    while(num1 % num2 === 0) {
        times++;
        num1 /= num2;
    }
    return times;
}
console.log(divisibleTimes(24,2));