//create class that are extended so we can use super() to show the car's make,model and year
//new model car should display make, model, and year with a call() function

//make
//model
//year
class Toyota {
    constructor(){
        this.make = "Toyota";
    }

    slogan(){
        //display make slogan
        console.log("Let's Go Places");
    }
}

class Tacoma extends Toyota {
    constructor (year) {
        super();
        this.model = "Tacoma";
        this.year = year;
    }

    call() {
        console.log(`Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
    }
}

class Prius extends Toyota {
    constructor (color, price) {
        super();
        this.color = color;
        this.price = price;
    }
    colorAndPrice() {
        console.log(`Color: ${this.color} Price: ${this.price} Make: ${this.make}`);
    }
}

class Corolla extends Toyota {
    constructor(mileage, price){
        super();
        this.mileage = mileage;
        this.price = price;
    }
    mileageAndPrice(){
        console.log(`Miles travelled: ${this.mileage}; Price: ${this.price}`);
    }
}

const myTacoma = new Tacoma(2007);
const yourTacoma = new Tacoma(2024);
console.log(myTacoma);
console.log(yourTacoma);
myTacoma.call();
myTacoma.slogan();

const myToyota = new Toyota();
myToyota.slogan();
//myToyota.call();

const aPrius = new Prius('red', 12000);
console.log(aPrius);
aPrius.colorAndPrice();

const aCorolla = new Corolla(100000, 5000);
aCorolla.mileageAndPrice();