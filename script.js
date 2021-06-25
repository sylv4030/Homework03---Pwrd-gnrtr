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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// define function with prompot for character amounts and an answer variable
function generatePassword(){
  var answer ="";  
  var charAmount = prompt("How long would you like your password between 8 and 128 characters?");
  //check to be sure character amount is not less than 8 or more than 128, if it fails check prompt again
 if(charAmount<8 || charAmount>128){
  //added alert if unallowable number is chosen
   alert("Please choose a number between 8 and 128");
   return generatePassword()
 }
 

 //set variables and use confirm (Thanks for classmate Kyle!) to check what character types to use

  var yesUpper = confirm("Include upper case letters? Click OK for yes or cancel for no");
  var yesLower = confirm("Include lower case letters? Click OK for yes or cancel for no");
  var yesNumber = confirm("Include numbers? Click OK for yes or cancel for no");
  var yesChar = confirm("Include special characters? Click OK for yes or cancel for no");
 

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
  //ran the character confirm again if validate does not pass rather than starting the generatePassword function
  var yesUpper = confirm("Include upper case letters? Click OK for yes or cancel for no");
  var yesLower = confirm("Include lower case letters? Click OK for yes or cancel for no");
  var yesNumber = confirm("Include numbers? Click OK for yes or cancel for no");
  var yesChar = confirm("Include special characters? Click OK for yes or cancel for no");
  

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
 
}
//iterate random choices from the selected character types
//edited as password was one character too long
for(var i = 0; i < charAmount; i++){

 answer += values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
 } 
return answer;

}



