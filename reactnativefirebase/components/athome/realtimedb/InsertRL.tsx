import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '@react-native-firebase/database';
//lodash to convert object to array or vice versa
//npm i --save lodash
var _ = require('lodash');
const {width} = Dimensions.get('window');
type studentType = {
  sid: string;
  sname: string;
  scourse: string;
  sbranch: string;
};
type dataType = {
  sid: studentType;
};
const InsertRL = () => {
  const [sid, setSid] = useState<string>('');
  const [sname, setSname] = useState<string>('');
  const [scourse, setScourse] = useState<string>('');
  const [sbranch, setSbranch] = useState<string>('');
  const [dataInfo, setDataInfo] = useState<dataType[]>([]);
  const updateInfo = () => {
    if (
      sid.length > 0 &&
      sname.length > 0 &&
      scourse.length > 0 &&
      sbranch.length > 0
    ) {
      firebase
        .app()
        .database('https://firbasereactnative-default-rtdb.firebaseio.com')
        .ref(`/students/${sid}`)
        .update({
          sid: sid,
          sname: sname,
          scourse: scourse,
          sbranch: sbranch,
        })
        .then(() => {
          ToastAndroid.show('Record Updated', ToastAndroid.LONG);
        })
        .catch(error => ToastAndroid.show(error + '', ToastAndroid.LONG));
    } else {
      ToastAndroid.show('Please insert data', ToastAndroid.LONG);
    }
  };
  const getStudents = () => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com')
      .ref(`/students/${sid}`)
      .once('value')
      .then(data => {
        setSname(data.val().sname);
        setScourse(data.val().scourse);
        setSbranch(data.val().sbranch);
      });
  };
  const readInfo = () => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com')
      .ref('/students')
      .once('value')
      .then(data => {
        setDataInfo(data.val());
      });
  };
  const insertInfo = () => {
    if (
      sid.length > 0 &&
      sname.length > 0 &&
      scourse.length > 0 &&
      sbranch.length > 0
    ) {
      firebase
        .app()
        .database('https://firbasereactnative-default-rtdb.firebaseio.com')
        .ref(`/students/${sid}`)
        .set({
          sid: sid,
          sname: sname,
          scourse: scourse,
          sbranch: sbranch,
        })
        .then(() => {
          ToastAndroid.show('Record Inserted', ToastAndroid.LONG);
          setSid('');
          setSname('');
          setScourse('');
          setSbranch('');
        })
        .catch(error => ToastAndroid.show(error + '', ToastAndroid.LONG));
    } else {
      ToastAndroid.show('Please insert data', ToastAndroid.LONG);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text style={styles.heading}>Insert in Realtime Database</Text>
        <View>
          <TextInput
            onSubmitEditing={() => getStudents()}
            style={styles.textInput}
            placeholder="Enter SID"
            placeholderTextColor="green"
            value={sid}
            onChangeText={value => setSid(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Student Name"
            placeholderTextColor="green"
            value={sname}
            onChangeText={value => setSname(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Student Course"
            placeholderTextColor="green"
            value={scourse}
            onChangeText={value => setScourse(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Student Branch"
            placeholderTextColor="green"
            value={sbranch}
            onChangeText={value => setSbranch(value)}
          />
        </View>
        <View style={styles.buttonOrder}>
          <TouchableOpacity style={styles.buttonContainer} onPress={insertInfo}>
            <Text style={styles.button}>Insert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => readInfo()}>
            <Text style={styles.button}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => updateInfo()}>
            <Text style={styles.button}>Update</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            scrollEnabled={false}
            data={_.values(dataInfo)}
            keyExtractor={item => item.sid}
            renderItem={({item}) => (
              <View style={styles.list}>
                <Text>{item.sid}</Text>
                <Text>{item.sname}</Text>
                <Text>{item.scourse}</Text>
                <Text>{item.sbranch}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InsertRL;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    color: 'brown',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  textInput: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: 'orange',
    width: width - 300,
    alignSelf: 'flex-start',
    marginLeft: 20,
    borderRadius: 5,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
  buttonOrder: {
    flexDirection: 'row',
  },
  flatlist: {
    flex: 1,
  },
});
