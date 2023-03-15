import {StyleSheet, Text, ToastAndroid, View, Button} from 'react-native';
import React, {useState} from 'react';
type dataType = {
  title: string;
};
const FetchPATCH = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [data, setData] = useState<dataType>({
    title: 'Dr. Vipin Classes',
  });
  const insertData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/2', {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
        setCheck(true);
        ToastAndroid.show('Record Patched', ToastAndroid.LONG);
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fetch PATCH Data</Text>
      <View style={styles.button}>
        <Button title="Patched Data" color="brown" onPress={insertData} />
      </View>
      <Text style={styles.data}>
        {check ? 'Patched Data:' + JSON.stringify(data) : ''}
      </Text>
    </View>
  );
};

export default FetchPATCH;

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
