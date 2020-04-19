
var pwLength = prompt("How long would you like your password? (between 8-128 characters)");
// check password length is within parameters 
while (pwLength < 8 || pwLength > 128) {
    length = prompt("Your password can be between 8-128 characters, please select password length");
}
console.log(pwLength);

// user chooses which characters to use
var wantNumbers = confirm("Do you want it to contain numbers?");
// console.log(wantNumbers);

var wantUpperCase = confirm("Do you want it to contain upper case letters?");
// console.log(wantUpperCase);

var wantLowerCase = confirm("Do you want it to contain lower case letters?");
// console.log(wantLowerCase);

var wantSpecialCharacters = confirm("Do you want it to contain special characters?");
// console.log(wantSpecialCharacters);


var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", ">", "<", ".", ","];

// clears arrays when the user does not choose to use those character types
if (wantNumbers === false) {
    numbers = [];
};
if (wantUpperCase === false) {
    upperCase = [];
};
if (wantLowerCase === false) {
    lowerCase = [];
}
if (wantSpecialCharacters === false) {
    specialCharacters = [];
}


// concatenates the arrays
var password = numbers.concat(upperCase, lowerCase, specialCharacters);
console.log(password);
console.log(password.length);

// the number of times the loop runs is determined by the user's input of the desired password length (pwLength)
for (var i = 0; i < pwLength; i++) {
    // ramdonly chooses a number between 0 - password.length
    var randomIndex = Math.floor(Math.random() * password.length);
    // console.log(randomIndex);
    // takes the random number and assigns it to the character in the password array
    var pass = password[randomIndex];
    console.log(pass);
};




