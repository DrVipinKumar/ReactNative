import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../BottomTab/Home';
import Screen1 from '../BottomTab/Screen1';
import Screen2 from '../BottomTab/Screen2';
type drawerType = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
};
const Drawer = createDrawerNavigator<drawerType>();
const DrawerScreens = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{
        drawerLabel:'Home Screen'
      }} />
      <Drawer.Screen name="Screen1" component={Screen1} options={{
        drawerLabel:'Screen One'}} />
      <Drawer.Screen name="Screen2" component={Screen2} options={{
        drawerLabel:'Screen Two'}} />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;
