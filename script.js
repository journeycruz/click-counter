var count = 0;
var increaseEl = document.querySelector('#increase');
var countEl = document.querySelector('#count');

const setCounterText = () => {
    countEl.textContent = count;
}

increaseEl.addEventListener('click', function() {
    count++;
    setCounterText();
});