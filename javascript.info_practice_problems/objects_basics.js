//Hello, object
let user = {
    name: 'John',
    surname: 'Smith'
}
user.name='Pete';
console.log(user.name);
delete user.name;
console.log(user);

// check for emptiness
let isEmpty = function (obj){
    for(let key in obj){
        if(key) {
            return false;
        }
    }
    return true;
}
let schedule = {};
console.log(isEmpty(schedule));
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule));
delete schedule['8:30'];
console.log(isEmpty(schedule));

//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = function (obj) {
    var s = 0;
    for(let p in obj) {
        s += obj[p];
    }
    return s;
}
console.log(sum(salaries));
console.log(sum({}));

//Multiply numeric property values by 2
function multiplyNumeric(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}
let menu =  {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);

//Using 'this' in object literal
function makeUser() {
    return {
        name: 'John',
        ref: this
    };
}
let user2 = makeUser();
console.log(user2.ref.name); //outputs an error

//Calculator
let calculator = {
    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep: function(){
        console.log(this.step);
        return this;
    }
}
ladder.up().down().up().showStep();

//Two functions - one object
let obj = {};
function A() {return obj;};
function B() {return obj;};
let a = new A();
let b = new B();
console.log(a == b); //returns true

//Create new Calculator
function Calculator(){
    this.read = function(){
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
    this.sum = function(){
        return this.a + this.b;
    },
    this.mul = function(){
        return this.a * this.b;
    }
}
// let calculator2 = new Calculator();
// calculator2.read();
// console.log("Sum=" + calculator2.sum());
// console.log("Mul=" + calculator2.mul());

//Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (){
        this.value += +prompt("new number?", 0);
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);