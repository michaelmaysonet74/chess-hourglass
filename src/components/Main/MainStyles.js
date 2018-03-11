import  { StyleSheet } from 'react-native';
import { isIphoneX, isIphonePlus } from './../../util';

const mainStyles = StyleSheet.create({
  mainTitleStyle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  mainButtonContainerStyle: {
    marginBottom: 5,
    marginTop: isIphoneX() || isIphonePlus() ? 65 : 45,
  },
});

export default mainStyles;