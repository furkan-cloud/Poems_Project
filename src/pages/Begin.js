import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {beginItem, button} from '../styles';

const Begin = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={beginItem.container}>
        <View style={beginItem.firstArea}>
          <Text style={beginItem.firstText}>Ready To Go!</Text>
        </View>
        <View style={beginItem.secondArea}>
          <View style={beginItem.IconText}>
            <Icon name="bell-ring" size={60} color="#ff94c2" />
            <Text style={beginItem.Text}>
              You will periodically receive daily poems when you unlock your
              phone,based on your prefences
            </Text>
          </View>
          <View style={beginItem.IconText}>
            <Icon name="cog-outline" size={60} color="#ff94c2" />
            <Text style={beginItem.Text}>
              You can change these preferences or completely disable poems at
              any time
            </Text>
          </View>
          <View style={beginItem.IconText}>
            <Icon name="cursor-default-click" size={60} color="#ff94c2" />
            <Text style={beginItem.Text}>
              Nope,not just that!Use the app whenever you like.World of Poems is
              just tap away
            </Text>
          </View>
        </View>
        <View style={beginItem.buttonView}>
          <TouchableOpacity style={beginItem.buttonContainer} onPress = {() => props.navigation.navigate("App")}>
            <Text style={beginItem.buttonText}>Begin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Begin};
