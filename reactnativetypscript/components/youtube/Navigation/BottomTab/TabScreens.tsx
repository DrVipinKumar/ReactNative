import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
export type screenType = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Register: undefined;
};
const Tab = createBottomTabNavigator<screenType>();
const TabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'yellow',
        tabBarActiveBackgroundColor: 'yellow',
        tabBarInactiveBackgroundColor: 'red',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarLabel: 'Screen One',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="screen-share" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'Screen Two',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="people" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreens;
