let count = 0;
const counter = document.getElementById('counter');

function updateCounter() {
  counter.textContent = count;
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}

// Initialize
updateCounter();
