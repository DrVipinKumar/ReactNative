import {Image, StyleSheet, Text, View, Dimensions, ImageBackground} from 'react-native';
import React from 'react';
import logo from '../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png';
const {width, height} = Dimensions.get('screen');
const ImageEx = () => {
  return (
    <View>
      {/* <Image
        style={styles.image}
        source={logo}
      /> */}
      <ImageBackground
        style={styles.imageBack}
        resizeMode="cover"
        source={{uri: 'https://source.unsplash.com/random'}}
      >
        <Text>Hello</Text>
        </ImageBackground>
      </View>
  );
};

export default ImageEx;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  imageBack: {
    flex:1,
    justifyContent:"center",
    width:width,
    height:200,
    
  },
});
