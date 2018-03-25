import {
  START_TIMER,
  PAUSE_TIMER,
  RESTART_TIMER,
  SET_INITIAL_TIME,
  SET_BLACK_PRESSED,
  SET_WHITE_PRESSED,
} from '../actions/types';

const FIVE_MIN = '5 : 00';
const INITIAL_STATE = {
  paused: true,
  initialTime: FIVE_MIN,
  blackTime: FIVE_MIN,
  whiteTime: FIVE_MIN,
  blackPressed: false,
  whitePressed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        paused: false,
      };
    case PAUSE_TIMER:
      return {
        ...state,
        paused: true,
      };
    case RESTART_TIMER:
      return {
        ...INITIAL_STATE,
        initialTime: state.initialTime,
        blackTime: state.initialTime,
        whiteTime: state.initialTime,
      };
    case SET_INITIAL_TIME:
      return {
        ...INITIAL_STATE,
        initialTime: action.payload,
        blackTime: action.payload,
        whiteTime: action.payload,
      }
    case SET_BLACK_PRESSED:
      return {
        ...state,
        blackPressed: true,
        whitePressed: false,
      };
    case SET_WHITE_PRESSED:
      return {
        ...state,
        blackPressed: false,
        whitePressed: true,
      };
    default:
      return state;
  }
};