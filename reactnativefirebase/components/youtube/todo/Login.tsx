import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '@react-native-firebase/database';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenType} from './StackScreen';
type propsType = NativeStackScreenProps<screenType, 'Login'>;

const Login = ({navigation, route}: propsType) => {
  const title = route.params?.title;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [check, setCheck] = useState<boolean | null>(null);

  const setUser = async () => {
    const login = {
      username: username,
      password: password,
    };
    try {
      await AsyncStorage.setItem('login', JSON.stringify(login));
    } catch (e) {
      // saving error
    }
  };
  const loginUser = () => {
    if (username !== '' && password !== '') {
      if (title === 'Login') {
        firebase
          .app()
          .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
          .ref('/todologin')
          .once('value')
          .then(data => {
            data.forEach(value => {
              if (
                value.val().username === username &&
                value.val().password === password
              ) {
                setUser();
                navigation.replace('TodoTask');
                setCheck(true);
                return true;
              }
            });
            setCheck(false);
          });
      } else {
        let uid = uuid.v4().toString();
        firebase
          .app()
          .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
          .ref(`/todologin/${uid}`)
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
    } else {
      ToastAndroid.show(
        'Please enter username and password!',
        ToastAndroid.LONG,
      );
    }
  };
  useEffect(() => {
    if (check === false) {
      ToastAndroid.show('Wrong username and password!', ToastAndroid.LONG);
    }
  }, [check]);
  const registerUser = () => {
    if (title === 'Login') {
      navigation.replace('Login', {title: 'Register'});
    } else {
      navigation.replace('Login', {title: 'Login'});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {title === 'Login' ? 'Login' : 'Register'}
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Icon
              style={styles.iconstyle}
              name="user"
              size={60}
              color="white"
            />
          </View>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={value => setUsername(value)}
            placeholder="Enter username"
            placeholderTextColor="green"
          />
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Icon style={styles.iconstyle} name="eye" size={60} color="white" />
          </View>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder="Enter password"
            placeholderTextColor="green"
          />
        </View>

        <TouchableOpacity onPress={loginUser}>
          <Text style={styles.login}>
            {title === 'Login' ? 'Login' : 'Register'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={registerUser}>
        {title === 'Login' ? (
          <Text style={styles.register}>Register, if not registered</Text>
        ) : (
          <Text style={styles.register}>Login, if registered</Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: 'red',
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    width: '80%',
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderTopRightRadius: 30,
    height: 80,
  },
  icon: {
    backgroundColor: 'green',
    width: '20%',
    height: 80,
    borderBottomLeftRadius: 30,
  },
  iconstyle: {
    marginTop: 10,
    alignSelf: 'center',
  },
  login: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'green',
    width: 150,
    padding: 10,
    color: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    margin: 10,
  },
  register: {
    color: 'blue',
    marginTop: 20,
    fontSize: 20,
  },
});
