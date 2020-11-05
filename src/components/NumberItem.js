import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {numberItem} from '../styles';

const NumberItem = (props) => {
  return (
    <TouchableOpacity style={numberItem.container} >
      <Text style={numberItem.text}>{props.item}</Text>
    </TouchableOpacity>
  );
};

export {NumberItem};
