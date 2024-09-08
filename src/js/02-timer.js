import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateTimePicker = document.getElementById('datetime-picker');
const startBtn = document.getElementsByTagName('button')[0];
const daysLeft = document.getElementsByClassName('value')[0];
const hoursLeft = document.getElementsByClassName('value')[1];
const minutesLeft = document.getElementsByClassName('value')[2];
const secondsLeft = document.getElementsByClassName('value')[3];


let selectedTime = null;
let countdownInterval = null;
startBtn.disabled = true;

const dateTime = flatpickr(dateTimePicker, {
    altInput: true,
    altFormat: "d.m.Y H:i",
    dateFormat: "d.m.Y",
    defaultDate: new Date(),
    enableTime: true,
    time_24hr: true,
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.warning("Please choose a date in the future");
            startBtn.disabled = true;
        } else {
            selectedTime = selectedDates[0];
            startBtn.disabled = false;
            updateTimerUI(selectedTime - new Date());
        }
      },
});


startBtn.addEventListener('click', handleStart);

function handleStart() {
    startBtn.disabled = true;
    dateTime._input.disabled = true;
    countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const remainingTime = selectedTime - currentTime;
    
    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        updateTimerUI(0);
        Notiflix.Notify.success("Time's up!");
        return;
    }
    
    updateTimerUI(remainingTime);
    }, 1000);
}

function updateTimerUI(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysLeft.textContent = addLeadingZero(days);
    hoursLeft.textContent = addLeadingZero(hours);
    minutesLeft.textContent = addLeadingZero(minutes);
    secondsLeft.textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

function addLeadingZero(value){
if (value <10) {
    return value.toString().padStart(2, '0')
} return value;
};

// Styling

const timerDiv = document.querySelector('.timer');
const countdownNumbers = document.querySelectorAll('.timer .value');
const fieldDiv = document.querySelectorAll('.timer .field')
const pickerInput = document.querySelector('.form-control')

startBtn.style.height = '27px';
startBtn.style.top = '56px';
startBtn.style.position = 'absolute';
startBtn.style.left = '260px';

pickerInput.style.fontSize = '18px';
pickerInput.style.fontWeight = 'bold';

timerDiv.style.display = 'flex';
timerDiv.style.flexDirection = 'row';
timerDiv.style.alignItems = 'center';
timerDiv.style.gap = '10px';
timerDiv.style.marginTop = '10px';
timerDiv.style.fontSize = '16px';
timerDiv.style.textTransform = 'uppercase';
timerDiv.style.fontWeight = 'bold';

countdownNumbers.forEach(span => {
  span.style.fontSize = '50px';
});
fieldDiv.forEach(div =>{
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
})