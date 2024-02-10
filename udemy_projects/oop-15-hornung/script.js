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