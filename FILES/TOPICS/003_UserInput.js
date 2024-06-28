// Accepting user Input

// EASY WAY = window prompt
let userName;

userName = window.prompt("Whats your username: ? ");
console.log(userName);

// PROFESSIONAL WAY = HTML TextBox

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`;
};
