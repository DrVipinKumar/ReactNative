import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import StackNav from './components/youtube/AXIOS/StackNav';

function App(): JSX.Element {
  return (
    // <SafeAreaView style={styles.container}>
    //   <CURD />
    // </SafeAreaView>
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
