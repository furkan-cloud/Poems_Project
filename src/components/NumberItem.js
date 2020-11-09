import React from 'react';
import {
  Text,
  Pressable,
} from 'react-native';

import {numberItem} from '../styles';

const NumberItem = (props) => {



  return (
    <Pressable
      onPress={() => props.onChange()}
      style={({}) => [
        numberItem.container,
        {backgroundColor: props.item.isCheck ? '#2196f3': 'black'},
      ]}>

    {({pressed}) => (

      <Text 
        style={[
          numberItem.text,{color: props.item.isCheck ? 'black' : 'white'}
          
        ]}>
        {props.item.number}
      </Text>
      )}
    </Pressable>
  );
};

export {NumberItem};

