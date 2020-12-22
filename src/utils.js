import { Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import moment from 'moment';

const { width } = Dimensions.get('window');

const IPHONE_PLUS_WIDTH = 414;
const IPHONE_SE_WIDTH = 320;
const ONE_SECOND = 1000;

export const isIphonePlus = () => width === IPHONE_PLUS_WIDTH;

export const isIphoneSE = () => width === IPHONE_SE_WIDTH;

export const createCustomInitialTime = (args) => {
    const { hr, min, sec } = args;
    let initialTime = '';

    if (hr.length > 0) {
        initialTime += `${hr} : `;
    }

    if (min.length > 0) {
        if (hr.length > 0 && min.length === 1) {
            initialTime += `0${min} : `;
        }
        else {
            initialTime += `${min} : `;
        }
    }
    else {
        initialTime += '00 : ';
    }

    if (sec.length > 0) {
        initialTime += sec.length === 1 ? `0${sec}` : sec;
    }
    else {
        initialTime += '00';
    }

    if (initialTime === '00 : 00') {
        initialTime = '5 : 00';
    }

    return initialTime;
};

export const correctHours = (text) => parseInt(text) > 23 ? '23' : text;

export const correctMinsAndSecs = (text) => parseInt(text) > 59 ? '59' : text;

let timer;
export const stopTimer = (timer) => clearInterval(timer);

export function createCustomTimer(m, fn) {
    timer = setInterval(() => {
        m.subtract(1, 'seconds');

        let hr = m.get('hour');
        let min = m.get('minutes');
        let sec = m.get('seconds');

        if (hr === 0) {
            hr = '0' + hr;
        }

        if (min.toString().length === 1) {
            min = '0' + min;
        }

        if (sec.toString().length === 1) {
            sec = '0' + sec;
        }

        fn(`${hr} : ${min} : ${sec}`);

        if (
            m.get('hour') === 0
            && m.get('minutes') === 0
            && m.get('seconds') === 0
        ) {
            stopTimer(timer);
        }

    }, ONE_SECOND);

    return timer;
}

export function startTimer(time, fn) {
    let m = moment(time, 'hh:mm:ss');

    if (time.trim().match(/^[0-9]{1,2}[ ]*:[ ]*[0-9]{1,2}$/)) {
        m = moment(time, 'mm:ss');

        timer = setInterval(() => {
            m.subtract(1, 'seconds');

            let min = m.get('minutes');
            let sec = m.get('seconds');

            if (min === 0) {
                min = '0' + min;
            }

            if (sec.toString().length === 1) {
                sec = '0' + sec;
            }

            fn(`${min} : ${sec}`);

            if (m.get('minutes') === 0 && m.get('seconds') === 0) {
                stopTimer(timer);
            }

        }, ONE_SECOND);
    }
    else {

        timer = createCustomTimer(m, fn);
    }

    return timer;
}

export const createAction = (type, payload) => ({ type, payload });
