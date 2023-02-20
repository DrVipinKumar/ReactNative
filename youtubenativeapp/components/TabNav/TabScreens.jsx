import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Tab=createBottomTabNavigator();
import Login from '../screens/Login';
import Welcome from './Welcome';
import Register from './Register';
import Profiles from './Profiles';
const TabScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Login' screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:"green"
      }}>
        <Tab.Screen name="Login" component={Login} 
        options={{
            tabBarLabel:"Home",
            tabBarIcon:({focused,color,size})=>(
                <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
        }}
        />
        <Tab.Screen name="Welcome" component={Welcome}
         options={{
            tabBarLabel:"Welcome",
            tabBarIcon:({focused,color,size})=>(
                <MaterialCommunityIcons name="human-greeting" color={color} size={size}/>
            ),
        }}
         />
        <Tab.Screen name="Register" component={Register} 
         options={{
            tabBarLabel:"Register",
            tabBarIcon:({focused,color,size})=>(
                <MaterialCommunityIcons name="account" color={color} size={size}/>
            ),
        }}
        />
        <Tab.Screen name="Profiles" component={Profiles} options={{
            tabBarLabel:"Profiles",
            tabBarIcon:({focused,color,size})=>(
                <MaterialCommunityIcons name="information" color={color} size={size}/>
            ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabScreens

