import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {key} from './Key';
import {DataTypes} from '../../athome/YouTube/DataTypes';
import axios from 'axios';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {YTScreenType} from './YouTubeScreens';
type propsType = NativeStackScreenProps<YTScreenType, 'Playlists'>;
const Playlists = ({navigation}: propsType) => {
  const [query, setQuery] = useState<string>('hindi songs');
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&maxResults=20&q=${query}`;
  const [playlist, setPlaylist] = useState<DataTypes>();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    axios.get<DataTypes>(url).then(response => {
      setPlaylist(response.data);
    });
  }, [url]);
  const updatePlaylist = () => {
    setQuery(search);
  };
  const playVideo = (videoId: string) => {
    navigation.navigate('Player', {voideoId: videoId});
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          onSubmitEditing={updatePlaylist}
          value={search}
          onChangeText={value => setSearch(value)}
          style={styles.searchText}
        />
        <TouchableOpacity onPress={updatePlaylist}>
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={playlist?.items}
          keyExtractor={(item, index) => item.id.videoId + index}
          renderItem={({item}) => (
            <View style={styles.listContainer}>
              <TouchableOpacity onPress={() => playVideo(item.id.videoId)}>
                <Image
                  source={{uri: item.snippet.thumbnails.medium.url}}
                  style={styles.image}
                />
                <Text style={styles.title}>{item.snippet.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Playlists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  searchButton: {
    backgroundColor: 'red',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  image: {
    width: Dimensions.get('screen').width - 30,
    height: 180,
    borderRadius: 10,
  },
  searchText: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: 'red',
    width: '75%',
    fontSize: 25,
    color: 'green',
    padding: 10,
  },
});
