import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid';
type dataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const FetchGET = () => {
  const [data, setData] = useState<dataType[]>([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(alldata => setData(alldata))
      .catch(error => ToastAndroid.show(error, ToastAndroid.SHORT));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FetchGET;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'pink',
    margin: 2,
    borderRadius: 5,
    padding: 10,
  },
  id: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    margin: 5,
  },
  body: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    margin: 5,
  },
});
