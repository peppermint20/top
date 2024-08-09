let ROW_SIZE = 4;
let COLUMN_SIZE = 4;

const body = document.querySelector("body");
const button = document.createElement("button");

button.textContent = "Click me";
button.style.alignSelf = "center";
button.addEventListener("click", () => {
  let row = +prompt("Enter Row Size");
  let column = +prompt("Enter Column Size");
  ROW_SIZE = row;
  COLUMN_SIZE = column;
  while (boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
  drawGrid();
});

body.appendChild(button);

const boxContainer = document.createElement("div");
boxContainer.style.display = "flex";
boxContainer.style.flexDirection = "column";
boxContainer.style.padding = "15px";
boxContainer.style.justifyContent = "center";

body.appendChild(boxContainer);

drawGrid();
function drawGrid() {
  for (let i = 0; i < ROW_SIZE; ++i) {
    let container = document.createElement("div");
    container.classList.add("container");
    container.style.flex = "1";
    for (let j = 0; j < COLUMN_SIZE; ++j) {
      let div = document.createElement("div");
      div.classList.add("grids");
      div.style.border = "1px solid blue";
      div.style.padding = "5px";

      // Event handling
      div.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
        console.log(`event.target: ${event.target.style}`);
      });
      container.appendChild(div);
    }
    boxContainer.appendChild(container);
  }
}
