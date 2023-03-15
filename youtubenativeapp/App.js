import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tab1 from './components/HideTab/Tab1';
const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab1 />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10,
  },
});

export default App;
