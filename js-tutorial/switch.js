        //SWITCH STATEMENTS
//Task

//Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

//solution
// let browser = prompt("What is your favorite Browser?");

 if(browser == "edge"){
     alert('You got the edge');
 }else if(browser == "chrome" || 
     browser =='Firefox' 
     || browser == 'Safari' 
   || browser == 'OPera'){
     alert("we support this browsers to");
 } else{
     alert('Not a valid browswer');
 }

/*
Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {     

  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

let a = +prompt('a?', '')

switch(a){
    case 0:
    alert('0');
    break;

    case 1:
    alert ('2');
    break;

    case 2:
    case 3:
    alert("2,3")
    break;

}

let day = prompt('What day is today?')
switch(day){
   case 'monday'://day === `monday`

     console.log('Plan course structure');
     console.log('Go to coding meetup');
     break;
   case'tuesday':
   console.log(`prepare the tutorial videos`)
   Break;
   case'wednesday':
   case 'thursday':
     console.log(`write code examples`);
     break;
   case 'frday':
     console.log(`record videos`);
     break;
     case 'saturday':
       case 'sunday':
         console.log(`Enjoy the weekend`);
         break;
      default:
       console.log(`not a valid day!`);   
 }