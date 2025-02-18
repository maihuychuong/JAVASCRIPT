let counter = 0;
const counterElement = document.getElementById('counter');
const increaseBtn = document.querySelector('.nextBtn');
const decreaseBtn = document.querySelector('.prevBtn');

function updateCounter() {
  counterElement.textContent = counter;
  if (counter > 0) {
    counterElement.style.color = 'green';
  } else if (counter < 0) {
    counterElement.style.color = 'red';
  } else {
    counterElement.style.color = '#333333';
  }
}

increaseBtn.addEventListener('click', function () {
  counter++;
  updateCounter();
});

decreaseBtn.addEventListener('click', function () {
  counter--;
  updateCounter();
});
