import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {FlatList} from 'react-native';
import {Card} from 'react-native-paper';
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
      <Card style={styles.cardContainer}>
        <View style={styles.header}>
          <Text style={styles.colHead1}>SID</Text>
          <Text style={styles.colHead23}>Name</Text>
          <Text style={styles.colHead23}>Course</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.sid + ''}
          renderItem={({item}) => (
            <View style={styles.header}>
              <Text style={styles.colBody1}>{item.sid}</Text>
              <Text style={styles.colBody23}>{item.name}</Text>
              <Text style={styles.colBody23}>{item.course}</Text>
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
  },
  cardContainer: {
    margin: 10,
    height: '80%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    marginLeft: 30,
  },
  colHead1: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '20%',
  },
  colHead23: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '38%',
  },
  colBody1: {
    fontSize: 15,
    width: '20%',
  },
  colBody23: {
    fontSize: 15,
    width: '38%',
  },
});
