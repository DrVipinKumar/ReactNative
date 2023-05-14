import React from 'react';
import TodoTask from './TodoTask';
import Login from './Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
export type screenType = {
  Login: {title: string};
  TodoTask: undefined;
  Splash: undefined;
};
const Stack = createNativeStackNavigator<screenType>();
const StackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{title: 'Login'}}
      />
      <Stack.Screen name="TodoTask" component={TodoTask} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default StackScreens;
