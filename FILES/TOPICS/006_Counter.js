const decreaseBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("incrementBtn");

let countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

// styles
/*
#countLabel {
    display: block;
    font-size: 5em;
    text-align: center;
  }
  
  #btnContainer, h1 {
    text-align: center;
  }
  
  button {
    padding: 10px 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: rgb(30, 135, 135);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
  }
  
  button:hover {
    background-color: rgb(5, 84, 84);
  }
  */
