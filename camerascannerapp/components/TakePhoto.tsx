import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
const TakePhoto = () => {
  const cameraRef = useRef<Camera>(null);
  const [photoScreen, setPhotoScreen] = useState<boolean>(true);
  const [photo, setPhoto] = useState<string>();
  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    checkPermission();
  }, []);
  const takePhoto = async () => {
    if (cameraRef != null) {
      const photos = await cameraRef.current?.takePhoto({
        qualityPrioritization: 'quality',
      });
      setPhoto(photos?.path.toString());
      setPhotoScreen(true);
    }
  };
  const openPhoto = () => {
    setPhotoScreen(false);
  };
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    if (newCameraPermission == null) {
      ToastAndroid.show('Camera not found', ToastAndroid.LONG);
    }
    if (newMicrophonePermission == null) {
      ToastAndroid.show('Mic not found', ToastAndroid.LONG);
    }
  };
  if (device == null) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      {photoScreen ? (
        <View>
          {photo !== '' && (
            <Image style={styles.image} source={{uri: 'file://' + photo}} />
          )}
          <TouchableOpacity onPress={openPhoto}>
            <Text style={styles.openButton}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo
          />
          <TouchableOpacity style={styles.button} onPress={takePhoto} />
        </View>
      )}
    </View>
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '80%',
    marginTop: 40,
    marginBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  openButton: {
    backgroundColor: 'green',
    color: 'white',
    width: 200,
    height: 50,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    borderRadius: 10,
  },
});
