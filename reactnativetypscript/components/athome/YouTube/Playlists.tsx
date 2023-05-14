import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {DataTypes} from './DataTypes';
import {key} from '../../youtube/YouTube/Key';
import {screensType} from './Screens';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
type propsType = NativeStackScreenProps<screensType, 'Playlists'>;
const Playlists = ({navigation}: propsType) => {
  const [query, setQuery] = useState<string>('hindi songs');
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&maxResults=20&q=${query}`;
  const [playlist, setPlaylist] = useState<DataTypes>();
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    axios.get<DataTypes>(url).then(response => {
      setPlaylist(response.data);
    });
  }, [url]);
  const playVideo = (videoId: string) => {
    navigation.navigate('Player', {videoId: videoId});
  };
  const searchVideo = () => {
    setQuery(searchText);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          onSubmitEditing={() => searchVideo()}
          style={styles.search}
          value={searchText}
          onChangeText={value => setSearchText(value)}
        />
        <TouchableOpacity onPress={searchVideo}>
          <Text style={styles.searchBtn}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlashList
        data={playlist?.items}
        estimatedItemSize={20}
        keyExtractor={(item, index) => item.id.videoId + index}
        renderItem={({item}) => (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => playVideo(item.id.videoId)}>
              <Image
                source={{uri: item.snippet.thumbnails.high.url}}
                style={styles.images}
              />
              <Text style={styles.title}>{item.snippet.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Playlists;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    margin: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: 'red',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  images: {
    width: Dimensions.get('screen').width - 35,
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: 'blue',
  },
  search: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    borderRadius: 10,
    width: '70%',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  searchBtn: {
    backgroundColor: 'red',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    color: 'white',
    borderRadius: 10,
  },
});
