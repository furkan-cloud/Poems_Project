import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {button} from '../styles';
const Button = (props) => {
  return (
    <TouchableOpacity style={button.container} onPress={props.onSelect}>
      <Text style={button.text}>Continue</Text>
    </TouchableOpacity>
  );
};

export {Button};
