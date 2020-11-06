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
    
    width: Dimensions.get('window').width / 2.7,
    height: Dimensions.get('window').height / 6.1,
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: "#2196f3",
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
    marginTop:40
  },
  poemText: {
    color: 'red',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal:32
   
  },  underContainer: {
    justifyContent: 'center',
    marginTop:-40
  },
  underText: {
    color: 'red',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal:32
   
  },

  viewNumbers: {
    flexDirection:"row",
    justifyContent: 'center',
    flexWrap:"wrap",

    alignItems:"center",
    
            
  },
  viewNumbersInt: {
    
    justifyContent: 'center',

    alignItems:"center",
    height:Dimensions.get("window").height/1.5
            
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
export const beginItem = StyleSheet.create({
  container:{
    justifyContent:"space-evenly",
    flex:1
    
  },
  firstArea:{
    justifyContent:"space-around",
    
  },
  firstText:{
    color:"white",
    textAlign:"center",
    fontSize:30,
    fontStyle:"italic",
  fontFamily:"sans-serif-condensed"
  },
  secondArea:{
    justifyContent:"space-around",
    backgroundColor:"#484848",

    marginHorizontal:20,
    borderRadius:20,
    height:Dimensions.get("window").height/2
  },
  IconText:{
    alignItems:"center"
  },
  Text:{
    textAlign:"center",
    color:"white",
    fontSize:17,
    marginHorizontal:20,
    marginBottom:5,
    fontFamily: 'sans-serif',
    letterSpacing:1
    
  },
  buttonView:{
    alignItems: 'center',
   
  },
  buttonContainer: {
    // marginHorizontal: 120,
    backgroundColor: '#2196f3',
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 18,
    justifyContent: 'center',
  },

  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Iowan Old Style',
    fontSize: 22,
    fontVariant: [ 'small-caps' ],
    letterSpacing:2
  },
})