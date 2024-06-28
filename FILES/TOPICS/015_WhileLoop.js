// While loop - repeat code till a condition is met

let loggedIn = false;

let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter the Username : ");
    password = window.prompt("Enter the password : ");
    
    if(username === "harivishvanath" && password === "1234"){
        loggedIn = true;
        console.log("You're logged in");
    }
    else{
        console.log("Please Log in, Invalid credentials...");
    }
}