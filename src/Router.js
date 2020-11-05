import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {EnterPoem,PeriodPoem,Interested,Begin} from "./pages"

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="EnterPoe" component={EnterPoem} />
        <Stack.Screen name="Period" component={PeriodPoem} />
        <Stack.Screen name="Interest" component={Interested} />
        <Stack.Screen name="Begin" component={Begin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;