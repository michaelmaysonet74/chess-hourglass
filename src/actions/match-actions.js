import {
  START_TIMER,
  PAUSE_TIMER,
  RESTART_TIMER,
  SET_INITIAL_TIME,
  SET_BLACK_RUNNING_TIME,
  SET_WHITE_RUNNING_TIME,
  SET_BLACK_PRESSED,
  SET_WHITE_PRESSED,
} from './types';

function createAction(type, payload) {
  return { type, payload };
}

export const startTimer       = () => createAction(START_TIMER);
export const pauseTimer       = () => createAction(PAUSE_TIMER);
export const restartTimer     = () => createAction(RESTART_TIMER);

export const setBlackPressed  = () => createAction(SET_BLACK_PRESSED);
export const setWhitePressed  = () => createAction(SET_WHITE_PRESSED);

export const setInitialTime   = (time) => createAction(SET_INITIAL_TIME, time);
export const updateBlackTimer = (time) => createAction(SET_BLACK_RUNNING_TIME, time);
export const updateWhiteTimer = (time) => createAction(SET_WHITE_RUNNING_TIME, time);