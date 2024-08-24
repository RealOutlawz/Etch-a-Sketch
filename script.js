const boxContainer = document.getElementById("container");
function makeBox() {
  const box = document.createElement("div");
  box.style.width = "50px";
  box.style.height = "50px";
  box.style.backgroundColor = "gray";
  box.style.margin = "0px";
  return box;
}

for (let i = 0; i < 16; i++) {
  freshBox = makeBox();
  boxContainer.appendChild(freshBox);
}
