import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import Toast from 'react-native-simple-toast'
const ButtonEx = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  //     const [count,setCount]=useState<number>(0);
  //   const counter =()=>{
  //         setCount((prevCount)=>prevCount+1);
  //         setCount((prevCount)=>prevCount+1);
  //         setCount((prevCount)=>prevCount+1);

  //   }
  const [title, setTitle] = useState<string>('');
  const [msg, setMsg] = useState('');
  // const handlePress = (ftitle: string, fmsg: string) => {
  //   //ToastAndroid.showWithGravity(ftitle + '' + fmsg, ToastAndroid.SHORT,ToastAndroid.TOP);
  //   ToastAndroid.showWithGravityAndOffset(
  //     'A wild toast appeared!',
  //     ToastAndroid.LONG,
  //     ToastAndroid.TOP,
  //     250,
  //     50,
  //   );
   // //Alert.alert(title, msg);
    // if (ftitle === '' && fmsg === '') {
    //   Alert.alert('Error!', 'Message not assigned');
    // } else {
    //   Alert.alert(ftitle, fmsg);
    // }
  //};
    const showToast = () => {
      ToastAndroid.show('Simple Toast', ToastAndroid.SHORT);
      
    };
    const showToastWithGravity = () => {
      ToastAndroid.showWithGravity('Toast with Gravity', ToastAndroid.SHORT,ToastAndroid.CENTER);
    };
    const showToastWithGravityOffset = () => {
      ToastAndroid.showWithGravityAndOffset('Toast with Gravity and Offset', ToastAndroid.LONG,ToastAndroid.TOP,100,100);
    };
   
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Show Toast"
          color="green"
          onPress={showToast}
          disabled={isEnabled}
        />
        <Button
          title="Show Toast Gravity"
          color="green"
          onPress={showToastWithGravity}
          disabled={isEnabled}
        />
        <Button
          title="Show Toast Gravity with Offset"
          color="green"
          onPress={showToastWithGravityOffset}
          disabled={isEnabled}
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter title"
          placeholderTextColor="green"
          value={title}
          onChangeText={newValue => setTitle(newValue)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter message"
          placeholderTextColor="green"
          value={msg}
          onChangeText={newValue => setMsg(newValue)}
        />
      </View>
      <View style={styles.seprator} />
      <Switch
        trackColor={{true: 'orange', false: 'pink'}}
        thumbColor={isEnabled ? 'green' : 'red'}
        onValueChange={() => setIsEnabled(prev => !prev)}
        value={isEnabled}
      />
    </View>
  );
};

export default ButtonEx;

const styles = StyleSheet.create({
  button: {
    width: 200,
    margin: 20,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    textAlign: 'center',
    fontSize: 30,
  },
  textContainer: {
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    margin: 5,
    borderColor: 'green',
    fontSize: 20,
    padding: 10,
    width: 370,
  },
  seprator: {
    margin: 20,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth + 2,
    width: '95%',
    alignSelf: 'center',
  },
});
