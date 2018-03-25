import {
  START_TIMER,
  PAUSE_TIMER,
  RESTART_TIMER,
  SET_INITIAL_TIME,
  SET_BLACK_PRESSED,
  SET_WHITE_PRESSED,
} from './types';

export const startTimer = () => {
  return {
    type: START_TIMER,
  };
};

export const pauseTimer = () => {
  return {
    type: PAUSE_TIMER,
  };
};

export const restartTimer = () => {
  return {
    type: RESTART_TIMER,
  };
};

export const setInitialTime = (time) => {
  return {
    type: SET_INITIAL_TIME,
    payload: time,
  };
};

export const setBlackPressed = () => {
  return {
    type: SET_BLACK_PRESSED
  };
};

export const setWhitePressed = () => {
  return {
    type: SET_WHITE_PRESSED
  };
};