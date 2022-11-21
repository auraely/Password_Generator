// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  var optionsArray= [];
  var lower = false;
  var special = false;
  var upper = false;
  var nums = false;
  
  
  
  function reset(){
  lower = false;
  special = false;
  upper = false;
  nums = false;
  passLength=null;
  optionsArray= [];
  }
  
  
  // Function to prompt user for password options
  
  function getPasswordOptions() {
    
    if (!lower && !special && !upper && !nums)  {
      alert("You must choose minimum one criteria!")
      return;    
    }
    // combinations of arrays based on User options
     if (lower)
     optionsArray=optionsArray.concat(lowerCasedCharacters)
    
     if (special)
     optionsArray=optionsArray.concat(specialCharacters)
  
     if (upper)
     optionsArray=optionsArray.concat(upperCasedCharacters)
  
     if (nums)
     optionsArray=optionsArray.concat(numericCharacters)
  }
    
  
  
  // Function for getting a random element from an array
  function getRandom() {
    //getPasswordOptions()
    for (var i=0; i<optionsArray.length; i++) {
     var randomChar = optionsArray[Math.floor(Math.random() * optionsArray.length)] // we get a random 
     
    return randomChar
    } 
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var finalpassword = "";
    getPasswordOptions();  //we call the funcion to get the array
    //we can use loops to run 50 times
    for (var i=1; i <= passLength; i++)  {    // we run this for how many characters the password is
     finalpassword += getRandom();      //we call the function to get the random character
    }  
    
    //console.log(finalpassword)
    return finalpassword
  }

  var generateBtn = document.querySelector('#generate');

// Write password to the #password input   // 
function writePassword() {
  reset();
  passLength = parseInt(prompt("How many characters would you like your password to have?"));
if(passLength < 10 || passLength > 64)   {
    alert("Password must be between 10 and 64 characters. Please try again!")
    return;
  } 
  else if (passLength === null || !passLength) {
    alert("You must enter a numeric value!")
    return;
  }
    else {
    lower = confirm("Click OK to include lowercase characters");
    special = confirm("Click OK to include special characters");
    upper = confirm("Click OK to include uppercase characters");
    nums = confirm("Click Ok to include numbers");
    }
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;    
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);  


