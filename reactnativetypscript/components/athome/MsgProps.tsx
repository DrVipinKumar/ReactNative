import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type propsType = {
  msg: string;
  children:JSX.Element,
};
const MsgProps = (props: propsType) => {
  const {msg,children} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
      {children}
      <View style={styles.seprator}/>
    </View>
  );
};

export default MsgProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'verdana',
    fontWeight: 'bold',
  },
  seprator: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth + 1,
    width: '95%',
  },
});
