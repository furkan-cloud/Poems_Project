import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {NumberItem,Button} from '../components';
import {numberItem,enterPoem} from '../styles';




const numbers = [1, 5, 10, 15];




const EnterPoem = (props) => {
  function selectPage() {
    props.navigation.navigate('Period');
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={numberItem.general}>
        <View style={numberItem.poemContainer}>
          <Text style={numberItem.poemText}>How many poems do you want to see in a day?</Text>
        </View>

        <View style={numberItem.viewNumbers}>
          {numbers.map((nums) => {
            return (
              <NumberItem
                key={nums}
                item={nums}
                
              />
            );
          })}
        </View>

        <View style={enterPoem.buttonView}>
            <Button onSelect={() => selectPage()}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {EnterPoem};
