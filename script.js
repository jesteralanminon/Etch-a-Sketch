// Create the container div
const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
// gridContainer.textContent = "This is a div container";
gridContainer.style.border = "3px solid green";

// // Create the grid square divs
// const gridSquare = document.createElement("div");
// gridSquare.id = "gridSquare";
// gridSquare.textContent = "grid square";
// gridSquare.style.display = "flex";
// gridSquare.style.border = "1px solid black";

// // Append the grid square to the container div
// gridContainer.appendChild(gridSquare);

// Append the container div to the body
document.body.appendChild(gridContainer);

const rows = 16;
const cols = 16;

for (let i = 0; i < rows * cols; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  gridSquare.textContent = "Grid Square ";
  gridSquare.style.border = "1px solid black";
  gridSquare.style.width = "50px";
  gridSquare.style.height = "50px";
  gridSquare.style.flexGrow = "0";

  // append the grid square to the container div
  gridContainer.appendChild(gridSquare);
}
