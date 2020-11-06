import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
const numbers = [1, 5, 10, 15];
import {NumberItem, Button} from '../components';
import {numberItem, enterPoem,interestItem} from '../styles';

const imageBaseUrl = 'https://images.unsplash.com/photo-';
const imageParameters = '?auto=format&fit=crop&w=375&q=80';

const dataSource = [
  {category: 'Love', imageId: '1478358161113-b0e11994a36b'},
  {category: 'Natural', imageId: '1521412644187-c49fa049e84d'},
  {category: 'Epic', imageId: '1526256262350-7da7584cf5eb'},
  {category: 'Liric', imageId: '1542222024-c39e2281f121'},
  {category: 'Eğitim', imageId: '1503676260728-1c00da094a0b'},
  {category: 'Müzik', imageId: '1511671782779-c97d3d27a1d4'},
  {category: 'Tiyatro', imageId: '1507924538820-ede94a04019d'},
  {category: 'Sinema', imageId: '1478720568477-152d9b164e26'},
  // {category: 'Hava', imageId: '1530908295418-a12e326966ba'},
  // {category: 'Seyahat', imageId: '1473625247510-8ceb1760943f'},
  // {category: 'Astroloji', imageId: '1532968961962-8a0cb3a2d4f5'},
  // {category: 'Otomobil', imageId: '1537041373298-55dbb337e651'},
  // {category: 'Galeri', imageId: '1500051638674-ff996a0ec29e'},
  // {category: 'Video', imageId: '1524253482453-3fed8d2fe12b'},
  // {category: 'Video', imageId: '1524253482453-3fed8d2fe12b'},
  // {category: 'Tiyatro', imageId: '1507924538820-ede94a04019d'},
  // {category: 'Sinema', imageId: '1478720568477-152d9b164e26'},
  // {category: 'Hava', imageId: '1530908295418-a12e326966ba'},
  // {category: 'Video', imageId: '1524253482453-3fed8d2fe12b'},
  // {category: 'Video', imageId: '1524253482453-3fed8d2fe12b'},
];

const Interested = (props) => {
  function selectPage() {
    props.navigation.navigate('Begin');
  }
  const renderItemData = ({item}) => {
    return (
      <View >
        <TouchableHighlight>
          <ImageBackground
            source={{uri: imageBaseUrl + item.imageId + imageParameters}}
            imageStyle={{ borderRadius: 20 }}
            style={{
              width: Dimensions.get('window').width /2.5,
              height: Dimensions.get('window').height / 6,
              justifyContent: 'center',
              margin: 10,
              

            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 22,
                fontWeight:"bold"
              }}>
              {item.category}
            </Text>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={interestItem.general}>
        <View style={interestItem.poemContainer}>
          <Text style={interestItem.poemText}>
            Which Topic Are You Interested In?
          </Text>
        </View>
        <View style={interestItem.viewNumbersInt}>
        
          
            <FlatList
              data={dataSource}
              renderItem={renderItemData}
              keyExtractor={(_,index) =>index.toString()}
              numColumns={2}
            />
          
       
        </View>
        <View style={interestItem.buttonView}>
          <Button onSelect={() => selectPage()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Interested};
