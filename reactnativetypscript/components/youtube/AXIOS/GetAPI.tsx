import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'react-native-paper';

import {ToastAndroid} from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid';
type dataType = {
  sid: number;
  name: string;
  course: string;
};
const GetAPI = () => {
  const [data, setData] = useState<dataType[]>([]);
  useEffect(() => {
    axios
      .get('http://10.0.2.2:8080/students')
      .then(response => setData(response.data))
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Information</Text>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.colHead1}>SID</Text>
          <Text style={styles.colHead2}>Name</Text>
          <Text style={styles.colHead2}>Course</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.sid + ''}
          renderItem={({item}) => (
            <View style={styles.bodyData}>
              <Text style={styles.colBody1}>{item.sid}</Text>
              <Text style={styles.colBody2}>{item.name}</Text>
              <Text style={styles.colBody2}>{item.course}</Text>
            </View>
          )}
        />
      </Card>
    </View>
  );
};

export default GetAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    margin: 10,
    padding: 20,
    height: '80%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
  },
  bodyData: {
    flexDirection: 'row',
  },
  colHead1: {
    width: 60,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: 'red',
  },
  colHead2: {
    width: 150,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: 'red',
  },
  colBody1: {
    width: 60,
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
  colBody2: {
    width: 150,
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
});
