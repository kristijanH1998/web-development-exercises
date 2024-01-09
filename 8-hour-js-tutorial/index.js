console.log("I like pizza!");
console.log("It's really good!")
//window.alert("I really love pizza!");
// This is a comment
/*
    This 
    is
    a
    multiline
    comment
*/

let firstName = "Kristijan"; //strings
let age = 21; //numbers
let student = false; //booleans

age = age + 1;
console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

let students = 20;
let extraStudents = students % 3;
students /= 2;
console.log(students);
console.log(extraStudents);

let result = 1 + 2 * (3 + 4);
console.log(result);

let username;
// let username = window.prompt("What's your name?");
// console.log(username);

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}
// let age2 = window.prompt("How old are you?");
let age2 = "25";
console.log(typeof age2);
age2 = Number(age2);
console.log(typeof age2);
age2 += 1;
console.log("Happy birthday! You are", age2, "years old");

// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("pizza");
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const pi = 3.14159;
// let radius;
// let circumference;
//radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;
// console.log("The circumference is: ", circumference)
// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;
// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x,y,z);
// maximum = Math.min(x,y,z);
// x = Math.PI;
// console.log(minimum);

let a;
let b;
let c;

//console.log("Side C: ", c);

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aTextBox").value;
    a = Number(a);
    b = document.getElementById("bTextBox").value;
    b = Number(b);
    c = Math.pow(a, 2) + Math.pow(b,2);
    c = Math.sqrt(c);
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

let count = 0;
document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

let x;
let y;
let z;


document.getElementById("rollButton").onclick = function() {
    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    let z = Math.floor(Math.random() * 6) + 1;
    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

}

let userName = "     Kristijan    ";
console.log(userName.length);
let firstLetter = userName.charAt(0);
console.log(firstLetter);
console.log(userName.indexOf("r"));
console.log(userName.lastIndexOf("r"));
console.log(userName.trim());
console.log(userName.toLowerCase());
let phoneNumber = "220-222-1184";
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

let fullName = "Kristijan Hornung";
let firstName2;
let lastName2;
lastName2 = fullName.slice(10);
firstName2 = fullName.slice(0, fullName.indexOf(" "));
lastName2 = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName2);
console.log(lastName2);

let userName2 = "Kiki";
let letter = userName2.charAt(0).toLocaleUpperCase().trim();
console.log(letter);

// let age3 = 6;
// if(age3 >= 18){
//     console.log("You are an adult!");
// } else if (age3 < 0){
//     console.log("You havent been born!");
// } else if (age3 >= 65) {
//     console.log("You are a senior citizen.");
// } else {
//     console.log("You are a child!");
// }

let online = true;
if(online){
    console.log("You are online!");
} else {
    console.log("You are offline!");
}