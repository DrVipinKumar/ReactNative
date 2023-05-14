import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  Alert.alert('Background FCM!', JSON.stringify(remoteMessage));
});

const PushNotify = () => {
  const [token, setToken] = useState<string>('');
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      setToken((await messaging().getToken()).toString());
      console.log(token);
    }
  };
  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('FCM Message', JSON.stringify(remoteMessage));
      fireNotification(remoteMessage.notification);
    });

    return unsubscribe;
  }, []);
  const fireNotification = async (message: any) => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default1',
      name: 'Channel1',
    });

    // Display a notification
    await notifee.displayNotification({
      title: message.title,
      body: message.body,
      android: {
        channelId,
        //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default1',
        },
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text>{token}</Text>
      <TouchableOpacity onPress={fireNotification}>
        <Text style={styles.button}>Fire Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PushNotify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
