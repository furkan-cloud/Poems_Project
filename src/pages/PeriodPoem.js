import React,{useState} from 'react';
import {SafeAreaView, View, Text, Image,FlatList} from 'react-native';

import {PıcItem, Button} from '../components';
import {numberItem, enterPoem,picItem} from '../styles';

const pics = [
  {id: 1,
    img: require('../assets/morning.jpg'),
    name: 'Morning',
    period: '06-12',
    isCheck: false
  },
  {
    id: 2,
    img: require('../assets/noon.jpg'),
    name: 'Noon',
    period: '12-18',
    isCheck: false
  },
  {
    id: 3,
    img: require('../assets/evening.jpg'),
    name: 'Evening',
    period: '18-00',
    isCheck: false
  },
  {
    id: 4,
    img: require('../assets/night.jpg'),
    name: 'Night',
    period: '00-06',
    isCheck: false
  },
];

const PeriodPoem = (props) => {
  const [alist, setaList] = useState(pics);

  function selectPage() {
    props.navigation.navigate('Interest');
  }
  function changeColor(nums) {
    const newLista =alist
    const numbersIndex = newLista.findIndex(item=>item.id==nums)
    newLista[numbersIndex].isCheck = !newLista[numbersIndex].isCheck
    console.log(numbersIndex)
    setaList(newLista)
  }

const renderPics=({item})=>{
  return(
    <PıcItem  item={item} 
    onChange={() => changeColor(item.id)}
    />
  )
}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={numberItem.general}>
        <View style={numberItem.poemContainer}>
          <Text style={numberItem.poemText}>
            In Which Periods Would You Like see?
          </Text>
        </View>

        <View style={picItem.viewNumbers}>
          <FlatList
          data={alist}
          renderItem={renderPics}
          keyExtractor={(item,index)=>index.toString()}
          numColumns={2}
          />
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

