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
  TouchableHighlight,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {numberItem, picItem} from '../styles';

const PıcItem = (props) => {
  console.log(props.item.isCheck);
  return (
    <Pressable onPress={() => props.onChange()} style={picItem.general}>
      {({pressed}) => (
        <ImageBackground
          imageStyle={{borderRadius: 20}}
          style={picItem.container}
          source={props.item.img}>
          <Pressable
            // onPress={() => props.onChange()}
            style={({}) => [
              picItem.pressableStyle,
              {backgroundColor: props.item.isCheck ? 'white' : null},
            ]}>
            <Icon
              style={{display: props.item.isCheck ? 'flex' : 'none'}}
              name="check"
              size={30}
              color="black"
            />
          </Pressable>
          <Text style={picItem.text}>{props.item.name}</Text>
          <Text style={picItem.text}>{props.item.period}</Text>
        </ImageBackground>
      )}
    </Pressable>
  );
};

export {PıcItem};
