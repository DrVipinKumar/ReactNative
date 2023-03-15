import React from 'react';
import GetAPI from './GetAPI';
import PostAPI from './PostAPI';
import DeleteAPI from './DeleteAPI';
import PutAPI from './PutAPI';
import CURD from './CURD';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export type stackType = {
  getapi: undefined;
  putapi: undefined;
  postapi: undefined;
  deleteapi: undefined;
  curd: undefined;
};
const Stack = createNativeStackNavigator<stackType>();
const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="curd">
      <Stack.Screen name="getapi" component={GetAPI} />
      <Stack.Screen name="postapi" component={PostAPI} />
      <Stack.Screen name="putapi" component={PutAPI} />
      <Stack.Screen name="deleteapi" component={DeleteAPI} />
      <Stack.Screen
        name="curd"
        component={CURD}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
