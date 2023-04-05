import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import StudentFS from '../youtube/firestore/StudentsFS';
type propsType = {
  email: string | null;
};
const {width} = Dimensions.get('window');
const Welcome = (props: propsType) => {
  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => ToastAndroid.show('User signed out!', ToastAndroid.LONG));
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome: {props.email}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={logoutUser}>
          <Text style={styles.button}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.realContainer}>
        <StudentFS />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
  },
  buttonContainer: {
    backgroundColor: 'brown',
    width: width - 300,
    alignSelf: 'flex-end',
    marginLeft: 40,
    borderRadius: 5,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  realContainer: {
    flex: 1,
  },
});
