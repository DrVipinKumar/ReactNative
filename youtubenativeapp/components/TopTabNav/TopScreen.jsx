import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Top =createMaterialTopTabNavigator();
import Login from '../screens/Login';
import Welcome from '../TabNav/Welcome';
import Register from '../TabNav/Register';
const TopScreen = () => {
  return (
    <NavigationContainer>
      <Top.Navigator initialRouteName='Login' screenOptions={{
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:"green",
      }}>
        <Top.Screen name="Login" component={Login} options={{
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name={"home"} color={color} size={size}/>
            ),
        }}/>
        <Top.Screen name="Welcome" component={Welcome} options={{
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name={"human-greeting"} color={color} size={size}/>
            ),
        }} />
        <Top.Screen name="Register" component={Register} options={{
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name={"account"} color={color} size={size}/>
            ),
        }}/>
      </Top.Navigator>
    </NavigationContainer>
  )
}

export default TopScreen

