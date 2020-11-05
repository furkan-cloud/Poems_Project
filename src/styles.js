import {StyleSheet, Dimensions} from 'react-native';

export const enterPoem = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
  },
});

export const numberItem = StyleSheet.create({
  general: {
    justifyContent: 'space-around',

    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    borderRadius: 6,
    backgroundColor: 'black',
    width: Dimensions.get('window').width / 2.7,
    height: Dimensions.get('window').height / 6.1,
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'blue',
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  poemContainer: {
    justifyContent: 'center',
  },
  poemText: {
    color: 'red',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal:32
   
  },

  viewNumbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export const button = StyleSheet.create({
  container: {
    // marginHorizontal: 120,
    backgroundColor: '#2196f3',
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 18,
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Iowan Old Style',
    fontSize: 18,
  },
});
