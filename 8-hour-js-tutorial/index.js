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

// let online = true;
// if(online){
//     console.log("You are online!");
// } else {
//     console.log("You are offline!");
// }
document.getElementById("myButton1").onclick = function() {
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(document.getElementById("myCheckBox1").checked){
        console.log("You are subscribed!");
    } else {
        console.log("You are not subscribed!");
    }
    if(visaBtn.checked){
        console.log("You are paying with Visa");
    } else if (mastercardBtn.checked){
        console.log("You are paying with MasterCard");
    } else if (paypalBtn.checked) {
        console.log("You are paying with PayPal");
    } else {
        console.log("You must select a payment type.");
    }
}

let grade = "A";
switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed ... barely!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default:
        console.log(grade, "is not a letter grade!");
}

let temp = 15;
let sunny = false;
if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

let temp2 = 15;
let sunny2 = true;
if(!(temp > 0)){
    console.log("It's cold outside");
} else {
    console.log("It's warm outside");
}
if(!sunny2){
    console.log("It's cloudy outside");
} else {
    console.log("It's sunny outside");
}

// let userName3 = "";
// while(userName3 == "" || userName3 == null){
//     userName3 = window.prompt("Enter your name");
// }
// console.log("Hello", userName3)

// for(let i = 1; i <= 10; i+=2){
//     console.log(i);
// }
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;
    }
    if(i == 10){
        continue;
    }
    console.log(i);
}
// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt("Enter number of rows");
// let columns = window.prompt("Enter number of columns");

// for(let i = 1; i <= rows; i += 1){
//     for(let j = 1; j <= columns; j += 1){
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }

// function startProgram() {
//     let userName4 = "Kristijan";
//     let age4 = 25;
//     happyBirthday(userName4, age4);
// }

// function happyBirthday(userName4, age4) {
//     console.log("Happy", userName4);
//     console.log("Happy");
//     console.log("Happy", age4);
// }
// startProgram();

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");
// area = getArea(width, height);
// console.log("The area is: ", area);
// function getArea(width, height) {
//     let result = width * height;
//     return result;
// }

let adult = checkAge(14);
console.log(adult);
function checkAge(age){
    return age >= 18 ? true : false;
}
function checkWinner(win){
    win ? console.log("You win") : console.log("You lose");
}
checkWinner(true);

let glblvar = "Kristijan";
doSomething();
function doSomething(){
    for(var i = 1; i <= 3; i += 1){
        console.log(i);
    }
    console.log(i);
}

let userName5 = "Kristijan";
let items = 3;
let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart.");
// console.log("Your total is $", total);

console.log(`Hello ${userName5}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);

let text = `Hello ${userName5} <br> You have ${items} items in your cart <br>
Your total is $${total}`;
console.log(text);

document.getElementById("myLabel").innerHTML = text;