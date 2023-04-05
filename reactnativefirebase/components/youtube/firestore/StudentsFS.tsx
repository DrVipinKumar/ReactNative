import {
  ActivityIndicator,
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
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
const {width} = Dimensions.get('window');
const StudentFS = () => {
  const [sid, setSid] = useState<string>('');
  const [sname, setSname] = useState<string>('');
  const [scourse, setScourse] = useState<string>('');
  const [sbranch, setSbranch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [dataInfo, setDataInfo] = useState<
    FirebaseFirestoreTypes.DocumentData[]
  >([]);
  const deleteInfo = () => {
    if (sid.length > 0) {
      firestore()
        .collection('Students')
        .doc(sid)
        .delete()
        .then(() => {
          ToastAndroid.show('Record Deleted', ToastAndroid.LONG);
        });
    } else {
      ToastAndroid.show('Please insert SID', ToastAndroid.LONG);
    }
  };
  const getStudents = () => {
    if (sid.length > 0) {
      firestore()
        .collection('Students')
        .doc(sid)
        .get()
        .then(documentSnapshot => {
          var data: FirebaseFirestoreTypes.DocumentData | undefined = {};
          if (documentSnapshot.exists) {
            //setSname(documentSnapshot.data().sname);
            data = documentSnapshot.data();
            setSname(data?.sname);
            setScourse(data?.scourse);
            setSbranch(data?.sbranch);
          } else {
            ToastAndroid.show('Record not Found', ToastAndroid.LONG);
          }
        });
    } else {
      ToastAndroid.show('Please insert SID', ToastAndroid.LONG);
    }
  };
  const updateInfo = () => {
    if (
      sid.length > 0 &&
      sname.length > 0 &&
      scourse.length > 0 &&
      sbranch.length > 0
    ) {
      firestore()
        .collection('Students')
        .doc(sid)
        .update({
          sid: sid,
          sname: sname,
          scourse: scourse,
          sbranch: sbranch,
        })
        .then(() => {
          ToastAndroid.show('Record Updated', ToastAndroid.LONG);
        });
    } else {
      ToastAndroid.show('Please insert information', ToastAndroid.LONG);
    }
  };
  const readInfo = () => {
    setLoading(true);
    firestore()
      .collection('Students')
      .get()
      .then(querySnapshot => {
        const data: any = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push(documentSnapshot.data());
        });
        setDataInfo(data);
        setLoading(false);
      });
  };
  const insertInfo = () => {
    if (
      sid.length > 0 &&
      sname.length > 0 &&
      scourse.length > 0 &&
      sbranch.length > 0
    ) {
      firestore()
        .collection('Students')
        .doc(sid)
        .set({
          sid: sid,
          sname: sname,
          scourse: scourse,
          sbranch: sbranch,
        })
        .then(() => {
          ToastAndroid.show('Record Inserted', ToastAndroid.LONG);
        });
    } else {
      ToastAndroid.show('Please insert information', ToastAndroid.LONG);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <Text style={styles.mainHeading}>Firestore Database</Text>
        <View>
          <TextInput
            onSubmitEditing={() => getStudents()}
            style={styles.textInput}
            placeholder="Enter SID"
            placeholderTextColor="#8F43EE"
            value={sid}
            onChangeText={value => setSid(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Student Name"
            placeholderTextColor="#8F43EE"
            value={sname}
            onChangeText={value => setSname(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Student Course"
            placeholderTextColor="#8F43EE"
            value={scourse}
            onChangeText={value => setScourse(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Student Branch"
            placeholderTextColor="#8F43EE"
            value={sbranch}
            onChangeText={value => setSbranch(value)}
          />
        </View>
        <View style={styles.buttonOrder}>
          <TouchableOpacity style={styles.buttonContainer} onPress={insertInfo}>
            <Text style={styles.button}>Insert</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={readInfo}>
            <Text style={styles.button}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={updateInfo}>
            <Text style={styles.button}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={deleteInfo}>
            <Text style={styles.button}>Delete</Text>
          </TouchableOpacity>
        </View>
        {loading === true ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          <View>
            <View style={styles.list}>
              <Text style={styles.listCol}>SID</Text>
              <Text style={styles.listCol}>Name</Text>
              <Text style={styles.listCol}>Course</Text>
              <Text style={styles.listCol}>Branch</Text>
            </View>
            <FlatList
              scrollEnabled={false}
              data={dataInfo}
              keyExtractor={item => item.sid}
              renderItem={({item}) => (
                <View style={styles.rowLine}>
                  <Text style={styles.rowCol}>{item.sid}</Text>
                  <Text style={styles.rowCol}>{item.sname}</Text>
                  <Text style={styles.rowCol}>{item.scourse}</Text>
                  <Text style={styles.rowCol}>{item.sbranch}</Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default StudentFS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    marginTop: 40,
  },
  list: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 10,
  },
  rowLine: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 10,
  },
  listCol: {
    marginLeft: 15,
    marginRight: 22,
    fontSize: 22,
    fontWeight: 'bold',
  },
  rowCol: {
    marginLeft: 16,
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainHeading: {
    fontSize: 30,
    textAlign: 'center',
    color: '#8F43EE',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    width: 260,
    marginTop: 20,
    alignSelf: 'center',
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
    borderColor: '#8F43EE',
    margin: 10,
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: '#8F43EE',
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
