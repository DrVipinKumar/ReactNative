import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const PostAPI = () => {
  const [sid, setSid] = useState<string>('');

  const deleteStudent = () => {
    if (sid.length > 0) {
      axios
        .delete(`http://10.0.2.2:8080/students/${sid}`)
        .then(() => ToastAndroid.show('Record Deleted', ToastAndroid.LONG))
        .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
    } else {
      ToastAndroid.show('Please insert SID', ToastAndroid.LONG);
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Delete Student Infromation</Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.inputtext}
          placeholder="Enter Student ID"
          placeholderTextColor="green"
          value={sid}
          onChangeText={value => setSid(value)}
        />
      </View>
      <View style={styles.button}>
        <Button title="Delete Student" color="brown" onPress={deleteStudent} />
      </View>
    </View>
  );
};

export default PostAPI;

const styles = StyleSheet.create({
  inputtext: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    fontSize: 20,
  },
  heading: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'brown',
  },
  button: {
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
  textContainer: {
    marginTop: 20,
  },
});
