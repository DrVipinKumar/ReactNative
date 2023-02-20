import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerScreens from './components/youtube/Navigation/Drawer/DrawerScreens';

function App(): JSX.Element {
  return (
    <NavigationContainer>
     <DrawerScreens/>
    </NavigationContainer>
  );
}

export default App;
