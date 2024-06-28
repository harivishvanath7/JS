// spread operator - expands an array into seperate elements
// rest parameter - bundles seperate elements into an array

function openFridge(...foods) {
  console.log(...foods);
}

openFridge("apple", "banana", "grapes", "sureshuh");

// rest parameter to combine strings
function combineString(...fname) {
  return fname.join(" "); // to add space
}

let fullname = combineString("S", "Hari", "Vishvanath", "the", "Great");

console.log(fullname);
