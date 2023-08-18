const stackBucket = document.querySelector(".stack-bucket");
    const inputValue = document.querySelector(".input-value");
    const pushButton = document.querySelector(".push-button");
    const popButton = document.querySelector(".pop-button");
    const autoGenerateButton = document.querySelector(".auto-generate-button");

    pushButton.addEventListener("click", () => {
      const value = inputValue.value;
      if (value) {
        const stackElement = document.createElement("div");
        stackElement.textContent = value;
        stackElement.classList.add("stack-element", "new-element");
        stackBucket.appendChild(stackElement);
        inputValue.value = "";

        setTimeout(() => {
          stackElement.classList.remove("new-element");
        }, 10);
      }
    });

    popButton.addEventListener("click", () => {
      const stackElements = document.querySelectorAll(".stack-element");
      if (stackElements.length > 0) {
        const removedElement = stackElements[stackElements.length - 1];
        removedElement.classList.add("removed-element", "poped-element");
        setTimeout(() => {
          stackBucket.removeChild(removedElement);
        }, 200);
      }
    });

    autoGenerateButton.addEventListener("click", () => {
      const randomValue = Math.floor(Math.random() * 100); // Generate random value
      const stackElement = document.createElement("div");
      stackElement.textContent = randomValue;
      stackElement.classList.add("stack-element", "new-element", "pushed-element");
      stackBucket.appendChild(stackElement);

      setTimeout(() => {
        stackElement.classList.remove("new-element");
      }, 10);
    });