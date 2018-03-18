import { StyleSheet } from 'react-native';

const customSetupStyles = StyleSheet.create({
  buttonContainerStyle: {
    marginTop: 62,
  },
  customCardStyle: {
    alignItems: 'center',
    backgroundColor: 'rgba(252, 250, 250, 0.8)',
    borderRadius: 20,
    flexDirection: 'row',
    height: 300,
    justifyContent: 'space-around',
    marginTop: 62,
		padding: 10,
    width: 355,
  },
  customCardTextStyle: {
    color: '#454545',
    fontSize: 50,
    fontWeight: 'bold',
		marginLeft: 10,
		marginRight: 10,
  }
});

export default customSetupStyles;