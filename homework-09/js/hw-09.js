const clockface = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector('.js-take-lap');
const laps = document.querySelector('.js-laps');


let timerId;
let now = 0;
let date;
let lapCounter = 0;

const stopTimer = (timerId) => {
  clearInterval(timerId);
}

const counter = () => {
  timerId = setInterval(() => {
    now = Date.now() - date;
    updateClockface(clockface, now);
    return now;
  }, 100);
}

const startTimer = () => {
  if (startBtn.textContent === "Pause") {
    stopTimer(timerId);
  } else  {
    counter();
  }
  date = startBtn.textContent === "Start" ? Date.now() : Date.now() - now;
  startBtn.textContent = startBtn.textContent === "Start" ? startBtn.textContent = "Pause" :
                         startBtn.textContent === "Pause" ? startBtn.textContent = "Continie" :                                 
                                                            startBtn.textContent = "Pause";
}

const reset = () => {
  clearInterval(timerId);
  updateClockface(clockface, 0);
  startBtn.textContent = "Start";
  now = 0;
  laps.innerHTML = '';
  lapCounter = 0;
}

const lap = () => {
  if (clockface.innerHTML === '00:00.0') {
    return;
  }
  else {
    lapCounter += 1;
    const liLap = document.createElement('li');
    liLap.textContent = `${lapCounter} круг ${getFormattedTime(now)}`;
    if (!laps.childNodes.length) {
      laps.prepend(liLap);
    }
    else if (laps.firstElementChild.textContent.slice(-7) === liLap.textContent.slice(-7)) {
      lapCounter -= 1;
      return;
    }
    else {
      laps.prepend(liLap);
    }
  }
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

function getFormattedTime(time) {
  let date = new Date(time);
  const min = date.getMinutes() < 10 ? 
        `0${date.getMinutes()}` :
        `${date.getMinutes()}`
  const sec = date.getSeconds() <10 ? 
        `0${date.getSeconds()}` :
        `${date.getSeconds()}`;
  const mSec = Math.floor(date.getMilliseconds()/100);
  console.log(`${min}:${sec}.${mSec}`);
  return `${min}:${sec}.${mSec}`;
}



function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

