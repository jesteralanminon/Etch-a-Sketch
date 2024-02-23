// Create the container div
const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
Object.assign(gridContainer.style, {
  display: "flex",
  flexWrap: "wrap",
  border: "1px solid green",
  width: "700px",
  height: "700px",
  alignContent: "flex-start",
  backgroundColor: "gray",
});

// Color generator for grids
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// Create grid divs
function createGrid(num) {
  const size = 700 / num;
  gridContainer.innerHTML = ""; // Clear previous grid squares
  for (let i = 0; i < num * num; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    Object.assign(gridSquare.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: `#${randomColor()}`,
    });
    gridContainer.appendChild(gridSquare);
  }
}
// button generator
function addButton() {
  const btn = document.createElement("button");
  Object.assign(btn.style, {
    width: "150px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
  });
  btn.textContent = "Generate Grid";
  btn.addEventListener("click", function () {
    const num = parseInt(prompt("Enter number of grid squares:"));
    if (!isNaN(num)) {
      createGrid(num);
    }
  });
  document.body.appendChild(btn);
}

// Append the container div to the body
document.body.appendChild(gridContainer);

addButton();
