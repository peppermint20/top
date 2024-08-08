const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = () => {
  let x = input.value;
  input.value = "";

  let listItem = document.createElement("li");
  let spanItem = document.createElement("span");
  let buttonItem = document.createElement("button");

  listItem.appendChild(spanItem);
  listItem.appendChild(buttonItem);

  spanItem.textContent = x;
  buttonItem.textContent = "Delete";
  ul.appendChild(listItem);

  buttonItem.addEventListener("click", () => {
    ul.removeChild(listItem);
  });
  input.focus();
};
