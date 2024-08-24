const boxContainer = document.getElementById("container");
const box = document.createElement("div");
const newSquare = document.getElementById("newSquare");

//Creates a box with event listeners to change the color when the user hover over them
function makeBox() {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "gray";
  box.style.margin = "0px";

  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "black";
  });

  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "gray";
  });

  return box;
}

//Creates 16 boxes using the makeBox function
for (let i = 0; i < 16; i++) {
  freshBox = makeBox();
  boxContainer.appendChild(freshBox);
}

newSquare.addEventListener("click", () => {
  let amountOfSquares = prompt("Please amount of squares you want per side");
  while (boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
  for (let i = 0; i < amountOfSquares; i++) {
    freshBox = makeBox();
    boxContainer.appendChild(freshBox);
  }
});
