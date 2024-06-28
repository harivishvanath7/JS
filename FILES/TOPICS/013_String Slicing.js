// Define a sample string
let sampleString = "Hello, World!";

// Using slice()
let sliceResult = sampleString.slice(1, 4);
console.log(`slice(1, 4): '${sliceResult}'`); // Output: 'ell'

// Slicing to the end of the string
sliceResult = sampleString.slice(7);
console.log(`slice(7): '${sliceResult}'`); // Output: 'World!'

// Negative slicing
sliceResult = sampleString.slice(-6, -1);
console.log(`slice(-6, -1): '${sliceResult}'`); // Output: 'World'

let email = "harivishvanath7@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
