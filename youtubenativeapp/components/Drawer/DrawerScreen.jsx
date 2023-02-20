import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer =createDrawerNavigator();
import Login from '../screens/Login';
import Welcome from '../TabNav/Welcome';
import Register from '../TabNav/Register';
const DrawerScreen = () => {
  return (
    <NavigationContainer>
     <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Welcome" component={Welcome}/>
        <Drawer.Screen name="Register" component={Register}/>
      </Drawer.Navigator>
      </NavigationContainer>
    
  )
}

export default DrawerScreen

