import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Profiles from './screens/Profiles';
import { StyleSheet } from 'react-native';
import Header from './screens/Header';
const AllScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} 
        options={{headerTitle:(props)=><Header {...props}/>}} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Profile" component={Profiles} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AllScreens

const customHeader =StyleSheet.create({
    title:"My Login",
    headerStyle:{
        backgroundColor:"green",
    },
    headerTintColor:"white",
    headerTitleStyle:{
        fontWeight:"bold",
    },
    headerTitleAlign:"center"
});
