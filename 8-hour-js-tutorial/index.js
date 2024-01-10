// console.log("I like pizza!");
// console.log("It's really good!")
//window.alert("I really love pizza!");
// This is a comment
/*
    This 
    is
    a
    multiline
    comment
*/

// let firstName = "Kristijan"; //strings
// let age = 21; //numbers
// let student = false; //booleans

// age = age + 1;
// console.log("Hello", firstName);
// console.log("You are", age, "years old");
// console.log("Enrolled:", student);

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + "years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// let students = 20;
// let extraStudents = students % 3;
// students /= 2;
// console.log(students);
// console.log(extraStudents);

// let result = 1 + 2 * (3 + 4);
// console.log(result);

// let username;
// let username = window.prompt("What's your name?");
// console.log(username);

// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }
// let age2 = window.prompt("How old are you?");
// let age2 = "25";
// console.log(typeof age2);
// age2 = Number(age2);
// console.log(typeof age2);
// age2 += 1;
// console.log("Happy birthday! You are", age2, "years old");

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

// let a;
// let b;
// let c;

//console.log("Side C: ", c);

// document.getElementById("submitButton").onclick = function() {
//     a = document.getElementById("aTextBox").value;
//     a = Number(a);
//     b = document.getElementById("bTextBox").value;
//     b = Number(b);
//     c = Math.pow(a, 2) + Math.pow(b,2);
//     c = Math.sqrt(c);
//     document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }

// let count = 0;
// document.getElementById("decreaseBtn").onclick = function() {
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("resetBtn").onclick = function() {
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("increaseBtn").onclick = function() {
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// let x;
// let y;
// let z;


// document.getElementById("rollButton").onclick = function() {
//     let x = Math.floor(Math.random() * 6) + 1;
//     let y = Math.floor(Math.random() * 6) + 1;
//     let z = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("xlabel").innerHTML = x;
//     document.getElementById("ylabel").innerHTML = y;
//     document.getElementById("zlabel").innerHTML = z;

// }

// let userName = "     Kristijan    ";
// console.log(userName.length);
// let firstLetter = userName.charAt(0);
// console.log(firstLetter);
// console.log(userName.indexOf("r"));
// console.log(userName.lastIndexOf("r"));
// console.log(userName.trim());
// console.log(userName.toLowerCase());
// let phoneNumber = "220-222-1184";
// phoneNumber = phoneNumber.replaceAll("-", "/");
// console.log(phoneNumber);

// let fullName = "Kristijan Hornung";
// let firstName2;
// let lastName2;
// lastName2 = fullName.slice(10);
// firstName2 = fullName.slice(0, fullName.indexOf(" "));
// lastName2 = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName2);
// console.log(lastName2);

// let userName2 = "Kiki";
// let letter = userName2.charAt(0).toLocaleUpperCase().trim();
// console.log(letter);

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
// document.getElementById("myButton1").onclick = function() {
//     const visaBtn = document.getElementById("visaBtn");
//     const mastercardBtn = document.getElementById("mastercardBtn");
//     const paypalBtn = document.getElementById("paypalBtn");

//     if(document.getElementById("myCheckBox1").checked){
//         console.log("You are subscribed!");
//     } else {
//         console.log("You are not subscribed!");
//     }
//     if(visaBtn.checked){
//         console.log("You are paying with Visa");
//     } else if (mastercardBtn.checked){
//         console.log("You are paying with MasterCard");
//     } else if (paypalBtn.checked) {
//         console.log("You are paying with PayPal");
//     } else {
//         console.log("You must select a payment type.");
//     }
// }

// let grade = "A";
// switch(grade){
//     case "A":
//         console.log("You did great!");
//         break;
//     case "B":
//         console.log("You did good!");
//         break;
//     case "C":
//         console.log("You did okay!");
//         break;
//     case "D":
//         console.log("You passed ... barely!");
//         break;
//     case "F":
//         console.log("You failed!");
//         break;
//     default:
//         console.log(grade, "is not a letter grade!");
// }

// let temp = 15;
// let sunny = false;
// if(temp > 0 && temp < 30 && sunny){
//     console.log("The weather is good");
// } else {
//     console.log("The weather is bad");
// }

// let temp2 = 15;
// let sunny2 = true;
// if(!(temp > 0)){
//     console.log("It's cold outside");
// } else {
//     console.log("It's warm outside");
// }
// if(!sunny2){
//     console.log("It's cloudy outside");
// } else {
//     console.log("It's sunny outside");
// }

// let userName3 = "";
// while(userName3 == "" || userName3 == null){
//     userName3 = window.prompt("Enter your name");
// }
// console.log("Hello", userName3)

// for(let i = 1; i <= 10; i+=2){
//     console.log(i);
// }
// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         break;
//     }
//     if(i == 10){
//         continue;
//     }
//     console.log(i);
// }
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

// let adult = checkAge(14);
// console.log(adult);
// function checkAge(age){
//     return age >= 18 ? true : false;
// }
// function checkWinner(win){
//     win ? console.log("You win") : console.log("You lose");
// }
// checkWinner(true);

// let glblvar = "Kristijan";
// doSomething();
// function doSomething(){
//     for(var i = 1; i <= 3; i += 1){
//         console.log(i);
//     }
//     console.log(i);
// }

// let userName5 = "Kristijan";
// let items = 3;
// let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart.");
// console.log("Your total is $", total);

// console.log(`Hello ${userName5}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

// let text = `Hello ${userName5} <br> You have ${items} items in your cart <br>
// Your total is $${total}`;
// console.log(text);

// document.getElementById("myLabel").innerHTML = text;

// let myNum = 0.5;
// myNum = myNum.toLocaleString("en-US");
// console.log(myNum);
// myNum = myNum.toLocaleString("hi-IN");
// console.log(myNum);
// myNum = myNum.toLocaleString("de-DE");
// console.log(myNum);
// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// console.log(myNum);
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
// console.log(myNum);
// myNum = myNum.toLocaleString(undefined, {style: "percent"});
// console.log(myNum);
// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// console.log(myNum);

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;
// document.getElementById("submitBtn").onclick = function(){
//     let guess = document.getElementById("guessField").value;
//     guesses += 1;
//     if(guess == answer){
//         window.alert(`${answer} is the number. It took you ${guesses} guesses.`);
//     } else if (guess < answer){
//         window.alert("Too small!");
//     } else {
//         window.alert("Too large!");
//     }
// }

document.getElementById("submitButton").onclick = function(){
    let temp3;
    if(document.getElementById("cButton").checked){
        temp3 = document.getElementById("textBox1").value;
        temp3 = Number(temp3);
        temp3 = toCelsius(temp3);
        document.getElementById("tempLabel").innerHTML = temp3 + "°C";
    } else if (document.getElementById("fButton").checked){
        temp3 = document.getElementById("textBox1").value;
        temp3 = Number(temp3);
        temp3 = toFahrenheit(temp3);
        document.getElementById("tempLabel").innerHTML = temp3 + "°F";
    } else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp3) {
    return (temp3 - 32) * (5/9);
}
function toFahrenheit(temp3) {
    return temp3 * 9 / 5 + 32;
}

let fruits = ["apple", "orange", "banana"];
fruits[0] = "coconut";
fruits.push("lemon");
fruits.pop();
fruits.unshift("mango");
fruits.shift();
let length = fruits.length;
let index = fruits.indexOf("orange");

console.log(fruits);
console.log(length);
console.log(index);

let prices = [5,10,15,20,25];
for(let i = prices.length - 1; i >= 0; i--){
    console.log(prices[i]);
}
for(let price of prices){
    console.log(price);
}
let fruits2 = ["banana", "apple", "orange", "mango"];
fruits2 = fruits2.sort().reverse();
// for(let fruit of fruits2){
//     console.log(fruit);
// }

let fruits3 = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];
let groceryList = [fruits3, vegetables, meats];

groceryList[0][0] = "eggplants";
groceryList[2][0] = "steak";
for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}

