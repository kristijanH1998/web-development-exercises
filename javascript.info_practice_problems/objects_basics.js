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
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);

//Working with prototype
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); //prints 'true'
delete rabbit.jumps;
console.log(rabbit.jumps); //prints 'null'
delete animal.jumps;
console.log(rabbit.jumps); //prints 'undefined'

//Searching algorithm
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};
console.log(pockets.glasses);
console.log(pockets.pen);
console.log(bed.glasses);

//it takes the same amount of time to get 'glasses' value as head.glasses and as pockets.glasses

//Where does it write?
let animal2 = {
    eat() {
        this.full = true;
    }
};
let rabbit2 = {
    __proto__: animal2
};

rabbit2.eat(); //the rabbit2 object will receive the property 'full'
console.log(animal2.full); //undefined because eat() hasn't been called from animal2
console.log(rabbit2.full); //true, applies to the rabbit2 object even though this property was created by calling eat() method of animal2
//The method rabbit2.eat is first found in the prototype(animal2), then executed with this=rabbit2.

//Why are both hamsters full?
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};
let speedy = {
    __proto__: hamster
}
let lazy = {
    __proto__: hamster
}
//This one found the food
speedy.eat("apple");
console.log(speedy.stomach); //outputs an array containing 'apple'
//This one also has it, why? fix please.
console.log(lazy.stomach);
//the fix is to add 'stomach: []' property/value pair to speedy and lazy.
//'this' in 'hamster' refers to the hamster object because speedy and lazy objects
//don't have 'stomach' property declared
let hamster2 = {
    eat(food) {
        this.stomach.push(food);
    }
};
let speedy2 = {
    stomach: [],
    __proto__: hamster
}
let lazy2 = {
    stomach: [],
    __proto__: hamster
}
speedy2.eat("apple");
console.log(speedy2.stomach);
console.log(lazy2.stomach); //now shows empty 'stomach' array
//Both for lazy.stomach.push(...) and speedy.stomach.push(), the property stomach is found in the prototype (as it’s not in the object itself('lazy' object or 'speedy' object)), then the new data is pushed into it.

//another fix:
/*
let hamster = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>
*/

//Changing prototype
function Rabbit(){}
Rabbit.prototype = {
    eats: true
};
let rabbit3 = new Rabbit();
//Rabbit.prototype.eats = false;
delete Rabbit.prototype.eats;
console.log(rabbit3.eats); //undefined

//Create an object with the same constructor
let obj2 = new obj.constructor();
console.log(obj2);

//Add method "f.defer(ms)" to functions
function f(){
    console.log("Hello");
}
function f2(){
    console.log("Hello2");
}
f.__proto__.defer = function(time){
    setTimeout(this, time);
}
/*Also works: 
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};
*/
// f.defer(2000);
// f2.defer(4000);
//Add the decorating "defer()" to functions
function f3(a,b){
    console.log(a + b);
};
Function.prototype.defer = function(ms){
    let f = this;
    console.log(this);
    console.log(f);
    return function(...args){
        console.log(this);
        setTimeout(() => f.apply(null, args), ms); //'setTimeout(() => f.apply(this, args), ms);' also works
    }
};
//The approach below won't work because arrow functions lack their own context (lexical binding issue); they use the surrounding scope as the scope for 'this', which is the whole index.html in this case, not f3 or any other calling function
// Function.prototype.defer = ms => (...args) => {
//     let f = this;
//     console.log(this);
//     (setTimeout(() => f3.apply(null, args), ms));
// };

//f3.defer(1000)(5,7);

function f5 (ms){
    return function(...args1){
        // setTimeout(() => {
        //     console.log(args1.reduce((temp, a1) => temp + a1, 0));
        // }, ms);
        //let sum1 = args1.reduce((temp, a1) => temp + a1, 0);
        return function(...args2){
            return args2.reduce((temp2, a2) => temp2 + a2, 0);
        }
    }    
}
console.log(f5(3000)(1,2,3,4,5)(1,2));
function d() {
    return function e() {
      return function f(){
        //alert('F');
      }
    }
  }
d()()();

//Add toString to the dictionary
let dictionary = Object.create(null, {
    toString: {
        value(){
            return Object.keys(this);
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
    console.log(key);
}
console.log(dictionary);
console.log(dictionary.toString());

//The difference between calls           
function Rabbit(name){
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};
let rabbit4 = new Rabbit("Rabbit");

rabbit4.sayHi(); //prints 'Rabbit'; this==rabbit4
Rabbit.prototype.sayHi(); //undefined; this==Rabbit.prototype
Object.getPrototypeOf(rabbit4).sayHi(); //undefined; this==Rabbit.prototype
rabbit4.__proto__.sayHi(); //undefined; this==Rabbit.prototype

//Rewrite to class
//Functional style:
// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();
  
//class syntax:
class Clock {
    constructor({ template }){
        this.template = template;
    }
    render(){
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    };
    stop(){
        clearInterval(this.timer);
    };
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock2 = new Clock({template: 'h:m:s'});
//clock2.start();

//Error creating an instance
class Animal2 {
    constructor(name){
        this.name = name;
    }
}
class Rabbit2 extends Animal2 {
    constructor(name){
        super(name); //statement that was missing
        this.name = name;
        this.created = Date.now();
    }
}
let rabbit5 = new Rabbit2("White Rabbit");
console.log(rabbit5.name);

class Clock2 {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock2 {
   constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
    //above two lines can also look like this:
    //
    //this.precision = 1000;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
let myClock = new ExtendedClock({template: 'h:m:s'});
//myClock.start();

//Class extends Object?
class Rabbit3 extends Object {
    constructor(name){
        //we must call parent constructor with 'super()' before using 'this'
        super();
        this.name = name;
    }
}
let rabbit6 = new Rabbit3("Rab");
//hasOwnProperty method is from Object.prototype
console.log(rabbit6.hasOwnProperty('name'));
console.log(Rabbit3.prototype);
console.log(Rabbit3.__proto__);
console.log(Rabbit3.prototype.__proto__);

/*
alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
alert( Rabbit.__proto__ === Object ); // (2) true
*/

//Strange instanceof
function A() {}
function B() {}
A.prototype = B.prototype = {};
let a2 = new A();
console.log(a2 instanceof B); //prints 'true' because the same empty object is set as a prototype of both A and B in line 535; 
//therefore instanceof goes up the prototype chain and encounters that common prototype of A and B
console.log(a2.__proto__);
console.log(a2.prototype);
console.log(A.prototype);
console.log(A.prototype === B.prototype);
console.log(a2.__proto__ === B.prototype)