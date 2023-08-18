var container = document.getElementById("array");
  var result = document.getElementById("searchResult");
  var blocks = [];
  var sorted = false;

  function generateRandom() {
    sorted = false;
    container.innerHTML = "";
    for (var i = 0; i < 20; i++) {
      var value = Math.ceil(Math.random() * 100);
      var block = document.createElement("div");
      block.classList.add("block");
      block.style.height = `${value * 3}px`;
      block.style.transform = `translate(${i * 30}px)`;
      var blockLabel = document.createElement("label");
      blockLabel.classList.add("block_id");
      blockLabel.innerText = value;
      block.appendChild(blockLabel);
      container.appendChild(block);
    }
    blocks = document.querySelectorAll(".block");
    result.innerText = "";
  }

  function generateSorted() {
    sorted = true;
    container.innerHTML = "";
    for (var i = 1; i <= 20; i++) {
      var block = document.createElement("div");
      block.classList.add("block");
      block.style.height = `${i * 15}px`;
      block.style.transform = `translate(${(i - 1) * 30}px)`;
      var blockLabel = document.createElement("label");
      blockLabel.classList.add("block_id");
      blockLabel.innerText = i;
      block.appendChild(blockLabel);
      container.appendChild(block);
    }
    blocks = document.querySelectorAll(".block");
    result.innerText = "";
  }

  async function search() {
    var target = parseInt(document.getElementById("searchValue").value);
    if (sorted) {
      await binarySearch(target);
    } else {
      await linearSearch(target);
    }
  }

  async function linearSearch(target) {
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.backgroundColor = "#FF4949";
      await new Promise((resolve) => setTimeout(resolve, 300));
      var value = parseInt(blocks[i].childNodes[0].innerHTML);
      if (value === target) {
        blocks[i].style.backgroundColor = "#13CE66";
        result.innerText = `Element ${target} found at index ${i}`;
        return;
      }
    }
    result.innerText = `Element ${target} not found`;
  }

  async function binarySearch(target) {
    var left = 0;
    var right = blocks.length - 1;
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
      blocks[mid].style.backgroundColor = "#FF4949";
      await new Promise((resolve) => setTimeout(resolve, 300));
      var value = parseInt(blocks[mid].childNodes[0].innerHTML);
      if (value === target) {
        blocks[mid].style.backgroundColor = "#13CE66";
        result.innerText = `Element ${target} found at index ${mid}`;
        return;
      } else if (value < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      blocks[mid].style.backgroundColor = "#6b5b95";
    }
    result.innerText = `Element ${target} not found`;
  }