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
//var _ = require('lodash');
type dataType = {
  sid: string;
  sname: string;
  scourse: string;
  sbranch: string;
};
const {width} = Dimensions.get('window');
const InsertRL = () => {
  const [sid, setSid] = useState<string>('');
  const [sname, setSname] = useState<string>('');
  const [scourse, setScourse] = useState<string>('');
  const [sbranch, setSbranch] = useState<string>('');
  const [dataInfo, setDataInfo] = useState<dataType[]>([]);
  const deleteInfo = () => {
    if (sid.length > 0) {
      firebase
        .app()
        .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
        .ref(`/students/${sid}`)
        .remove();
      setSid('');
      setSname('');
      setScourse('');
      setSbranch('');
    } else {
      ToastAndroid.show('Please pass SID', ToastAndroid.LONG);
    }
  };
  const getStudent = () => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
      .ref(`/students/${sid}`)
      .once('value', data => {
        setSname(data.val().sname);
        setScourse(data.val().scourse);
        setSbranch(data.val().sbranch);
      });
  };
  const displayInfo = () => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
      .ref('/students')
      .on('value', data => {
        setDataInfo(data.val());
      });
  };
  const updateInfo = () => {
    if (
      sid.length > 0 &&
      sname.length > 0 &&
      scourse.length > 0 &&
      sbranch.length > 0
    ) {
      firebase
        .app()
        .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
        .ref(`/students/${sid}`)
        .update({
          sid: sid,
          sname: sname,
          scourse: scourse,
          sbranch: sbranch,
        })
        .then(() => ToastAndroid.show('Record Updated', ToastAndroid.LONG));
    } else {
      ToastAndroid.show('Please insert information', ToastAndroid.LONG);
    }
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
        .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
        .ref(`/students/${sid}`)
        .set({
          sid: sid,
          sname: sname,
          scourse: scourse,
          sbranch: sbranch,
        })
        .then(() => ToastAndroid.show('Record Inserted', ToastAndroid.LONG));
    } else {
      ToastAndroid.show('Please insert information', ToastAndroid.LONG);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text style={styles.mainHeading}>Firebase Realtime Database</Text>
        <View>
          <TextInput
            onSubmitEditing={() => getStudent()}
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
            onPress={displayInfo}>
            <Text style={styles.button}>Display</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={updateInfo}>
            <Text style={styles.button}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={deleteInfo}>
            <Text style={styles.button}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.rowLine}>
            <Text style={styles.heading}>SID</Text>
            <Text style={styles.heading}>Name</Text>
            <Text style={styles.heading}>Course</Text>
            <Text style={styles.heading}>Branch</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={dataInfo.filter(item => item !== null)}
            keyExtractor={item => item.sid}
            renderItem={({item}) => (
              <View style={styles.rowLine}>
                <Text style={styles.headingText}>{item.sid}</Text>
                <Text style={styles.headingText}>{item.sname}</Text>
                <Text style={styles.headingText}>{item.scourse}</Text>
                <Text style={styles.headingText}>{item.sbranch}</Text>
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
  rowLine: {
    flexDirection: 'row',
    margin: 10,
    //  justifyContent: 'center',
  },
  mainHeading: {
    fontSize: 25,
    textAlign: 'center',
    color: 'brown',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 25,
    marginRight: 25,
  },
  headingText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 32,
    marginRight: 20,
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
    width: width - 320,
    alignSelf: 'flex-start',
    marginLeft: 10,
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
