import {StyleSheet, Text, View} from 'react-native';
import React, { PropsWithChildren } from 'react';
type propsType = PropsWithChildren<{
  msg: string;
  count:number;
//   children:JSX.Element;
}>;

const PropsFun = (props: propsType) => {
  return (
    <View>
      <Text>{props.msg}</Text>
      <Text>{props.count}</Text>
      {props.children}
    </View>
  );
};

export default PropsFun;

const styles = StyleSheet.create({});
