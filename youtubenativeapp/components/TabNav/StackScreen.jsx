import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabScreens from './TabScreens';
const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={TabScreens} />
    </Stack.Navigator>
  );
};

export default StackScreen;
