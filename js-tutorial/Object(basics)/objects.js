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