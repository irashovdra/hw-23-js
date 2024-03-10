const controls = document.getElementById("controls");
const amountInput = document.getElementById("amountInput");
const renderButton = document.getElementById("renderButton");
const destroyButton = document.getElementById("destroyButton");
const boxesContainer = document.getElementById("boxes");

renderButton.addEventListener("click", () => {
  const amount = parseInt(amountInput.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  clearBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
