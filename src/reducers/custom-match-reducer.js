import {
    SET_CUSTOM_HOURS,
    SET_CUSTOM_MINUTES,
    SET_CUSTOM_SECONDS,
} from '../actions/types';

const INITIAL_STATE = {
    hr: '',
    min: '',
    sec: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CUSTOM_HOURS:
            return {
                ...state,
                hr: action.payload
            };
        case SET_CUSTOM_MINUTES:
            return {
                ...state,
                min: action.payload
            };

        case SET_CUSTOM_SECONDS:
            return {
                ...state,
                sec: action.payload
            };
        default:
            return state;
    }
};