import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // Alert.alert(
  //   'Message handled in the background!',
  //   JSON.stringify(remoteMessage),
  // );
  console.log(remoteMessage.notification);
  fireNotification(remoteMessage.notification);
});
const fireNotification = async (data: any) => {
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'Default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: data.title,
    body: data.message,
    android: {
      channelId,
      // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
};
const PushNotify = () => {
  const [token, setToken] = useState<string | undefined>('');
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      var tks = await messaging().getToken();
      if (tks != null) {
        setToken(tks);
        console.log(tks);
      }
    }
  }
  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      fireNotification(remoteMessage.notification);
      setToken(remoteMessage.notification?.body?.toString());
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text>{token}</Text>
      <TouchableOpacity onPress={fireNotification}>
        <Text style={styles.notify}>Fire Notification</Text>
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
  notify: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
