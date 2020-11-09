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

const InterestItem = (props) => {
  console.log(`${props.item.uri}`.toString());
  return (
    <Pressable onPress={() => props.onChange()} style={[picItem.general,{margin:3,borderRadius:28}]}>
      {({pressed}) => (
        <ImageBackground
          source={props.item.uri}
          imageStyle={{borderRadius: 28}}
          style={{
            width: Dimensions.get('window').width / 3,
            height: Dimensions.get('window').height / 7,
            justifyContent: 'center',
            margin: 0,
          }}>
          <Pressable
           
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
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            {props.item.category}
          </Text>
        </ImageBackground>
      )}
    </Pressable>
  );
};

export {InterestItem};
// {uri:`${props.item.uri}`.toString()}