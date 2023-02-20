import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Screen1 from '../Screen1';
import Screen2 from '../Screen2';
import Header from '../Header';
export type stackScreens = {
  Home: undefined;
  Screen1: {msg: string};
  Screen2: {info: string};
};
const Stack = createNativeStackNavigator<stackScreens>();
const AllScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Screen1" component={Screen1}  options={{
          title: 'Screen One',
          headerTitleStyle: {
            fontSize: 25,
            color: 'black',
            fontWeight:'bold',             
          },
          headerStyle: {
            backgroundColor: 'pink',            
          },
        }} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle:(props)=><Header {...props}/>         
        }}
      />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default AllScreens;
