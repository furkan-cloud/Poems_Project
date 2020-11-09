import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView, FlatList} from 'react-native';
import {NumberItem, Button} from '../components';
import {numberItem, enterPoem} from '../styles';

const numbers = [
  {id: 0, number: 1, isCheck: false, option: true},
  {id: 1, number: 5, isCheck: false, option: false},
  {id: 2, number: 10, isCheck: false, option: false},
  {id: 3, number: 15, isCheck: false, option: false},
];

const EnterPoem = (props) => {
  const [list, setList] = useState(numbers);


  function selectPage() {
    props.navigation.navigate('Period');
  }

  async function changeColor(nums) {

    let reset = [
      { id: 0, number: 1, isCheck: false },
      { id: 1, number: 5, isCheck: false },
      { id: 2, number: 10, isCheck: false },
      { id: 3, number: 15, isCheck: false },
    ]
    const numberIndex = reset.findIndex(item => item.id == nums)
    reset[numberIndex].isCheck = true;
    setList(reset)

  }

  const renderNumber = ({item}) => {
    return <NumberItem item={item} onChange={() => changeColor(item.id)} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={numberItem.general}>
        <View style={numberItem.poemContainer}>
          <Text style={numberItem.poemText}>
            How many poems do you want to see in a day?
          </Text>
        </View>

        <View style={numberItem.viewNumbers}>
          <FlatList
            data={list}
            renderItem={renderNumber}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </View>

        <View style={enterPoem.buttonView}>
          <Button onSelect={() => selectPage()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {EnterPoem};
    // const newList = list;
    // let newNumbers = []
    // for (let box in numbers){
    //    newNumbers.push({...box, isCheck: false});
    // }
    // setList(newNumbers);
    // const numberIndex = newList.findIndex((item) => item.id == nums);
    // newList[numberIndex].isCheck = !newList[numberIndex].isCheck;
    // setList(newList);