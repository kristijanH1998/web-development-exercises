//1.Classes

class Rectangle {
    constructor(name, width, height){
        this.name = name;
        this.width = width;
        this.height = height;
    }
    area() {
        return this.height * this.width;
    }
    perimeter(){
        return 2 * (this.width + this.height);
    }
    isSquare(){
        return this.width === this.height;
    }
    logArea(){
        console.log('Rectangle Area: ' + this.area());
    }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
console.log(Object.getPrototypeOf(square));
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();

//2.Class inheritance

//Parent class
class Shape {
    constructor(name){
        this.name = name;
    }
    logName(){
        console.log('Shape Name: ' + this.name);
    }
}

//Sub class
class Rectangle2 extends Shape {    
    constructor(name, width, height) {
        super(name);
        this.height = height;
        this.width = width;
    }
}
class Circle extends Shape {    
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    logName(){
        console.log('Circle Name: ' + this.name);
    }
}
const rect = new Rectangle2('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const cir = new Circle('Cir 1', 30);
cir.logName();

console.log(rect instanceof Rectangle2);
console.log(rect instanceof Shape);

//3.Static Methods

class Rectangle3 {
    constructor(name, width, height){
        this.name = name;
        this.width = width;
        this.height = height;
    }
    area() {
        return this.height * this.width;
    }
    static getClass(){
        return 'Rectangle3';
    }

}
const rect2 = new Rectangle3('Rect', 10, 10);
console.log(rect2.area());
console.log(Rectangle3.getClass());

//4.bind() and defining 'this'

class App {
    constructor(){
        this.serverName = 'localhost';
        //document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
    }
    getServerName(){
        console.log(this.serverName);
        console.log(this);
    }
}

const app = new App();
app.getServerName();

//5.Getters and Setters With Classes
class Person {
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this.capitalizeFirst(this._firstName);
    }
    set firstName(value){
        this._firstName = this.capitalizeFirst(value);
    }
    get lastName(){
        return this.capitalizeFirst(this._lastName);
    }
    set lastName(value){
        this._lastName = this.capitalizeFirst(value);
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'joe';
person1.lastName = 'smith';
console.log(person1.fullName);
console.log(person1);

//6.Getters and Setters With defineProperty()
//a)Constructor function
function Person2(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    Object.defineProperty(this, 'firstName', {
        get: function(){
            return this.capitalizeFirst(this._firstName);
        },
        set: function(value) {
            this._firstName = value;
        }
    });
    Object.defineProperty(this, 'lastName', {
        get: function(){
            return this.capitalizeFirst(this._lastName);
        },
        set: function(value) {
            this._lastName = value;
        }
    });
    Object.defineProperty(this, 'fullName', {
        get: function(){
            return this.firstName + ' ' + this.lastName;
        }
    });
}
Person2.prototype.capitalizeFirst = function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
const person2 = new Person2('john', 'doe');
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);

//b) Object Literal
const PersonObj = {
    _firstName: 'jane',
    _lastName: 'doe',
    
    get firstName() {
        return Person.prototype.capitalizeFirst(this._firstName);
    },
    set firstName(value) {
        this._firstName = value;
    },
    get lastName() {
        return Person.prototype.capitalizeFirst(this._lastName);
    },
    set lastName(value) {
        this._lastName = value;
    }, 
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const person3 = Object.create(PersonObj);
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.fullName);

//Private Properties Convention
class Wallet {
    #balance = 0;
    #transactions = [];
    // constructor() {
    //     this._balance = 0;
    //     this._transactions = [];
    // }

    deposit(amount) {
        this.#processDeposit(amount);
        this.#balance += amount;
    }
    withdraw(amount) {
        if(amount > this.#balance) {
            console.log("Not enough funds");
            return;
        }
        this.#processWithdraw(amount);
        this.#balance -= amount;
    }

    #processDeposit(amount) {
        console.log(`Depositing ${amount}`);
        this.#transactions.push ({
            type: 'deposit',
            amount
        })
    }
    #processWithdraw(amount) {
        console.log(`Withdrawing ${amount}`);
        this.#transactions.push ({
            type: 'withdraw',
            amount
        })
    }
    get balance() {
        return this.#balance;
    }
    get transactions() {
        return this.#transactions;
    }
}
 const wallet = new Wallet();
 wallet.deposit(500);
 wallet.withdraw(100);
// wallet.deposit(300);
// wallet.withdraw(50);
// console.log(wallet.balance);
// console.log(wallet.transactions);

//ES2022 Class Fields
console.log(wallet.balance);

//Property Flags and Descriptors
/*[[Configurable]] - if 'true', the property can be deleted and these
attributes can be modified, otherwise not
[[Enumerable]] - if 'true', the property will be returned in a
'for..in' loop, otherwise not
[[Writable]] - if 'true', the value of the property can be changed.
otherwise not
[[Value]] - the value of the property
*/

Math.PI = 4;
console.log(Math.PI);

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
};
//console.log(descriptor);

Object.defineProperty(rectObj, 'name', {
    writable: false,
    configurable: false,
    enumerable: false
});
let descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'New name';
delete rectObj.name;
//delete rectObj.width;
console.log(rectObj);

for(let [key, value] of Object.entries(rectObj)) {
    console.log(`${key}: ${value}`); //'name' won't show because its enumerable property is set to false
}

console.log(Object.getOwnPropertyDescriptors(rectObj));

//Freezing and Sealing Properties

//Sealing - prevents properties from being added or removed. Can still be changed.
//Freezing-prevents properties from being added, removed, or changed

const rectObj2 = {
    name: 'Rectangle 1',
    width: 10,
    height: 10
}

Object.seal(rectObj2);
let descriptors = Object.getOwnPropertyDescriptors(rectObj2);
rectObj2.color = 'red';
delete rectObj2.name;
rectObj2.width = 20;
console.log(descriptors);
console.log(rectObj2);

const circleObj = {
    name: 'Circle 1',
    radius: 30
}
Object.freeze(circleObj)
descriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';
console.log(descriptors);

console.log('rectObj is sealed?', Object.isSealed(rectObj2));
console.log('rectObj is frozen?', Object.isFrozen(rectObj2));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isFrozen(circleObj));





