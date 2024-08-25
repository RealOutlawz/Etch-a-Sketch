// script.js

function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Clear the container

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    container.appendChild(div);
  }

  // Update grid-square size based on new grid size
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach((square) => {
    square.style.width = `${960 / size}px`;
    square.style.height = `${960 / size}px`;
  });
}

document
  .getElementById("new-grid-button")
  .addEventListener("click", function () {
    let size = prompt(
      "Enter the number of squares per side for the new grid (max 100):"
    );
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
      alert("Please enter a valid number between 1 and 100.");
    } else {
      createGrid(size);
    }
  });

// Initial grid creation
createGrid(16);
