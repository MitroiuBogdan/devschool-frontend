function onResetClick() {
  cronometer.reset();
}
function onStartClick() {
  cronometer.start();
  document.getElementById("start-btn").disabled = true;
}
function onStopClick() {
  cronometer.stop();
  document.getElementById("start-btn").disabled = false;
}

function count() {
  cronometer.currentMilliSec++;
  cronometer.convertTime();
  render();
}

function render() {
  document.getElementById("count-hours").innerHTML = cronometer.currentHour;
  document.getElementById("count-minutes").innerHTML = cronometer.currentMin;
  document.getElementById("count-seconds").innerHTML = cronometer.currentSec;
  document.getElementById("count-milliseconds").innerHTML =
    cronometer.currentMilliSec;
}

const cronometer = {
  currentMilliSec: 0,
  currentSec: 0,
  currentMin: 0,
  currentHour: 0,
  counter: 0,

  start() {
    this.counter = setInterval(count, 10);
  },
  stop() {
    clearInterval(this.counter);
  },
  reset() {
    this.currentMilliSec = 0;
    this.currentSec = 0;
    this.currentMin = 0;
    this.currentHour = 0;

    render();
  },
  convertTime() {
    if (this.currentMilliSec >= 100) {
      this.currentMilliSec = 0;
      this.currentSec++;
    }

    if (this.currentSec >= 60) {
      this.currentSec = 0;
      this.currentMin++;
    }
    if (this.currentMin >= 60) {
      this.currentMin = 0;
      this.currentHour++;
    }
  }
};
