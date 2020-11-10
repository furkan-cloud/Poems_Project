import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  EnterPoem,
  PeriodPoem,
  Interested,
  Begin,
  Bookmark,
  Home,
  Themes,
  Search,
  Settings,
} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 14,
        },
        inactiveBackgroundColor: 'lightgrey',
        // activeTintColor: "red",
        activeBackgroundColor: 'blue',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="home-outline" color={'black'} size={30} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: () => (
            <Icon name="bookmark-outline" color={'black'} size={30} />
          ),
        }}
        name="Bookmark"
        component={Bookmark}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Icon name="magnify" color={'black'} size={30} />,
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Themes',
          tabBarIcon: () => <Icon name="wallpaper" color={'black'} size={30} />,
        }}
        name="Themes"
        component={Themes}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <Icon name="account-settings-outline" color={'black'} size={30} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="EnterPoe" component={EnterPoem} />
        <Stack.Screen name="Period" component={PeriodPoem} />
        <Stack.Screen name="Interest" component={Interested} />
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
