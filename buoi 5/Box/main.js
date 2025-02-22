let colors = ['#3498db', '#9b59b6', '#e74c3c', '#2c3e50', '#d35400'];

const boxes = document.querySelector('.boxes');
const points = document.querySelector('.points');
const btn = document.getElementById('btn');
let totalBoxes = 0;

function updateTotal() {
  points.innerHTML = totalBoxes;
}

function createBox(colors) {
  const box = document.createElement('div');
  box.className = 'box';
  box.style.backgroundColor = colors;
  boxes.appendChild(box);
  totalBoxes++;
  updateTotal();

  box.addEventListener('click', function () {
    boxes.removeChild(box);
    totalBoxes--;
    updateTotal();
  });
}

colors.forEach((color) => createBox(color));

btn.addEventListener('click', function () {
  colors.forEach((color) => createBox(color));
});
