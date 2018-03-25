import { Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import moment from 'moment';

const { width } = Dimensions.get('window');

const IPHONE_PLUS_WIDTH = 414;
const IPHONE_SE_WIDTH = 320;
const ONE_SECOND = 1000;

const isIphonePlus = () => width === IPHONE_PLUS_WIDTH;

const isIphoneSE = () => width === IPHONE_SE_WIDTH;

const createCustomInitialTime = (args) => {
  const { hr, min, sec } = args;
  let initialTime = '';

  if (hr.length > 0) {
    initialTime += `${hr} : `;
  }

  if (min.length > 0) {
    if (hr.length > 0 && min.length === 1) {
      initialTime += `0${min} : `;
    } else {
      initialTime += `${min} : `;
    }
  } else {
    initialTime += '00 : ';
  }

  if (sec.length > 0) {
    initialTime += sec.length === 1 ? `0${sec}` : sec;
  } else {
    initialTime += '00';
  }

  if (initialTime === '00 : 00') {
    initialTime = '5 : 00';
  }

  return initialTime;
};

const correctHours = (text) => parseInt(text) > 23 ? '23' : text;
const correctMinsAndSecs = (text) => parseInt(text) > 59 ? '59' : text;

let timer;
const stopTimer = (timer) => clearInterval(timer);

function startCustomTimer(time, fn) {
 const m = moment(time, 'hh:mm:ss');
 timer = setInterval(() => {
     m.subtract(1, 'seconds');

     fn(m.get('hour'), m.get('minutes'), m.get('minutes'));

     if (m.get('hour') === 0 && m.get('minutes') === 0 && m.get('minutes') === 0) {
       stopTimer(timer);
     }

  }, ONE_SECOND);

 return timer;
};

export {
  isIphoneX,
  isIphonePlus,
  isIphoneSE,
  createCustomInitialTime,
  correctMinsAndSecs,
};