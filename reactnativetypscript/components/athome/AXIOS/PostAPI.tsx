import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
type dataType = {
  sid: number;
  name: string;
  course: string;
};
const PostAPI = () => {
  const [sid, setSid] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const data: dataType = {
    sid: parseInt(sid, 10),
    name: name,
    course: course,
  };
  const addStudent = () => {
    axios
      .post('http://10.0.2.2:8080/students', data)
      .then(() => ToastAndroid.show('Record Added', ToastAndroid.LONG))
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
  };
  return (
    <View>
      <Text>Enter Student Information</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter SID"
        placeholderTextColor="green"
        value={sid}
        onChangeText={value => setSid(value)}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Enter name"
        placeholderTextColor="green"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Enter course"
        placeholderTextColor="green"
        value={course}
        onChangeText={value => setCourse(value)}
      />
      <Button title="Add" color="brown" onPress={addStudent} />
    </View>
  );
};

export default PostAPI;

const styles = StyleSheet.create({
  inputText: {
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
    borderRadius: 5,
    fontSize: 20,
    padding: 15,
  },
});
