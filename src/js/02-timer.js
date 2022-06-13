import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector('#datetime-picker')
const spans = document.querySelectorAll('.value')
const started = document.querySelector('button')
started.disabled = true;
started.addEventListener('click', () => {
})


myInput.addEventListener('change', (event) => {
    const { value } = event.target;
    const selectedDate = new Date(value)
    const currentDate = new Date();

    timeCreater(selectedDate, currentDate)
})

function timeCreater(selectedDate, currentDate) {
    const difference = (selectedDate - currentDate);
    if (difference < 0) {
        return alert('Please choose a date in the future')
    } const { days, hours, minutes, seconds } = convertMs(difference);
    spans[0].textContent = days
    spans[1].textContent = hours
    spans[2].textContent = minutes
    spans[3].textContent = seconds
    console.log(days, hours, minutes, seconds);
    console.log(difference)
}



flatpickr("#datetime-picker", options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    }
})

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

