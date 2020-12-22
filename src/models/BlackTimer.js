import Timer from './Timer';
import { store } from '../ChessHourglass';
import { updateBlackTimer } from '../actions';

class BlackTimer extends Timer {
    constructor(initialTime) {
        super(initialTime);
    }

    startBlackTimer = () => {
        this._timer = this._startTimer(this.currentTime, (updatedTime) => {
            this.currentTime = updatedTime;
            store.dispatch(
                updateBlackTimer(updatedTime)
            );
        });
    }
}

export default BlackTimer;
