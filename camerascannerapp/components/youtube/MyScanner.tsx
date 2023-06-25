import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DocumentScanner from 'react-native-document-scanner-plugin';
const MyScanner = () => {
  const [scannedImage, setScannedImage] = useState<string>();

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument({
      croppedImageQuality: 100,
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

export default MyScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 30,
    width: 60,
    height: 60,
  },

  image: {
    width: '100%',
    height: '70%',
  },
});
