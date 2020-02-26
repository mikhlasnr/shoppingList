const button = document.getElementById("enter");
const input = document.getElementById("userInput");

// ! Input value validation
function checkInputValue() {
  return input.value.length > 0;
}

// ! refactor create list
function createList() {
  const row = document.querySelector(".listBox .row .col-12");

  // Create list box
  const div = document.createElement("div");

  //ada class to list box
  div.classList.add("list");

  // Create list text
  const p1 = document.createElement("p");

  //append userInput to list text
  p1.appendChild(document.createTextNode(userInput.value));

  // create delete button
  const delButton = document.createElement("span");
  delButton.appendChild(document.createTextNode("X"));
  delButton.classList.add("delete");

  // append del button and list text to list box
  div.appendChild(p1);
  div.appendChild(delButton);

  // append list box to row
  row.appendChild(div);

  //reset input value
  input.value = "";

  // ! add events list done and del
  // * List done
  p1.addEventListener("click", function() {
    p1.classList.toggle("listDone");
  });

  // * List del
  delButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
    console.log("work");
  });
}

// !Add events
function addAfterClick() {
  if (checkInputValue()) {
    createList();
  }
}

function addAfterEnter(event) {
  if (checkInputValue() && event.which === 13) {
    createList();
  }
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterEnter);
