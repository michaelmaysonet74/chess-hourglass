import {
    START_TIMER,
    PAUSE_TIMER,
    RESTART_TIMER,
    SET_INITIAL_TIME,
    SET_BLACK_RUNNING_TIME,
    SET_WHITE_RUNNING_TIME,
    SET_BLACK_PRESSED,
    SET_WHITE_PRESSED,
} from '../actions/types';

import BlackTimer from '../models/BlackTimer';
import WhiteTimer from '../models/WhiteTimer';

const FIVE_MIN = '5 : 00';
const INITIAL_STATE = {
    paused: true,
    initialTime: FIVE_MIN,
    blackTimer: new BlackTimer(FIVE_MIN),
    whiteTimer: new WhiteTimer(FIVE_MIN),
    blackPressed: false,
    whitePressed: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_TIMER:
            let blackPressed = true;

            if (!state.blackPressed && state.whitePressed) {
                blackPressed = false;
                state.blackTimer.startBlackTimer();
            } else {
                state.whiteTimer.startWhiteTimer();
            }

            return {
                ...state,
                blackPressed,
                paused: false,
            };

        case PAUSE_TIMER:
            state.blackTimer._pauseTimer();
            state.whiteTimer._pauseTimer();
            return {
                ...state,
                paused: true,
            };

        case RESTART_TIMER:
            state.blackTimer._pauseTimer();
            state.whiteTimer._pauseTimer();
            return {
                ...INITIAL_STATE,
                initialTime: state.initialTime,
                blackTimer: new BlackTimer(state.initialTime),
                whiteTimer: new WhiteTimer(state.initialTime),
            };

        case SET_INITIAL_TIME:
            state.blackTimer._pauseTimer();
            state.whiteTimer._pauseTimer();
            return {
                ...INITIAL_STATE,
                initialTime: action.payload,
                blackTimer: new BlackTimer(action.payload),
                whiteTimer: new WhiteTimer(action.payload),
            }

        case SET_BLACK_RUNNING_TIME:
            return {
                ...state,
                blackTimer: {
                    ...state.blackTimer,
                    currentTime: action.payload,
                }
            }

        case SET_WHITE_RUNNING_TIME:
            return {
                ...state,
                whiteTimer: {
                    ...state.whiteTimer,
                    currentTime: action.payload,
                }
            }

        case SET_BLACK_PRESSED:
            state.blackTimer._pauseTimer();
            state.whiteTimer.startWhiteTimer();
            return {
                ...state,
                blackPressed: true,
                whitePressed: false,
            };

        case SET_WHITE_PRESSED:
            state.whiteTimer._pauseTimer();
            state.blackTimer.startBlackTimer();
            return {
                ...state,
                blackPressed: false,
                whitePressed: true,
            };

        default:
            return state;
    }
};