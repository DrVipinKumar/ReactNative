import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const {width} = Dimensions.get('window');
const Login = () => {
  const [title, setTitle] = useState<string>('Login');
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '703903927707-9f9jq7iv7kfvb23d4rmh52s9ofqr4gb2.apps.googleusercontent.com',
    });
  }, []);
  const gmailLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const data = await GoogleSignin.signIn();
      console.log(data);
      const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error + '', ToastAndroid.LONG);
    }
  };
  const userRegister = () => {
    if (title === 'Register') {
      if (email.length > 0 && pwd.length > 0) {
        auth()
          .createUserWithEmailAndPassword(email, pwd)
          .then(() => {
            ToastAndroid.show(
              'User account created & signed in!',
              ToastAndroid.LONG,
            );
          })
          .catch(error => {
            ToastAndroid.show(error.message, ToastAndroid.LONG);
          });
      } else {
        ToastAndroid.show('Enter Email/Password', ToastAndroid.LONG);
      }
    } else {
      if (email.length > 0 && pwd.length > 0) {
        auth()
          .signInWithEmailAndPassword(email, pwd)
          .then(() => {
            ToastAndroid.show('User signed in!', ToastAndroid.LONG);
          })
          .catch(error => {
            ToastAndroid.show(error.message, ToastAndroid.LONG);
          });
      } else {
        ToastAndroid.show('Enter Email/Password', ToastAndroid.LONG);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {title === 'Login' ? 'Login' : 'Register'}
      </Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          placeholder="Email ID"
          placeholderTextColor="green"
          value={email}
          onChangeText={mail => setEmail(mail)}
        />
        <TextInput
          style={styles.text}
          placeholder="Password"
          placeholderTextColor="green"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          value={pwd}
          onChangeText={password => setPwd(password)}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={userRegister}>
        <Text style={styles.button}>
          {title === 'Login' ? 'Login' : 'Register'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerContainer}
        onPress={() => setTitle('Register')}>
        <Text style={styles.register}>Register here, if not Registered</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.gmailContainer}
          onPress={() =>
            gmailLogin().then(user =>
              ToastAndroid.show('Login Name:' + user?.user, ToastAndroid.LONG),
            )
          }>
          <Text style={styles.gmail}>Gmail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 2,
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: 'brown',
    width: width - 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  button: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  registerContainer: {
    width: width - 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  register: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
    padding: 10,
    borderBottomWidth: 1,
  },
  gmailContainer: {
    backgroundColor: 'blue',
    width: width - 300,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  gmail: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
});
