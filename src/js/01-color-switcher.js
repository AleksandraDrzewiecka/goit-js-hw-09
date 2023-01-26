const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop');

let interval;

stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColor = () => {
    let color = getRandomHexColor();
    document.querySelector('body').style.backgroundColor = color;
};
 

const start = () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    interval = setInterval(changeColor, 1000)
};

const stop = () => {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);