// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const myArrayLower = Array.from(Array(26)).map((e,i)=>i + 65);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const myArrayUpper = Array.from(Array(26)).map((e,i)=>i + 97);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const arrayNumeric = ['0','1','2','3','4','5','6','7','8','9'];

const arraySpecialCharacter = ['!','@','#','$','%','^','&','*','(',')'];

function generatePassword() {
  var results="";
  var numberOfCharacters = window.prompt("How many characters would you like your password to contain?");
  var characterQuantity = parseInt(numberOfCharacters);
  // if(characterQuantity>= 8 && characterQuantity <= 128) {
    while(characterQuantity< 8 || characterQuantity > 128) {
      alert("Enter correct character count.");
      numberOfCharacters = window.prompt("How many characters would you like your password to contain?");
      characterQuantity = parseInt(numberOfCharacters);

    }
    
    var upperCase = window.confirm("Click OK to confirm uppercase letters.");
    var lowerCase = window.confirm("Click OK to confirm lowercase letters.");
    var numeric = window.confirm("Click OK to confirm including numeric characters.");
    var specialCharacter = window.confirm("Click OK to confirm special characters.");
    var okbutton= [];
    
    if(upperCase == true) okbutton.push(alphabetUpper);
    if(lowerCase == true) okbutton.push(alphabetLower);
    if(numeric == true) okbutton.push(arrayNumeric)
    if(specialCharacter == true) okbutton.push(arraySpecialCharacter);

    for(var i=0;i<characterQuantity; i++) {
      var storeButton = Math.floor(Math.random()*okbutton.length);
      results+=okbutton[storeButton][Math.floor(Math.random()*okbutton[storeButton].length)];
      // results+=myArrayLower[Math.floor(Math.random()*26)];
      // results+=arrayNumeric[Math.floor(Math.random()*10)];
      // results+=arraySpecialCharacter[Math.floor(Math.random()*10)];
    }
  // } else {
  //   alert("Please enter a number between 8 and 128.");
  // }
    return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