let userName = "Kristijan Hornung";
let numbers = [10,1,2,3,4,5,6,7,8,9];
console.log(...numbers);
console.log(...userName);
let maximum = Math.max(...numbers);
console.log(maximum);

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// console.log(sum(a,b,c,d,e));
// function sum(...numbers){ //rest parameters
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }

// let total = sum(2,3);
// displayDOM(total);
// function sum(x,y){
//     let result = x + y;
//     return result;
// }
sum(2,3,displayDOM);

function sum(x,y,callBack){
    let result = x + y;
    callBack(result);
}
function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}

// let students = ["spongebob", "patrick", "squidward"];
// students.forEach(capitalize);
// students.forEach(print);
// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }
// function print(element){
//     console.log(element);
// }

let numbers2 = [1,2,3,4,5];
let squares = numbers2.map(square);
squares.forEach(print);
let cubes = numbers2.map(cube);
cubes.forEach(print);
function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}

let ages = [18,16,21,17,19,90];
let adults = ages.filter(checkAge);
adults.forEach(print);
function checkAge(element){
    return element >= 18;
}
let prices2 = [5,10,15,20,25];
let total = prices2.reduce(checkOut);
console.log(`The total is: $${total}`);
function checkOut(total, element){
    return total + element;
}

let grades = [100,50,90,60,80,70];
grades = grades.sort(descendingSort);
grades.forEach(print);
grades = grades.sort(ascendingSort);
grades.forEach(print);
function descendingSort(x,y){
    return y - x;
}
function ascendingSort(x,y){
    return x - y;
}

// const greeting = function(){
//     console.log("Hello!");
// }
// greeting();

