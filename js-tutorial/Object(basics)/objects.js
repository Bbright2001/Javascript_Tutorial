// one of two synax can be used to create objects in javascript

let user1 = new Object(); // the object constructor syntax
let user = {} //the object literals

//examples

let student = {
    regNumber: u21cs1130,
    department: "computer science",
    level: 400,
    "likes books" : true,
}

//access properties of an object using dot notatiom

alert(student.level);

alert( user["likes book"] );

//when creating object literals we can use square bracket.. this method is called computed properties
 
let fruit = prompt("How many fruits did you buy?", "Oranges");

let fruitBought = {
    [fruit]: 5,
}
alert(fruitBought.oranges)// this would prompt 5

//all data types when used as a key are converted in to a string
//Special operator "in" allows us to check if a proprter exist in an object
  alert(apple in fruitBought);

  // The "for...in" loop
// allows dev to iterate through the keys in the object

for( let prop in bag );
alert( prop );

//TASKS
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let users = {
    name: "John",
    surname: "Smith",
}

users.name = "pete"; 

delete users.name;

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
 let obj = {}

 function isEmpty(obj) {
    for(let prop in obj){
        return false;
    }
    return true;
 }

 //Task

//  We have an object storing salaries of our team:

 let salaries = {
     John: 100,
     Ann: 160,
      Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let sum = 0;

for (let prop in salaries){
    
    sum += salaries[prop]
}
alert( sum );

//Tasks
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

//P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == Number){

            obj[key] *= 2;
        }
    }
}

//Objects methods "this"

//tasks
// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
importance: 5
let calculator = {
    read(){
        this.a = +prompt("enter any number", 0);
        this.b = +prompt("enter any number", 0);
    },
    sum(){
        this.a + this.b;
    },
    mult(){
        this.a * this.b;
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mult());

//tasks
// There’s a ladder object that allows you to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence, we can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
//the solution is to return this after every call;
let ladder = {
    step : 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep(){
        alert(this.step);
        return this;
    }

}
    ladder
        .up()
        .up()
        .down()
        .showStep()
        .up()
        .showStep()

    //tasks 
//     let counter = {
//   value: 0,
//   inc() {},
//   dec() {},
//   reset() {},
//   show() {}
// }; 
// Make it chainable like:
// counter.inc().inc().dec().show().reset().show();


let counter = {
    value : 0,
    inc() {
        this.value++;
        return this;
    },
    dec(){
        this.value;
        return this;
    },
    reset(){
        this.step = 0;
        return this;
    },
    show(){
        alert(this.value);
        return this
    },
}
counter 
    .inc()
    .inc()
    .dec()
    .show()
    .reset()
    .show()