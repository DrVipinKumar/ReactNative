import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation-locker';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {YTScreenType} from './YouTubeScreens';
type propsType = NativeStackScreenProps<YTScreenType, 'Player'>;
const Player = ({route}: propsType) => {
  const checkFullScreenMode = (isFullScreen: boolean) => {
    if (isFullScreen) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  };
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={Dimensions.get('screen').height}
        width={Dimensions.get('screen').width}
        play={true}
        videoId={route.params?.voideoId}
        onFullScreenChange={checkFullScreenMode}
      />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 120,
  },
});
