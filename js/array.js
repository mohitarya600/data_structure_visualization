const array = [];

function updateArrayDisplay() {
  const arrayDiv = document.getElementById("array");
  arrayDiv.innerHTML = "";
  
  for (let i = 0; i < array.length; i++) {
    const elementDiv = document.createElement("div");
    elementDiv.className = "array-element";
    elementDiv.textContent = array[i];
    arrayDiv.appendChild(elementDiv);
  }
}

function insert() {
  const value = parseInt(document.getElementById("value").value);
  const index = parseInt(document.getElementById("index").value);
  
  if (index >= 0 && index <= array.length) {
    array.splice(index, 0, value);
    updateArrayDisplay();
    animateInsert(index);
  } else {
    alert("Invalid index");
  }
}

function remove() {
  const index = parseInt(document.getElementById("index").value);
  
  if (index >= 0 && index < array.length) {
    animateRemove(index);
    array.splice(index, 1);
    updateArrayDisplay();
  } else {
    alert("Invalid index");
  }
}

function animateInsert(index) {
  const elementDivs = document.querySelectorAll(".array-element");
  elementDivs[index].classList.add("inserted");
  setTimeout(() => {
    elementDivs[index].classList.remove("inserted");
  }, 300);
}

function animateRemove(index) {
  const elementDivs = document.querySelectorAll(".array-element");
  elementDivs[index].classList.add("removed");
  setTimeout(() => {
    elementDivs[index].classList.remove("removed");
  }, 300);
}

function autoGenerate() {
  array.length = 0;
  for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  updateArrayDisplay();
}
