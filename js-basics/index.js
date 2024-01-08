//This is my first JavaScript program 
//console.log('Hello World');
let name = "Kristijan";
console.log(name);

let firstName = "Kristijan", lastName = "Hornung";
const interestRate = 0.3;
console.log(interestRate);
let name2 = "Kiki"; //String literal
let age = 25; //Number literal
let isApproved = true; //Boolean literal
let defundef = undefined;
let defundef2 = null;
let person = {
    name: "Kristijan",
    age: 25
};
//Dot notation
person.name = "Kiki";
//Bracket notation
person['name'] = "Ikik";
let selection = "age";
person[selection] = 26;
console.log(person.name);
console.log(person.age);
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
//Calculating a value
function square (number) {
    return number * number;
}
greet('Kristijan', 'Hornung');
greet('John', 'Smith');
console.log(square(3));
