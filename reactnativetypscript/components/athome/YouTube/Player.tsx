import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation-locker';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screensType} from './Screens';
type propsType = NativeStackScreenProps<screensType, 'Player'>;
const Player = ({route}: propsType) => {
  const checkFullScreen = (isFullScreen: boolean) => {
    if (isFullScreen) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <YoutubePlayer
        height={Dimensions.get('window').height}
        width={Dimensions.get('window').width}
        play={true}
        videoId={route.params?.videoId}
        onFullScreenChange={checkFullScreen}
      />
    </SafeAreaView>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 90,
  },
});
