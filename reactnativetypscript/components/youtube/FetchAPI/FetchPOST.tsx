import {StyleSheet, Text, ToastAndroid, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
type dataType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const FetchPOST = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [data, setData] = useState<dataType>({
    id: 111,
    title: 'Dr. Vipin Classes',
    body: 'This is REST API POST Method by Fetch',
    userId: 999,
  });
  const insertData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
        setCheck(true);
        ToastAndroid.show('Record Inserted', ToastAndroid.LONG);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fetch POST Data</Text>
      <View style={styles.button}>
        <Button title="Insert Data" color="brown" onPress={insertData} />
      </View>
      <Text style={styles.data}>
        {check ? 'Inserted This Data:' + JSON.stringify(data) : ''}
      </Text>
    </View>
  );
};

export default FetchPOST;

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
