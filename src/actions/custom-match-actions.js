import { createAction } from '../utils';
import {
    SET_CUSTOM_HOURS,
    SET_CUSTOM_MINUTES,
    SET_CUSTOM_SECONDS,
    CLEAR_CUSTOM_SETUP,
} from './types';

export const clearCustomSetup = () => { type: CLEAR_CUSTOM_SETUP };

export const setCustomHours = (hr) => createAction(SET_CUSTOM_HOURS, hr);

export const setCustomMins = (min) => createAction(SET_CUSTOM_MINUTES, min);

export const setCustomSecs = (sec) => createAction(
    SET_CUSTOM_SECONDS,
    parseInt(sec) > 59 ? '59' : sec
);
