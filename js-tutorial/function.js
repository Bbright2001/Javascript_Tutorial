//FUNCTIONS

//function syntax

/*function functionName(){
functionBody;
}*/
//Function example
  //          let userName = 'John'; 
  // function showMessage() {     
  //    userName = "Bob"; // (1) changed the outer variable 

  //   let message = 'Hello, ' + userName;     
  //    alert(message); 
  //   } 
     
  // console.log( userName ); // John before the function call 
  // showMessage(); 
  // console.log( userName ); // Bob, the value was modified by the function

  //Task 1
  /*
    Rewrite the function using '?' or '||'
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
  */

//Solution
//VARIANT 1 using ?

let age = +prompt("How old are you?");

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

//VARIANT 2 using ||

function checkAge(age){
  return (age > 18) || confirm("Did your parent allow you?");
}
 
//Task 2
/*
Write a function min(a,b) which returns the least of two numbers a and b.
*/

function min(a, b){
  if(a > b){
    return  a;
  } else if(b > a){
      return b;
  } else if(b > a){
      return b;
  } else{
    alert("both numbers are equal");
  }
}

//Task 2
/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
*/
 
function pow(x, n){
  let result = x; 

  for(let i = 1; i < n; i++){
    result *= x;
  }

  return result;
}

let x = prompt('x?');
let n = prompt('n?');

if(n < 1){
  alert(`${n} not a valid input, try numbers greater than 1`);
} else{
  alert(pow(x, n));
}

//Function expression

//example;
let sayHi = function(){
  alert("Hello");
};

//variation 2

function sayHi(){
  alert(Hello);
}

let func = sayHi;
alert(func); // return the code

func(); //return the result of the function

// Difference between the function declaration and Function expression.
//1. func. decl. are Visible any where in the code because the are first created by javascript at initialization, 
// unlike func. expr. which are only visible only after the their code have be executed.


//ARROWS FUNCTIONS
//note: arrow function are function expression 

let sayHi = () => alert('Hello');

let mod = (a, b) => a % b;

alert(mod);

//Task
/*
Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
solution
*/

function ask(question, yes, no) {
  if(confirm(question)) yes()
    else no();
}

ask(
  'Do you agree?',
  () => alert('YOu agreed'),
  () => alert('You cancelled the  execution')
);
