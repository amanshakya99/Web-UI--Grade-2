const count = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
let counterValue = 0;

function updateCounter() {
    count.textContent = counterValue;
}

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    counterValue--;
    updateCounter();
}

function reset() {
    counterValue = 0;
    updateCounter();
}
