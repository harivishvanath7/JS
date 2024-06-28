// Define a sample string
let sampleString = "   Hello, World!   ";

// charAt(): Returns the character at a specified index (0-based)
console.log(`charAt(4): ${sampleString.charAt(4)}`); // Output: 'o'

// indexOf(): Returns the index of the first occurrence of a specified value (-1 if not found)
console.log(`indexOf('o'): ${sampleString.indexOf('o')}`); // Output: 5

// lastIndexOf(): Returns the index of the last occurrence of a specified value (-1 if not found)
console.log(`lastIndexOf('o'): ${sampleString.lastIndexOf('o')}`); // Output: 8

// length: Returns the length of the string
console.log(`length: ${sampleString.length}`); // Output: 17

// trim(): Removes whitespace from both ends of a string
console.log(`trim(): '${sampleString.trim()}'`); // Output: 'Hello, World!'

// toUpperCase(): Converts a string to uppercase
console.log(`toUpperCase(): '${sampleString.toUpperCase()}'`); // Output: '   HELLO, WORLD!   '

// toLowerCase(): Converts a string to lowercase
console.log(`toLowerCase(): '${sampleString.toLowerCase()}'`); // Output: '   hello, world!   '

// repeat(): Returns a new string with a specified number of copies of the string
console.log(`repeat(3): '${sampleString.trim().repeat(3)}'`); // Output: 'Hello, World!Hello, World!Hello, World!'

// startsWith(): Checks if a string starts with a specified substring
console.log(`startsWith('Hello'): ${sampleString.startsWith('Hello')}`); // Output: true

// endsWith(): Checks if a string ends with a specified substring
console.log(`endsWith('World!'): ${sampleString.endsWith('World!')}`); // Output: true

// includes(): Checks if a string contains a specified substring
console.log(`includes('World'): ${sampleString.includes('World')}`); // Output: true

// replaceAll(): Replaces all occurrences of a specified substring with another string
console.log(`replaceAll('o', '*'): '${sampleString.replaceAll('o', '*')}'`); // Output: '   Hell*, W*rld!   '

// padStart(): Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length
console.log(`padStart(20, '*'): '${sampleString.padStart(20, '*')}'`); // Output: '***   Hello, World!   '
