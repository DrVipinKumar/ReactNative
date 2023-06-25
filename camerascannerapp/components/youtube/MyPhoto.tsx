import {
  ActivityIndicator,
  Image,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const MyPhoto = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const cameraRef = useRef<Camera>(null);
  const [photoStatus, setPhotoStatus] = useState<boolean>(true);
  const [photoPath, setPhotoPath] = useState<string>();
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    if (newCameraPermission == null) {
      ToastAndroid.show('Camera is not ready', ToastAndroid.LONG);
    }
    if (newMicrophonePermission == null) {
      ToastAndroid.show('Mic is not ready', ToastAndroid.LONG);
    }
  };
  useEffect(() => {
    checkPermission();
  }, []);
  if (device == null) {
    return <ActivityIndicator />;
  }
  const takePhoto = async () => {
    if (cameraRef != null) {
      const photo = await cameraRef.current?.takePhoto({
        qualityPrioritization: 'quality',
      });
      setPhotoPath(photo?.path.toString());
      setPhotoStatus(true);
    }
  };
  const openPhoto = () => {
    setPhotoStatus(false);
  };
  return (
    <View style={styles.container}>
      {photoStatus ? (
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: 'file://' + photoPath}} />
          <TouchableOpacity style={styles.openButton} onPress={openPhoto}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          <TouchableOpacity style={styles.button} onPress={takePhoto} />
        </View>
      )}
    </View>
  );
};

export default MyPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    borderRadius: 30,
  },
  image: {
    width: '95%',
    height: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  openButton: {
    alignSelf: 'center',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
    color: 'white',
  },
});
