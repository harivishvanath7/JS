const mySubmit = document.getElementById("myButton");
const result = document.getElementById("result");
let age = document.getElementById("ageField");

mySubmit.onclick = function () {
  age = ageField.value;
  age = Number(age);

  if (age >= 100) {
    result.textContent = `You're to old to this site...`;
  } else if (age >= 18) {
    result.textContent = `You're eligible to vote!!`;
  } else if (age == 0) {
    result.textContent = `Age cant be 0!!`;
  } else {
    result.textContent = `Invalid Age!!`;
  }
};
