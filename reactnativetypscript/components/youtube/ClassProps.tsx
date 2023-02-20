import {Text, View} from 'react-native';
import React, {Component, PropsWithChildren} from 'react';
type propsType = PropsWithChildren<{
  msg: string;
  count: number;
  // children:JSX.Element;
}>;
type stateType = {
  count: number;
};
export class ClassProps extends Component<propsType, stateType> {
  state = {
    count: 100,
  };
  render() {
    return (
      <View>
        <Text>{this.props.msg}</Text>
        <Text>{this.props.count}</Text>
        <Text>{this.state.count}</Text>
        {this.props.children}
      </View>
    );
  }
}

export default ClassProps;
