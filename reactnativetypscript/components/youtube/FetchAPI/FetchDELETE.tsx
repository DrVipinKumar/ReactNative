import {Button, StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React from 'react';

const FetchDELETE = () => {
  const deleteData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/111', {
      method: 'DELETE',
    })
      .then(() => ToastAndroid.show('Record Deleted', ToastAndroid.LONG))
      .catch(error => ToastAndroid.show(error, ToastAndroid.LONG));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fetch DELETE Data</Text>
      <View style={styles.button}>
        <Button title="Detete Data" color="brown" onPress={deleteData} />
      </View>
    </View>
  );
};

export default FetchDELETE;

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
});
