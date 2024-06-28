// Method Chaining - calling one method after another in one line

let username = window.prompt("Enter your name : ");

// WITHOUT METHOD CHAINING

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

// WITH METHOD CHAINING

username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);


