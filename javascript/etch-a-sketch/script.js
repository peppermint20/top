let ROW_SIZE = 4;
let COLUMN_SIZE = 4;

const body = document.querySelector("body");
const button = document.createElement("button");

button.textContent = "Change Dimensions";
button.style.alignSelf = "center";
button.addEventListener("click", () => {
  let row = +prompt("Enter Row Size lower than 100");
  let column = +prompt("Enter Column Size lower than 100");
  ROW_SIZE = row;
  COLUMN_SIZE = column;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  drawGrid();
});

body.appendChild(button);
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
drawGrid();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function drawGrid() {
  // let dimensions = container.offsetWidth;
  // let flexbasis = (dimensions / ROW_SIZE).toString() + "px";
  console.log();
  for (let i = 0; i < ROW_SIZE; ++i) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < COLUMN_SIZE; ++j) {
      let div = document.createElement("div");
      div.classList.add("grids");
      //div.style.flexBasis = flexbasis;
      div.style.opacity = "1";
      // Event handling
      div.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
        div.style.opacity = div.style.opacity - 0.1;
        console.log(`event.target: ${event.target.style}`);
      });
      row.appendChild(div);
    }
    container.appendChild(row);
  }
}
