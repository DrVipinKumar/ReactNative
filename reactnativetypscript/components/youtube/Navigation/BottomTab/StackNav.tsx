import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Register';
import Profiles from './Profiles';
import TabScreens from './TabScreens';
export type stackType = {
  HomeNav: undefined;
  Register: undefined;
  Profiles: undefined;
};
const Stack = createNativeStackNavigator<stackType>();
const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="HomeNav">
      <Stack.Screen name="HomeNav" component={TabScreens} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profiles" component={Profiles} />
    </Stack.Navigator>
  );
};

export default StackNav;
