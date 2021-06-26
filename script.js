// Assignment Code
var generateBtn = document.querySelector("#generate");


//Set variables for values and possible characters
let uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specChar = "!#$%&*+,/:;<>?@";
let values = "";
var answer ="";



// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Your password is: "  + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// define function with prompot for character amounts and an answer variable
function generatePassword(){
  var answer ="";  
  var charAmount = prompt("How long would you like your password between 8 and 128 characters?");
  //check to be sure character amount is not less than 8 or more than 128, if it fails check prompt again
 if(charAmount<8)  {
  //added alert if unallowable number is chosen
   alert("Please choose a number greater than 8");
   return generatePassword();
 }

 if(charAmount>128) {
   alert("Please choose a number less than 128");
   return generatePassword();
 }
  //call check function 
  else {check ()
  }
 

 //set variables and use confirm (Thanks for classmate Kyle!) to check what character types to use
 //put this in a new function to keep checking

 function check(){

  let yesUpper = confirm("Include upper case letters? Click OK for yes or cancel for no");
  let yesLower = confirm("Include lower case letters? Click OK for yes or cancel for no");
  let yesNumber = confirm("Include numbers? Click OK for yes or cancel for no");
  let yesChar = confirm("Include special characters? Click OK for yes or cancel for no");
 

//check answers to character types and then use characters set above
if(yesUpper){
  values += uCase
}

if(yesLower){
  values += lCase
}

if(yesNumber){
  values += number
}

if(yesChar){
  values += specChar
}
 

//Try to vailidate that at least one type of character was selected and used
let validate = (yesUpper || yesLower || yesNumber || yesChar)

if (!validate) {
  alert("Please choose a character type");
  check();
}
  
}
//iterate random choices from the selected character types
//edited as password was one character too long


for(var i = 0; i < charAmount; i++){

  answer += values[Math.floor(Math.random() * values.length)];
  } 
 return answer;
 

}




