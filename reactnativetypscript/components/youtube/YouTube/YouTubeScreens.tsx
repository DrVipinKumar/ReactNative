import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Playlists from './Playlists';
import Player from './Player';
export type YTScreenType = {
  Playlists: undefined;
  Player: {voideoId: string};
};
const Stack = createNativeStackNavigator<YTScreenType>();
const YouTubeScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Playlists">
      <Stack.Screen name="Player" component={Player} />
      <Stack.Screen
        name="Playlists"
        component={Playlists}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default YouTubeScreens;
