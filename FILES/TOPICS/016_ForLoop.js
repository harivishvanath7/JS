// For loop - repeat code a limited amount of times

// Example array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < numbers.length; i++) {
  // Skip even numbers
  if (numbers[i] % 2 === 0) {
    continue;
  }

  console.log("Odd number:", numbers[i]);

  // Stop the loop if the number is greater than 7
  if (numbers[i] > 7) {
    break;
  }
}

console.log("Loop ended");
