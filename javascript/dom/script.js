const container = document.querySelector("#container");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");

p.style.color = "red";
p.textContent = "Hey I'm Red";

container.appendChild(p);

h3.style.color = "blue";
h3.textContent = "Hey I'm Blue";

container.appendChild(h3);

div.style.backgroundColor = "pink";
div.style.border = "1px solid black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in another div!";
const ptag = document.createElement("p");
ptag.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(ptag);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  event.target.style.background = "blue";
});
