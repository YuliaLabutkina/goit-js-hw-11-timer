import './styles.css';


class CountdownTimer {
    constructor(selector, targetDate) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.daysRef = document.querySelector(`${selector} span[data-value="days"]`);
      this.hoursRef = document.querySelector(`${selector} span[data-value="hours"]`);
      this.minsRef = document.querySelector(`${selector} span[data-value="mins"]`);
      this.secsRef = document.querySelector(`${selector} span[data-value="secs"]`);
    }
};


const newDate = new CountdownTimer('#timer-1', new Date('Jul 01, 2021'));


const timeLeft = (days, hours, mins, secs) => {
    newDate.daysRef.textContent = days;
    newDate.hoursRef.textContent = hours;
    newDate.minsRef.textContent = mins;
    newDate.secsRef.textContent = secs;
};


const countingRemainingTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    timeLeft(days, hours, mins, secs);

};


setInterval(() => {
    const time = newDate.targetDate.getTime() - Date.now();
    countingRemainingTime(time);
}, 1000);