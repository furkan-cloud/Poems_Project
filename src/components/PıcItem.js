import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import {numberItem, picItem} from '../styles';

const PıcItem = (props) => {
  console.log(props.item.img);
  return (
    <TouchableHighlight style={picItem.general}>
      <ImageBackground imageStyle={{ borderRadius: 20 }}
                       style={picItem.container}
                       source={props.item.img}>
        <Text style={picItem.text}>{props.item.name}</Text>
        <Text style={picItem.text}>{props.item.period}</Text>
      </ImageBackground>
    </TouchableHighlight>


  );
};

export {PıcItem};
