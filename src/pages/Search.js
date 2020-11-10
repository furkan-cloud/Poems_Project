import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {beginItem, button} from '../styles';

const Search = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={beginItem.container}>
        <Text style={{color:"white"}}>Search Page</Text>
      </View>
    </SafeAreaView>
  );
};

export {Search};
