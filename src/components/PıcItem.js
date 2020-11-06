import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground
} from 'react-native';

import {numberItem} from '../styles';





const PıcItem = (props) => {
  
  return (
    
    <TouchableOpacity style={numberItem.container} >
      {/* <ImageBackground source={require("../assets/morning.jpg")}> */}
      <Text style={numberItem.text}>{props.item.name}</Text>
      <Text style={numberItem.text}>{props.item.period}</Text>
      {/* </ImageBackground> */}
      
    </TouchableOpacity>
    
  );
};

export {PıcItem};
