import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Login from './Login';
import Welcome from './Welcome';
const AuthFirebase = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  useEffect(() => {
    auth().onAuthStateChanged(activeUser => {
      setUser(activeUser);
      if (initializing) {
        setInitializing(false);
      }
    });
  }, [initializing]);
  if (initializing) {
    return null;
  }

  if (!user) {
    return <Login />;
  }

  return <Welcome email={user.email} />;
};

export default AuthFirebase;

const styles = StyleSheet.create({});
