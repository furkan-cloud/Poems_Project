import React,{useState} from 'react';
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
import {NumberItem, Button, InterestItem} from '../components';
import {numberItem, enterPoem, interestItem} from '../styles';

const imageBaseUrl = 'https://images.unsplash.com/photo-';
const imageParameters = '?auto=format&fit=crop&w=375&q=80';

const dataSource = [
  {
    id:0,
    category: 'Love',
    isCheck: false,
    uri:
    require("../assets/loves.jpg"),
    
  },
  {id:1,
    category: 'Natural',
    isCheck: false,
    uri:require("../assets/nature.jpg"),
  },
  {id:2,
    category: 'Epic',
    isCheck: false,
    uri:
    require("../assets/epic.jpg"),
  },
  {id:3,
    category: 'Dramatic',
    isCheck: false,
    uri: require("../assets/drama.jpg"),
  },
  {id:4,
    category: 'Sonnet',
    isCheck: false,
    uri:require("../assets/sonnet.jpg"),
  },
  {id:5,
    category: 'Elegy',
    isCheck: false,
   uri:require("../assets/elegy.jpg"),
  },

];

const Interested = (props) => {
  const [anlist, setapList] = useState(dataSource);
  function selectPage() {
    props.navigation.navigate('Begin');
  }
  function changeColor(nums) {
    const newListap = anlist;
    const numberssIndex = newListap.findIndex((item) => item.id == nums);
    newListap[numberssIndex].isCheck = !newListap[numberssIndex].isCheck;
    console.log(numberssIndex);
    setapList(newListap);
  }

  const renderItemData = ({item}) => {
    return <InterestItem item={item} onChange={() => changeColor(item.id)} />;
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
            data={anlist}
            renderItem={renderItemData}
            keyExtractor={(_, index) => index.toString()}
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
