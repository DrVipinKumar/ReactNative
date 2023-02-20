import { Dimensions, Image, Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import image39 from '../../assets/image39.jpg'
const {width,height}=Dimensions.get('screen')
const ImageEx = () => {
  return (
    <View style={styles.container}>
      {/* <Image
       style={styles.image}
       source={{uri:'https://source.unsplash.com/random'}}
      /> */}
      <ImageBackground
      style={styles.image}
      source={image39}
      />
       <Text style={styles.heading}>ImageEx</Text>
       <View style={styles.button}>
       <Button title="Image Background"/>
       </View>
      
    </View>
  )
}

export default ImageEx

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        position:'absolute',
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        position:'absolute',
       color:'white',
    },
    image:{
        width:width,
        height:height,
    }
})