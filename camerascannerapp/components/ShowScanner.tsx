import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import {useState} from 'react';
const ShowScanner = () => {
  const [scannedImage, setScannedImage] = useState<string>();

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument({
      croppedImageQuality: 100,
      letUserAdjustCrop: true,
    });

    // get back an array with scanned image file paths
    if (scannedImages != null && scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };
  return (
    <View style={styles.container}>
      {scannedImage != null && (
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: scannedImage?.toString()}}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={scanDocument} />
    </View>
  );
};

export default ShowScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
