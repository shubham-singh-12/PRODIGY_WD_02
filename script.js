let startTime, elapsedTime = 0, timerInterval;
const display = document.getElementById('display');
const lapTimes = document.getElementById('lapTimes');

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10);
    toggleButtons(true);
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    toggleButtons(false);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    lapTimes.innerHTML = '';
    toggleButtons(false);
}

function recordLap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapTimes.appendChild(lapItem);
}

function formatTime(time) {
    const date = new Date(time);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function toggleButtons(running) {
    document.getElementById('startBtn').disabled = running;
    document.getElementById('pauseBtn').disabled = !running;
    document.getElementById('resetBtn').disabled = running;
    document.getElementById('lapBtn').disabled = !running;
}

window.onload = function () {
    resetStopwatch();
};
