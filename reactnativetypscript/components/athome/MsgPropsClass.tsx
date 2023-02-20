import {Text, View, StyleSheet, Button, Switch} from 'react-native';
import React, {Component, PropsWithChildren} from 'react';

type propsType = PropsWithChildren<{
  msg: string;
}>;
type stateType = {
  count: number;
};

export class MsgPropsClass extends Component<propsType, stateType> {
  state = {
    count: 0,
    isEnabled: false,
  };
  handleCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Message:{this.props.msg}</Text>
        <View style={styles.seprator} />
        <Text style={styles.text}>Counter: {this.state.count}</Text>
        <Button
          title="Counter"
          color="green"
          onPress={this.handleCounter}
          disabled={this.state.isEnabled}
        />
        <Switch
          trackColor={{true: 'orange', false: 'pink'}}
          thumbColor={this.state.isEnabled ? 'green' : 'red'}
          onValueChange={() => {
            const state = this.state;
            state.isEnabled = !state.isEnabled;
            this.setState(state);
          }}
          value={this.state.isEnabled}
        />
        <View style={styles.seprator} />
        {this.props.children}
      </View>
    );
  }
}

export default MsgPropsClass;
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
