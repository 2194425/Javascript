const container = document.querySelector(".container");
const Button = document.querySelector(".button");

let elementCount = 0;

Button.addEventListener("click", function () {
  while (elementCount < 49) {
    elementCount++;

    const newElement = document.createElement("div");
    newElement.classList.add("container__item");
    newElement.textContent = `Element ${elementCount}`;

    container.appendChild(newElement);
  }
  Button.disabled = true;
  Button.textContent = "Limit reached";
});
