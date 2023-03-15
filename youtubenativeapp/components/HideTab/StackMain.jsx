import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Tab1 from './Tab1';
import Register from './Register';
import Profiles from './Profiles';
const StackMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab1" component={Tab1} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profiles" component={Profiles} />
    </Stack.Navigator>
  );
};

export default StackMain;
