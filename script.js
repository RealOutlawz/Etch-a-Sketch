//Created constant variabes to make referencing later easier
const container = document.getElementById("container");
const newGridBtn = document.getElementById("newGridBtn");

//Creates the grid and adjust the size of the boxes based on the number provided so they evenly take up the space

function createGrid(num) {
  container.innerHTML = "";
  let boxSize = 960 / num; //960 is the pixel size of the container
  numOfBoxes = num * num;
  for (let i = 0; i < numOfBoxes; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.border = "1px solid black";

    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "black";
    });
    container.appendChild(box);
  }
}
//Starts off with a 16 by 16 grid when first loaded
createGrid(16);

//Resets the grid with a new number and checks if number is equal to or less than 100
newGridBtn.addEventListener("click", () => {
  let gridSize = parseInt(
    prompt("Enter the number of squares per side (100 or less):")
  );
  if (gridSize > 100) {
    alert("Sorry, biggest size is 100. Please try again");
    return;
  }
  createGrid(gridSize);
});
