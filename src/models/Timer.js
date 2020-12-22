import { startTimer, stopTimer } from '../utils';

class Timer {
    _timer = null;

    constructor(initialTime) {
        this.stopped = true;
        this.paused = true;
        this.currentTime = initialTime;
    }

    _startTimer = startTimer;

    _pauseTimer = () => {
        if (this._timer) {
            stopTimer(this._timer);
        }
    }

    _stopTimer = () => {
        stopTimer(this._timer);
    }
}

export default Timer;
