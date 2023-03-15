import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
import Login from '../screens/Login';
import Welcome from './Welcome';
import Register from './Register';
import Profiles from './Profiles';
const TabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarLabel: 'Welcome',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="human-greeting"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarLabel: 'Register',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Profiles}
        options={{
          tabBarLabel: 'Profiles',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreens;
