import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import uuid from 'react-native-uuid';
import {screenType} from './StackScreens';
import {firebase} from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
type propsType = NativeStackScreenProps<screenType, 'Login'>;
const Login = ({navigation, route}: propsType) => {
  const title = route.params?.title;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const setUser = async () => {
    var user = {
      user: username,
      pass: password,
    };
    try {
      await AsyncStorage.setItem('login', JSON.stringify(user));
    } catch (e) {
      ToastAndroid.show(
        'Not able to save username and password',
        ToastAndroid.LONG,
      );
    }
  };

  const loginUser = () => {
    if (title === 'Login') {
      firebase
        .app()
        .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
        .ref('todologin')
        .once('value')
        .then(data => {
          data.forEach(value => {
            if (
              value.val().username === username &&
              value.val().password === password
            ) {
              setUser();
              navigation.replace('TodoTask');
              return true;
            }
          });
        });
    } else {
      const uid = uuid.v4().toString();
      firebase
        .app()
        .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
        .ref(`todologin/${uid}`)
        .set({
          uid: uid,
          username: username,
          password: password,
        })
        .then(() => {
          setUser();
          navigation.replace('TodoTask');
        });
    }
  };
  const registerUser = () => {
    if (title === 'Login') {
      navigation.replace('Login', {title: 'Register'});
    } else {
      navigation.replace('Login', {title: 'Login'});
    }
  };
  return (
    <View style={styles.container}>
      {title === 'Login' ? (
        <Text style={styles.heading}>Login</Text>
      ) : (
        <Text style={styles.heading}>Register</Text>
      )}
      <View style={styles.inputContainer}>
        <View style={styles.userContainer}>
          <View style={styles.icon}>
            <Icon name="user" size={50} color="white" />
          </View>
          <TextInput
            style={styles.inputText}
            value={username}
            onChangeText={value => setUsername(value)}
            placeholder="Enter username"
            placeholderTextColor="green"
          />
        </View>
        <View style={styles.userContainer}>
          <View style={styles.icon}>
            <Icon name="eye" size={50} color="white" />
          </View>
          <TextInput
            style={styles.inputText}
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder="Enter password"
            placeholderTextColor="green"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={loginUser}>
          {title === 'Login' ? (
            <Text style={styles.loginButton}>Login</Text>
          ) : (
            <Text style={styles.loginButton}>Register</Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={registerUser}>
        {title === 'Login' ? (
          <Text style={styles.register}>Register, If not registered</Text>
        ) : (
          <Text style={styles.register}>Login, If registered already</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 2,
    width: '100%',
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'red',
    padding: 20,
  },
  userContainer: {
    flexDirection: 'row',
    width: '100%',
    margin: 10,
  },
  icon: {
    backgroundColor: 'green',
    padding: 10,
    borderBottomLeftRadius: 20,
    width: 80,
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    width: '72%',
    borderWidth: 1,
    borderTopRightRadius: 20,
  },
  loginButton: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    width: 150,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  register: {
    fontSize: 20,
    margin: 20,
    color: 'blue',
  },
});
