import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
const Tab = createBottomTabNavigator();
const Tab1 = () => {
  return (
    <Tab.Navigator initialRouteName="Tab1Screen1">
      <Tab.Screen name="Tab1Screen1" component={Screen1} />
      <Tab.Screen name="Tab1Screen2" component={Screen2} />
      <Tab.Screen
        name="Tab1Screen3"
        component={Screen3}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};

export default Tab1;
