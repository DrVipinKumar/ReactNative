import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import YouTubeScreens from './components/youtube/YouTube/YouTubeScreens';

function App(): JSX.Element {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Playlists />
    // </SafeAreaView>
    <NavigationContainer>
      <YouTubeScreens />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
