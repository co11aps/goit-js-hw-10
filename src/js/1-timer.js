console.log('Timer');

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
const dateTimePicker = document.querySelector('input#datetime-picker');
const daysCount = document.querySelector('.value[data-days]');
const hoursCount = document.querySelector('.value[data-hours]');
const minutesCount = document.querySelector('.value[data-minutes]');
const secondsCount = document.querySelector('.value[data-seconds]');

let userSelectedDate;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;

      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        color: 'red',
        backgroundColor: '#EF4040',
        messageSize: '16',
        position: 'topCenter',
        iconUrl: './img/stop-icon.svg',
      });
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr(dateTimePicker, options);

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

function timerStart() {
  const intervalId = setInterval(() => {
    const diff = userSelectedDate - Date.now();
    const time = convertMs(diff);

    if (diff < 1000) {
      clearInterval(intervalId);
    }
    tick(time);
  }, 1000);
}

function tick(time) {
  const str = addLeadingZero(time);
  daysCount.textContent = str.days;
  hoursCount.textContent = str.hours;
  minutesCount.textContent = str.minutes;
  secondsCount.textContent = str.seconds;
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {
  timerStart();
  startBtn.disabled = true;
  dateTimePicker.disabled = true;
});
