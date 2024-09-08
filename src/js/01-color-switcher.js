const startBtn = document.getElementsByTagName('button')[0];
const stopBtn = document.getElementsByTagName('button')[1];
const body = document.getElementsByTagName('body')[0];

console.log(startBtn, stopBtn);

let intervalID;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);

function changeColor () {
    body.style.backgroundColor = getRandomHexColor();
};

function handleStart(event){
    startBtn.disabled = true;
    intervalID = setInterval(changeColor, 1000);
}

function handleStop(event){
    clearInterval(intervalID);
    startBtn.disabled = false;
};
