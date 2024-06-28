let num = [1, 2, 3, 4, 5];

let max = Math.max(...num); //Math.max() requires individual argument, not arrays -> so, use spread operator
let min = Math.min(...num);

console.log(max);
console.log(min);

let name = "Hari Vishvanath";
let letters = [...name].join("-"); // Seperates characters and adds "-" between each

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = [...fruits, "brinjal", "coconut"];

console.log(vegetables);
