import './styles.css';


const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');


class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
};


const newDate = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 01, 2021'),
});


const countingRemainingTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    timeLeft(days, hours, mins, secs);

};


const timeLeft = (days, hours, mins, secs) => {
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
};


setInterval(() => {
    const time = newDate.targetDate.getTime() - Date.now();
    countingRemainingTime(time);
}, 1000);