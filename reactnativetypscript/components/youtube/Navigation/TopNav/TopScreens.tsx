import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../BottomTab/Home';
import Screen1 from '../BottomTab/Screen1';
import Screen2 from '../BottomTab/Screen2';
type topScreens = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
};
const Top = createMaterialTopTabNavigator<topScreens>();
const TopScreens = () => {
  return (
    <Top.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
      }}>
      <Top.Screen name="Home" component={Home} />
      <Top.Screen name="Screen1" component={Screen1} />
      <Top.Screen name="Screen2" component={Screen2} />
    </Top.Navigator>
  );
};

export default TopScreens;
