let container = document.getElementById("myContainer");

let h1Element = document.createElement("h1");
h1Element.textContent = "Welcome to JS DOM Manipulations";
container.appendChild(h1Element);

let btnElement = document.createElement("button");
btnElement.textContent = "Change Style";
container.appendChild(btnElement);

btnElement.onclick = function () {
    h1Element.textContent = "Hello";
  h1Element.classList.add("heading");
};

let removebtnElement = document.createElement("button");
removebtnElement.textContent = "Remove Style";
container.appendChild(removebtnElement);

removebtnElement.onclick = function () {
  h1Element.classList.remove("heading");
};