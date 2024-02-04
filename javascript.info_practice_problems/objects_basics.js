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