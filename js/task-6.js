function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create');
const destroyButton = controls.querySelector('button[data-destroy');

destroyButton.classList.add('destroy');

function createBoxes(amount) {
  let size = 30;
  let boxesMarkup = '';

  for (let i = 1; i <= amount; i++) {
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin: 20px;"></div>`;
    size += 10;
  }
  boxes.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);
