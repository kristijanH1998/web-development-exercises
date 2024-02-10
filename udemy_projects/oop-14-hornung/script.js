//Object literals and 'this' keyword
const rectange = {
    name: 'Rectangle 1',
    width: 20,
    height: 10,
    area: function() {
        return this.width * this.height;
    },
};

const rectangle2 = {
    name: 'Rectangle 2',
    width: 30,
    height: 20,
    area: function() {
        return this.width * this.height;
    }
}

console.log(rectangle2.area());

//Constructor functions
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.height * this.width;
    };
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 20, 10);
const rect3 = new Rectangle('Rectangle 3', 30, 30);
console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area());

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);

//Literals vs. Built-in Constructors
const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//boxing:
console.log(strLit.toUpperCase());
console.log(strLit[0]);
//unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());
console.log(strLit.constructor);
console.log(strObj.constructor);
console.log(strLit instanceof String);
console.log(strObj instanceof String);

const arrLit = [1,2,3,4,5];
const arrObj = new Array (1,2,3,4,5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

const funcLit = function (x) {
    return x * x;
}
console.log(funcLit, typeof funcLit);
console.log(funcLit(5));
const funcObj = new Function('x', 'return x * x');
console.log(funcObj(3));
const obj1 = {};
const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);

//Working with object properties
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.height * this.width;
    };
}

const rect11 = new Rectangle('Rectangle 1', 20, 20);
const rect22 = new Rectangle('Rectangle 2', 20, 30);
console.log(rect11.name, rect22.width);
console.log(rect11['width']);
//add property
rect11.color = 'red';
rect22.perimeter = () => 2 * (rect22.width + rect22.height);
//delete property
delete rect22.perimeter;

console.log(rect22.hasOwnProperty('color'));
console.log(rect11.hasOwnProperty('color'));
console.log(rect22);
console.log(Object.keys(rect11));
console.log(Object.values(rect22));
console.log(Object.entries(rect22))
for(let [key, value] of Object.entries(rect11)){
    if(typeof value !== 'function'){
        console.log(`${key}-${value}`);
    }
}
//console.log(rect22);
const rect = new Rectangle('Rect', 10, 10);
console.log(Object.getPrototypeOf(rect));

function Rectangle2(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
}
Rectangle2.prototype.area = function(){
    return this.width * this.height;
}
Rectangle2.prototype.perimeter = function(){
    return 2 * (this.width + this.height);
}
Rectangle2.prototype.isSquare = function(){
    return this.width === this.height;
}
Rectangle2.prototype.changeName = function(newName){
    return (this.name = newName);
}
const rect4 = new Rectangle2('Rect', 10, 10);
const rect5 = new Rectangle2('Rect', 30, 40);

console.log(rect4);
console.log(rect4.area());
console.log(rect4.perimeter());
console.log(rect4.isSquare());
rect4.changeName('Test');
console.log(rect4.name);
console.log(rect5.area());

const rectanglePrototypes = {
    area: function(){
        return this.width * this.height;
    },
    perimeter: function(){
        return 2 * (this.width + this.height);
    },
    isSquare: function(){
        return this.height === this.width;
    }
}
function createRectangle(height, width) {
    return Object.create(rectanglePrototypes, {
        height: {
            value: height
        },
        width: {
            value: width
        },
    });
}
const rect6 = createRectangle(10,20);
const rect7 = createRectangle(30,30);
console.log(rect6);
console.log(rect6.area());
console.log(rect6.isSquare());
console.log(rect7);
console.log(rect7.area());

function Shape(name) {
    this.name = name;
}
Shape.prototype.logName = function(){
    console.log(`Shape Name: ${this.name}`);
}
function Rectangle3(name, height, width) {
    Shape.call(this, name);
    this.height = height;
    this.width = width;
}
//Inherits Shape prototypes
Rectangle3.prototype = Object.create(Shape.prototype);
function Circle(name, radius){
    Shape.call(this, name);
    this.radius = radius;
}
//Inherits Shape prototypes
Circle.prototype = Object.create(Shape.prototype);
//Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect8 = new Rectangle3('Rectangle 1', 20, 20);
const cir = new Circle('Circle 1', 30);
console.log(rect8, cir);
rect8.logName();
cir.logName();
// console.log(Circle.prototype);
// console.log(Shape.prototype);
console.log(rect8.constructor);
rect8.logName();
cir.logName();

function Player(name){
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}
Player.prototype.gainXp = function(xp){
    this.points += xp;

    if(this.points >= 10){
        this.lvl++;
        this.points -= 10;
    }
    console.log(this.describe());
}
Player.prototype.describe = function(){
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}
const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(4);
player2.gainXp(7);
player1.gainXp(5);
player2.gainXp(1);
player1.gainXp(7);
player2.gainXp(9);
player1.gainXp(5);
player2.gainXp(2);
console.log(player1.describe());
console.log(player2.describe());
