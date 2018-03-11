import { Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const { width } = Dimensions.get('window');

const IPHONE_PLUS_WIDTH = 414;
const IPHONE_SE_WIDTH = 320;

const isIphonePlus = () => width === IPHONE_PLUS_WIDTH;
const isIphoneSE = () => width === IPHONE_SE_WIDTH;

export {
  isIphoneX,
  isIphonePlus,
  isIphoneSE,
};