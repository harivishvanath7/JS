/* .checked -> property that determines the checked state of an 
HTML checkbox or radio button element
*/

const bmwButton = document.getElementById("myRadio1");
const benzButton = document.getElementById("myRadio2");
const audiButton = document.getElementById("myRadio3");

const result = document.getElementById("subResult");

const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
  if (benzButton.checked) {
    result.textContent = "Benz";
  } else if (audiButton.checked) {
    result.textContent = "Audi";
  } else if (bmwButton.checked) {
    result.textContent = "BMW";
  }
};

/*
    <input id="myCheckbox" type="checkbox" />
    <label for="myCheckbox">Visa</label>
    </br>
    </br>
    <input type="radio" name="car" id="myRadio1" value="BMW"/>
    <label for="myRadio1">BMW</label>
    <br/>
    <input type="radio" name="car" id="myRadio2" value="Mercedes-Benz"/>
    <label for="myRadio2">Mercedes-Benz</label>
    <br/>
    <input type="radio" name="car" id="myRadio3" value="Audi"/>
    <label for="myRadio3">Audi</label>
    <br/>

    <button id="mySubmit" type="submit">Submit</button>

    <p id="subResult"></p>
*/
