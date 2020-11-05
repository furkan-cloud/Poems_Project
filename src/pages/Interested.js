import React from 'react';
import {SafeAreaView,View,Text} from 'react-native';
const numbers = [1, 5, 10, 15];
import {NumberItem,Button} from '../components';
import {numberItem,enterPoem} from '../styles';
const Interested = (props) => {
    function selectPage() {
        props.navigation.navigate('Begin');
      }
    
      return (
        <SafeAreaView style={{flex:1}}>
          <View style={numberItem.general}>
            <View style={numberItem.poemContainer}>
              <Text style={numberItem.poemText}>Which Topics Are You Interested In?</Text>
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
}

export {Interested};