import {
  SET_CUSTOM_HOURS,
  SET_CUSTOM_MINUTES,
  SET_CUSTOM_SECONDS,
  CLEAR_CUSTOM_SETUP,
} from './types';

const generateAction = (type, payload) => {
  return {
    type,
    payload
  };
};

export const clearCustomSetup = () => { type: CLEAR_CUSTOM_SETUP };
export const setCustomHours = (hr) => generateAction(SET_CUSTOM_HOURS, hr);

export const setCustomMins = (min) => {
  return generateAction(SET_CUSTOM_MINUTES, min);
};

export const setCustomSecs = (sec) => {
  const _sec = parseInt(sec) > 59 ? '59' : sec;
  return generateAction(SET_CUSTOM_SECONDS, sec);
};