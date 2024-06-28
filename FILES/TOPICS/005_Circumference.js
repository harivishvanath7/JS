const PI = 3.14159;

let radius = window.prompt;
radius = Number(radius);

document.getElementById("myButton").onclick = function () {
  radius = document.getElementById("myText").value;
  let circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};
