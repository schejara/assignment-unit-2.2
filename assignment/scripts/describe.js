// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

//1. WRITE YOUR DESCRIPTION HERE

// We create a variable called name and set it to 'Dane' as a String.
// Now name is equal to 'Dane'.
// Then we check if name is equal to 'Mary', Dane is not equal to Mary. so we console.log 'How do you do'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//    We create a variable called secret.
//    We create a another number variable called code and set it to 123.
//    Then we check if code is equal to 123
//    As code is equal to 123 then secret is equal to 'super'. 
//    And then code is multiplied by 2, now code value is 246.
//    So we console.log value of secret variable which is 'super'.
//
//CODE
/*

let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

//3.  We create a variable called isStudent and set it to 'true' as a boolean.
//    We create a second variable called age and set it to 34 as a number.
//    We create a third variable called zip and set it to 55407 as a number.
//    Then we check if isStudent value is equal to true and zip value is greater than 80000 .
//    As isStudent value is equal to true and zip value is not greater than 80000.
//    Then we check second conditon if isStudent value is equal to false or age is less than 30.
//    As isStudent is not equal to false and age is not less than 30.
//    Then we check third condition if isStudent value is equal to true.
//    As isStudent value is equal to true. So we console.log ''Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number -- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne is set to red but the instructions asks to set it to blue.
//Should be let colorOne = 'blue'.
let colorOne = 'red';

//FIX -  colorTwo is set to red but the instructions asks to set it to red.

//Should be  let colorTwo = 'red'.

    let colorTwo = 'blue';

    let mix = true;

    if (mix === true) {

//FIX - Mix value is True but only ColorOne value is set to 'purple'
        but instructions asks to set both colorOne and colorTwo value as purple
        Added missing statement to add colorTwo value as purple
 

//Add missing statement colorTwo = 'purple';

  colorOne = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
//    We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

let temp = 40;

FIX - Variable time is declared as const, but since time can change then
      time variable should also be declared with let
      
Should be  let time = 4; 
const time = 4;

FIX - Condition states that if either temp is greater than 39 or time is greater and
      equal than 4 then cosoloe log the message.
//    but the  instructions asks to check if both the conditions are 'true'
      then only console log the message 'throw away the food!'.

//Should be - if(temp > 39 && time >= 4 )

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
   let age = 21;
   const minAge = 21;

FIX- Condition mentioned is if minAge is less than or equal to 
     but as per instructions DESCRIPTION age should be greater than or equal to minAge    

    //should be if(age >= minAge){

     if(minAge <= age) {

FIX- As per instructions if age is greater than or equal to minAge console log message 'enter'
     but in the code it is specified to console log message 'no entry' which was not instructed. 

   //Should be console.log('enter')

      console.log('no entry');
      } else {

FIX- As per instructions if age is not greater than or equal to minAge consloe log message 'no entry' 
     but in the code it is specified to console log message'enter'

//  should be console.log('no entry')

     console.log('enter');
}
*/

