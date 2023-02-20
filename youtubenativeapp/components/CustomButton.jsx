import React from 'react'
import { Alert, Button, View } from 'react-native'
import MyButton from './MyButton'
const CustomButton = () => {
    const handlePress=()=>{
        Alert.alert("Information","This is custome button event");
    }
  return (
    <View>
        <Button title="Defaul Button" color="red"/>
        <MyButton title="Advance Button" color="red" onPress={handlePress}/>
    </View>
  )
}

export default CustomButton