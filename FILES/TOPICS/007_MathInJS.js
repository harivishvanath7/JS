// Math in JS

// Rounding
console.log(Math.round(4.5)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.trunc(4.965756)); // 4

// Exponentiation and Roots
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// Max and Min
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(1, 3, 2)); // 1

// Absolute Value and Sign
console.log(Math.abs(-5)); // 5
console.log(Math.sign(3)); // 1

// Trigonometric Functions
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1

// Random Number Generation
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);
