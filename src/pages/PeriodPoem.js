import React from 'react';
import {SafeAreaView,View,Text,Image} from 'react-native';

import {PıcItem,Button} from '../components';
import {numberItem,enterPoem} from '../styles';


const pics = [
    { id: 1,
        img:"../assets/morning.jpg"
},
{
    id:2,
    img:"../assets/noon.jpg"
},
{
    id:3,
    img:"../assets/evening.jpg"
},
{
    id:4,
    img:"../assets/noon.jpg"
},


];


const PeriodPoem = (props) => {
    function selectPage() {
        props.navigation.navigate('Interest');
      }
    
      return (
        <SafeAreaView style={{flex:1}}>
          <View style={numberItem.general}>
            <View style={numberItem.poemContainer}>
              <Text style={numberItem.poemText}>In Which Periods Would You Like see?</Text>
            </View>
    
            <View style={numberItem.viewNumbers}>
              {pics.map((pic) => {
                  console.log(pic)
                return (
                  <PıcItem
                    key={pic}
                    item={pic}
                    
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

export {PeriodPoem};