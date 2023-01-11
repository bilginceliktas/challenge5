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

// Function to prompt user for password options
function getPasswordOptions() {
  var length = prompt("Enter the desired length of the password (at least 10 characters, no more than 64):");
  
  if (length < 10 || length > 64) {
    alert("Invalid length. Must be between 10 and 64 characters.");
    return getPasswordOptions();
  }

  var hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
  var hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  var hasLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
  var hasUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");

  // Ensure that user selected at least one character type
  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
    alert("Must select at least one character type.");
    return getPasswordOptions();
  }

  // Return the options as an object
  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
}
// Function for generating a password based on user-selected options
function generatePassword(options) {
  let password = "";
  let characterSet = "";

  // Build the character set to use for the password based on user options
  if (options.hasSpecialCharacters) {
    characterSet += "!@#$%^&*";
  }
  if (options.hasNumericCharacters) {
    characterSet += "0123456789";
  }
  if (options.hasLowerCasedCharacters) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (options.hasUpperCasedCharacters) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  // If no character types selected then it will prompt an error
  if(!characterSet){
    alert("Must select at least one character type.")
    return getPasswordOptions();
  }
  
  // Generate the password by selecting random characters from the character set
  for (let i = 0; i < options.length; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return password;
}



// Get references to the #generate element and #password input
const generateBtn = document.querySelector('#generate');
const passwordInput = document.querySelector('#password');

// Write password to the #password input
function writePassword() {
  const options = getPasswordOptions();
  const password = generatePassword(options);

  passwordInput.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
