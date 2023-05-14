import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenType} from './StackScreen';
type propsType = NativeStackScreenProps<screenType, 'Splash'>;
const Splash = ({navigation}: propsType) => {
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      if (value != null) {
        navigation.replace('TodoTask');
      } else {
        navigation.replace('Login', {title: 'Login'});
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    setTimeout(getUser, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Splash;

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
});
