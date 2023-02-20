import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import DrawerScreen from './components/Drawer/DrawerScreen';



const App = () => {
  return (
    <View style={styles.container}>
    <DrawerScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10,
  },
});

export default App;
