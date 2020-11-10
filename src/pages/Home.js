import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {beginItem, button} from '../styles';

const Home = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"black"}}>
      <View>
        <Text style={{color:"white"}}>HomePage</Text>
      </View>
    </SafeAreaView>
  );
};

export {Home};
