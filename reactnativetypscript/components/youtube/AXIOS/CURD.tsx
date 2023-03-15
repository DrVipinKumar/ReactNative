import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {stackType} from './StackNav';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type propsType = NativeStackScreenProps<stackType, 'curd'>;
const CURD = (props: propsType) => {
  const {navigation} = props;
  const operations = (opid: number) => {
    switch (opid) {
      case 1:
        navigation.navigate('getapi');
        break;
      case 2:
        navigation.navigate('postapi');
        break;
      case 3:
        navigation.navigate('putapi');
        break;
      case 4:
        navigation.navigate('deleteapi');
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student CURD APP</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => operations(1)}>
          <Text style={styles.text}>Get Students</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => operations(2)}>
          <Text style={styles.text}>Insert Students</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => operations(3)}>
          <Text style={styles.text}>Update Students</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => operations(4)}>
          <Text style={styles.text}>Delete Students</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CURD;

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
  },
  buttons: {
    margin: 20,
  },
  text: {
    fontSize: 35,
    backgroundColor: 'brown',
    color: 'white',
    padding: 15,
    width: 350,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
});
