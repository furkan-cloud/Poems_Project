import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

import {numberItem} from '../styles';

const PıcItem = (props) => {
  return (
    <TouchableOpacity style={numberItem.container} >
      <Text style={numberItem.text}>{props.item}</Text>
      {/* <Image source={require(img)}  /> */}
    </TouchableOpacity>
  );
};

export {PıcItem};
