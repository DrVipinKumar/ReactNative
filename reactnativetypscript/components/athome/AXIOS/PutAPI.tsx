import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
type dataType = {
  sid: string;
  name: string;
  course: string;
};
const PutAPI = () => {
  const [sid, setSid] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [data, setData] = useState<dataType>({
    sid: sid,
    name: name,
    course: course,
  });

  const getStudent = () => {
    if (sid.length > 0) {
      axios
        .get(`http://10.0.2.2:8080/students/${sid}`)
        .then(response => {
          setName(response.data.name);
          setCourse(response.data.course);
        })
        .catch(error => console.log(error.message));
    } else {
      ToastAndroid.show('Please insert SID', ToastAndroid.LONG);
    }
  };
  const insertStudent = () => {
    if (sid.length > 0 && name.length > 0 && course.length > 0) {
      setData({
        sid: sid,
        name: name,
        course: course,
      });
      axios
        .put('http://10.0.2.2:8080/students', data)
        .then(response => {
          if (response.data.name) {
            ToastAndroid.show('Record Updated', ToastAndroid.LONG);
          }
        })
        .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG));
    } else {
      ToastAndroid.show('Please Insert All Information!', ToastAndroid.LONG);
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Insert Student Infromation</Text>
      <View style={styles.textContainer}>
        <TextInput
          onSubmitEditing={() => getStudent()}
          style={styles.inputtext}
          placeholder="Enter Student ID"
          placeholderTextColor="green"
          value={sid}
          onChangeText={value => setSid(value.trim())}
        />

        <TextInput
          style={styles.inputtext}
          placeholder="Enter Student Name"
          placeholderTextColor="green"
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          style={styles.inputtext}
          placeholder="Enter Student Course"
          placeholderTextColor="green"
          value={course}
          onChangeText={value => setCourse(value)}
        />
      </View>
      <View style={styles.button}>
        <Button title="Update Student" color="brown" onPress={insertStudent} />
      </View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default PutAPI;

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