let count = 0;
document.getElementById("increaseButton").onclick = function(){
    count += 1;
    document.getElementById("newLbl").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("newLbl").innerHTML = count;
}
// function increaseCount(){
//     count += 1;
//     document.getElementById("newLbl").innerHTML = count;
// }
// function decreaseCount(){
//     count -= 1;
//     document.getElementById("newLbl").innerHTML = count;
// }

 const greeting = userName => console.log(`hello ${userName}`);
 greeting("Kristijan");

 const percent = (x, y) => x / y * 100;
 console.log(`${percent(75,100)}%`);

 let grades2 = [100, 50, 90, 60, 80, 70];
 grades2.sort((x,y) =>  y - x);
 grades2.forEach((element) => console.log(element));
 
 let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];  
 shuffle(cards);
 console.log(...cards);
 cards.forEach(card => console.log(card));
 function shuffle (array){
    let currentIndex = array.length;
    while (currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex-=1;
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
 }
 let userName2 = "Kristijan";
 let userInbox = 0;
 login();
 function login(){
    displayUserName();
    displayUserInbox();
    function displayUserName(){
        console.log(`Welcome ${userName2}`);
     }
     function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
     }
 }
  
 const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
 ]);
 let shoppingCart = 0;
 shoppingCart += store.get("t-shirt");
 shoppingCart += store.get("underwear");
 console.log(shoppingCart);
 store.set("hat", 40);
 store.delete("hat");
 console.log(store.has("hat"));
 store.forEach((value, key) => console.log(`${key} $${value}`));
 console.log(store.size);

 const car = {
    model:"Mustang",
    color:"Red",
    year: 2023,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on a brake");
    }
 }
 const car2 = {
    model:"Corvette",
    color:"Blue",
    year: 2024,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on a brake");
    }
 }
 console.log(car2.model);
 console.log(car.color);
 console.log(car.year);
 car.drive();
 car2.brake();

 this.name = "myCoolWindow";
 console.log(this.name);

 class Player{
    score = 0;

    pause(){
        console.log("You paused the game.");
    }
    exit(){
        console.log("You exited the game.");
    }
 }

 const player1 = new Player();
 const player2 = new Player();

 player1.score += 1;
 player1.exit();
 console.log(player1.score);
 console.log(player2.score);

 class Student {
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
 }

 const student1 = new Student("Spongebob", 30, 3.2);
 const student2 = new Student("Patrick", 30, 3.2);

 console.log(student1);
 student1.study();
 student2.study();

 Math.round();
 class Car {
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2..1..GO!");
    }

 }

 const car1 = new Car("Mustang");
 const car3 = new Car("Corvette");
 const car4 = new Car("BMW");
 const car5 = new Car("Ferrari");

console.log(Car.numberOfCars);
console.log(Car.numberOfCars);
console.log(Car.numberOfCars);
Car.startRace();

class Animal {
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
    constructor (name,age,runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
    constructor (name,age,swimSpeed){
        super(name, age);
        this.runSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
    constructor (name,age,flySpeed){
        super(name, age);
        this.runSpeed = flySpeed;
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
console.log(rabbit.alive);
rabbit.eat();
hawk.sleep();
console.log(fish.alive);

const rabbit2 = new Rabbit("rabbit", 1, 40);
const fish2 = new Fish("fish", 2, 80);
const hawk2 = new Hawk("hawk", 3, 200);

console.log(rabbit2.name);
console.log(rabbit2.age);
console.log(rabbit2.runSpeed);
console.log(fish2.name);
console.log(fish2.age);
console.log(fish2.runSpeed);

class Car2{
    constructor(power){
        this._power = power;
        this._gas = 25;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}l (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;
        } else if (value < 0){
            value = 0;
        }
        this._gas = value;
    }
}
let car6 = new Car2(400);
car6.gas = 400;
console.log(car6.power);
console.log(car6.gas);

class Car3 {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`You drive the ${this.model}!`);
    }
}
const car7 = new Car3("Mustang", 2023, "red");
const car8 = new Car3("Corvette", 2024, "blue");
const car9 = new Car3("Lambo", 2022, "yellow");
const car10 = new Car3("Ferrari", 2025, "white");

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}
displayInfo(car7);
function changeColor(car, color){
    car.color = color;
}
changeColor(car8, "purple");
console.log(car8);

const cars = [car7, car8, car9, car10];
console.log(cars[0].model);
startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards2 = [new Card("A", "Hearts")
,new Card("A", "Spades")
,new Card("A", "Diamons")
,new Card("A", "Clubs")
,new Card("2", "Hearts")
,new Card("2", "Spades")
,new Card("2", "Diamons")
,new Card("2", "Clubs")];
console.log(cards2[0].value + cards2[0].suit);
cards2.forEach(card => console.log(`${card.value} ${card.suit}`));

