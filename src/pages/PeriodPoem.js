import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

import {PıcItem, Button} from '../components';
import {numberItem, enterPoem} from '../styles';

const pics = [
  {id: 1, img: '../assets/morning.jpg', name: 'Morning', period: '06-12'},
  {
    id: 2,
    img: '../assets/noon.jpg',
    name: 'Noon',
    period: '12-18',
  },
  {
    id: 3,
    img: '../assets/evening.jpg',
    name: 'Evening',
    period: '18-00',
  },
  {
    id: 4,
    img: '../assets/noon.jpg',
    name: 'Night',
    period: '00-06',
  },
];

const PeriodPoem = (props) => {
  function selectPage() {
    props.navigation.navigate('Interest');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={numberItem.general}>
        <View style={numberItem.poemContainer}>
          <Text style={numberItem.poemText}>
            In Which Periods Would You Like see?
          </Text>
        </View>

        <View style={numberItem.viewNumbers}>
          {pics.map((pic,idx ) => {
            
            return <PıcItem key={pic.id} item={pic} />;
          })}
        </View>
        <View style={numberItem.underContainer}>
          <Text style={numberItem.underText}>
            You will receive lock screen notifications during morning,afternoon
            and evening periods
          </Text>
        </View>
        <View style={enterPoem.buttonView}>
          <Button onSelect={() => selectPage()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {PeriodPoem};
