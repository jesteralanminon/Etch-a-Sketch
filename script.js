let colorMode = "random"; // default color mode

// function to toggle the color mode
function toggleColorMode(mode) {
  colorMode = mode;
}

// Create the container div
const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
Object.assign(gridContainer.style, {
  display: "flex",
  flexWrap: "wrap",
  border: "5px solid green",
  width: "700px",
  height: "700px",
  alignContent: "flex-start",
  backgroundColor: "#d2dfd8",
  margin: "auto",
});

// Color generator for grids
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// Create grid divs
function createGrid(num) {
  const containerSize = 700; // Size of the container
  const borderSize = 1; // Border size

  // Calculate available space for the grid squares
  const availableSpace = containerSize - (num - 1) * borderSize;

  // Calculate the size of each grid square
  const gridSize = Math.ceil(availableSpace / num);

  gridContainer.innerHTML = ""; // Clear previous grid squares
  for (let i = 0; i < num * num; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    Object.assign(gridSquare.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
      width: gridSize + "px",
      height: gridSize + "px",
      boxSizing: "border-box", // Ensure width and height include padding and border
      transition: "background-color 0.3s ease-in", //add transition hover effect
    });
    gridSquare.addEventListener("click", function () {
      if (colorMode === "random") {
        gridSquare.style.backgroundColor = `#${randomColor()}`; // change color on hover
      } else if (colorMode === "black") {
        gridSquare.style.backgroundColor = "#474747";
      }
    });
    gridContainer.appendChild(gridSquare);
  }
}

// Create container div for buttons
const btnContainer = document.createElement("div");
Object.assign(btnContainer.style, {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
});

const btnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "antiquewhite",
  margin: "0 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5em",
};

// button generate
function buttons() {
  // Generate Button
  const generateBtn = document.createElement("button");
  Object.assign(generateBtn.style, btnStyle);
  generateBtn.style.borderRadius = "0 10px 10px 0";
  generateBtn.style.marginLeft = "0px";
  generateBtn.textContent = "Generate Grid";

  generateBtn.addEventListener("mouseover", function () {
    generateBtn.style.backgroundColor = "lightgreen";
    generateBtn.style.transition = "0.3s";
  });
  generateBtn.addEventListener("mouseout", function () {
    generateBtn.style.backgroundColor = "antiquewhite";
    generateBtn.style.transition = "0.3s";
  });

  generateBtn.addEventListener("click", function () {
    const numInput = document.getElementById("gridSizeInput");
    const num = parseInt(numInput.value);
    if (!isNaN(num)) {
      createGrid(num);
    }
  });
  btnContainer.appendChild(generateBtn);

  // Random Color Button
  const randomColorBtn = document.createElement("button");
  Object.assign(randomColorBtn.style, btnStyle);
  randomColorBtn.textContent = "Random Color";
  randomColorBtn.classList.add("acitve"); // set as active by default
  randomColorBtn.style.backgroundColor = "green";
  randomColorBtn.addEventListener("click", function () {
    if (randomColorBtn.classList.contains("active")) {
      randomColorBtn.classList.remove("active");
      randomColorBtn.style.backgroundColor = "antiquewhite";
      toggleColorMode(null); // toggle off random color mode
    } else {
      randomColorBtn.classList.add("active");
      blackColorBtn.classList.remove("active");
      randomColorBtn.style.backgroundColor = "green";
      blackColorBtn.style.backgroundColor = "antiquewhite";
      toggleColorMode("random");
    }
  });
  btnContainer.appendChild(randomColorBtn);

  // Black Color Button
  const blackColorBtn = document.createElement("button");
  Object.assign(blackColorBtn.style, btnStyle);
  blackColorBtn.textContent = "Black Color";
  blackColorBtn.addEventListener("click", function () {
    if (blackColorBtn.classList.contains("active")) {
      blackColorBtn.classList.remove("active");
      blackColorBtn.style.backgroundColor = "antiquewhite";
      toggleColorMode(null); // toggle off random color mode
    } else {
      blackColorBtn.classList.add("active");
      randomColorBtn.classList.remove("active");
      blackColorBtn.style.backgroundColor = "green";
      randomColorBtn.style.backgroundColor = "antiquewhite";
      toggleColorMode("black");
    }
  });
  btnContainer.appendChild(blackColorBtn);
}

// Create input for grid size
const gridSizeInput = document.createElement("input");
gridSizeInput.id = "gridSizeInput";
gridSizeInput.type = "number";
gridSizeInput.placeholder = "Enter number grid squares";
gridSizeInput.style.outline = "none";
Object.assign(gridSizeInput.style, btnStyle);
gridSizeInput.style.borderRadius = "10px 0 0 10px";
gridSizeInput.style.marginRight = "0px";

// btnContainer.appendChild(gridSizeInput);
btnContainer.appendChild(gridSizeInput);
// Append the button container and grid container to the body
document.body.appendChild(btnContainer);
document.body.appendChild(gridContainer);

buttons();
