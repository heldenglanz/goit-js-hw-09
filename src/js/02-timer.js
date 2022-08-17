import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const bodyEl = document.querySelector("body");
const inputEl = document.querySelector("#datetime-picker");
const buttonEl = document.querySelector("button");

const timerEl = document.querySelector(".timer");
const daysEl = document.querySelector("[data-days]")
const hoursEl = document.querySelector("[data-hours]")
const minsEl = document.querySelector("[data-minutes]")
const secsEl = document.querySelector("[data-seconds]")

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
// _____
  buttonEl.addEventListener('click', startTime)

let timerId = null;
let choosedTime;

  const flatpickr = flatpickr(".#datetime-picker", options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const thisTime = Date.now();
        if(selectedDates[0]<thisTime){
            alert("Please choose a date in the future")
            buttonEl.disabled = true;
            return
        }
        buttonEl.disabled = false;
choosedTime = selectedDates[0].getTime();
// console.log(choosedTime);
}
});

function startTime(e){
    buttonEl.disabled = true;
    const timerId = setInterval(markedTime, 1000);
function markedTime() {
 let restTime = choosedTime - new Date().getTime();
   console.log(restTime);
   if (restTime < 0){
    clearInterval(timerId);
    return alert("the time has worn off");
}
    const objectData = convertMs(restTime);
    reconverted(objectData)
}
}
function addLeadingZero(value){
    return value.padStart(2, "0");
}
function reconverted({ days, hours, minutes, seconds }){
    daysEl.textContent = addLeadingZero(String(days))
     hoursEl.textContent = addLeadingZero(String(hours))
    minsEl.textContent = addLeadingZero(String(minutes))
      secsEl.textContent = addLeadingZero(String(seconds))
}

























buttonEl.style.padding = "10px"
// buttonEl.style.backgroundColor = "pink"
// buttonEl.style.color = "teal"
// buttonEl.style.border = "none"
bodyEl.style.paddingLeft = "400px"

buttonEl.disabled = true;
