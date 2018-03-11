import { StyleSheet } from 'react-native';
import { isIphoneX, isIphonePlus, isIphoneSE } from './../../util';

const matchStyles = StyleSheet.create({
  counterCardStyle: {
    alignItems: 'center',
    borderColor: '#C2C2C2',
    borderRadius: 20,
    borderWidth: 1,
    height: isIphoneSE() ? (240 * .8) : 240,
    justifyContent: 'center',
    marginBottom: isIphoneX() || isIphonePlus() ? 10 : 0,
    marginTop: isIphoneX() || isIphonePlus() ? 25 : 10,
    width: isIphoneSE() ? (355 * .8) : 355,
  },
  counterCardTextStyle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  dockStyle: {
    alignItems: 'center',
    backgroundColor: '#ECEAEA',
    borderColor: '#B2B2B2',
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    height: isIphoneSE() ? (48 * .8) : 48,
    justifyContent: 'space-between',
    marginTop: isIphoneX() || isIphonePlus() ? 25 : 10,
    paddingLeft: 18,
    paddingRight: 18,
    width: isIphoneSE() ? (355 * .8) : 355,
  },
});

export default matchStyles;