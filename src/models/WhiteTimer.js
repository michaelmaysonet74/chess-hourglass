import Timer from './Timer';
import { store } from '../ChessHourglass';
import { updateWhiteTimer } from '../actions';

class WhiteTimer extends Timer {
    constructor(initialTime) {
        super(initialTime);
    }

    startWhiteTimer = () => {
        this._timer = this._startTimer(this.currentTime, (updatedTime) => {
            this.currentTime = updatedTime;
            store.dispatch(
                updateWhiteTimer(updatedTime)
            );
        });
    }
}

export default WhiteTimer;
