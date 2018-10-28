'use strict';

class StopWatch {
	constructor(parent = document) {
		this.timerId = null;
		this.now = 0;
		this.date = null;
		this.lapCounter = 0;
		this.parent = parent;
		this.clockface = parent.querySelector('.js-time');
		this.startBtn = parent.querySelector('.js-start');
		this.lapBtn = parent.querySelector('.js-take-lap');
		this.stopBtn = parent.querySelector('.js-reset');
		this.laps = parent.querySelector('.js-laps');
	}
	stopTimer(timerId) {
  		clearInterval(timerId);
	}
	counter() {
  		this.timerId = setInterval(() => {
    		this.now = Date.now() - this.date;
    		this.updateClockface(this.clockface, this.now);
    		return this.now;
  		}, 100);
	}
	startTimer() {
  		if (this.startBtn.textContent === "Pause") {
    		this.stopTimer(this.timerId);
  		} else  {
    		this.counter();
  		}
  		this.date = this.startBtn.textContent === "Start" ? Date.now() : Date.now() - this.now;
  		this.startBtn.textContent = this.startBtn.textContent === "Start" ? this.startBtn.textContent = "Pause" :
                         		this.startBtn.textContent === "Pause" ? this.startBtn.textContent = "Continie" :                                 
                                                            		this.startBtn.textContent = "Pause";
		}
	reset() {
  		clearInterval(this.timerId);
  		this.updateClockface(this.clockface, 0);
  		this.startBtn.textContent = "Start";
  		this.now = 0;
  		this.laps.innerHTML = '';
  		this.lapCounter = 0;
	}
	lap () {
  		if (this.clockface.innerHTML === '00:00.0') {
    		return;
  		}
  		else {
    		this.lapCounter += 1;
    		const liLap = document.createElement('li');
    		liLap.textContent = `${this.lapCounter} круг ${this.getFormattedTime(this.now)}`;
    		if (!this.laps.childNodes.length) {
      			this.laps.prepend(liLap);
    		}
    		else if (this.laps.firstElementChild.textContent.slice(-7) === liLap.textContent.slice(-7)) {
      			this.lapCounter -= 1;
      			return;
    		}
    		else {
      			this.laps.prepend(liLap);
    		}
  		}
	}
	run() {
			this.startBtn.addEventListener('click', this.startTimer.bind(this));
			this.stopBtn.addEventListener('click', this.reset.bind(this));
			this.lapBtn.addEventListener('click', this.lap.bind(this));
	}


	getFormattedTime(time) {
  		let date = new Date(time);
  		const min = date.getMinutes() < 10 ? 
        		`0${date.getMinutes()}` :
        		`${date.getMinutes()}`
  		const sec = date.getSeconds() <10 ? 
        		`0${date.getSeconds()}` :
        		`${date.getSeconds()}`;
  		const mSec = Math.floor(date.getMilliseconds()/100);
  		return `${min}:${sec}.${mSec}`;
	}



	updateClockface(elem, time) {
  		elem.textContent = this.getFormattedTime(time);
	}
}
const stopWatch = new StopWatch(document.querySelector('.timer'));
stopWatch.run();