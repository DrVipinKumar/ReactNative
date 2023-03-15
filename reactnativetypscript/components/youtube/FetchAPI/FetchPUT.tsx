import {StyleSheet, Text, ToastAndroid, View, Button} from 'react-native';
import React, {useState} from 'react';
type dataType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const FetchPUT = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [data, setData] = useState<dataType>({
    id: 3,
    title: 'Dr. Vipin Classes',
    body: 'This is REST API PUT Method by Fetch',
    userId: 666,
  });
  const insertData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/3', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
        setCheck(true);
        ToastAndroid.show('Record Updated', ToastAndroid.LONG);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fetch PUT Data</Text>
      <View style={styles.button}>
        <Button title="Updated Data" color="brown" onPress={insertData} />
      </View>
      <Text style={styles.data}>
        {check ? 'Updated Data:' + JSON.stringify(data) : ''}
      </Text>
    </View>
  );
};

export default FetchPUT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
  },
  data: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
