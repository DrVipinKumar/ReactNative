import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {
    const {navigation}=props;
    const [userData,setUserData]=useState([{name:"vipin",pwd:"classes"}]);
    const [disableLogin,setDisablelogin]=useState(false);
    const [heading,setHeading]=useState("Login");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=()=>{
       const index =userData.findIndex((user)=>{
        if (user.name===username && user.pwd===password){
          return true
        }
      });
      if(index!=-1){
           navigation.push("Welcome",{name:username});
      } else {
        Alert.alert("Warning!","Username or Password is wrong!");
      }
    }
    const handleRegister=()=>{
          if(heading==="Login"){
            setHeading("Register");
            setDisablelogin(true);
          } else {
            setHeading("Login");
            setUserData([...userData,{name:username,pwd:password}]);
            setDisablelogin(false);
          }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{heading}</Text>
      <TextInput
       style={styles.input}
       placeholder={"Enter Username"}
       placeholderTextColor="red"
       value={username}
       onChangeText={(newValue)=>setUsername(newValue)}
       />
        <TextInput
       style={styles.input}
       placeholder={"Enter Password"}
       placeholderTextColor="red"
       secureTextEntry
       value={password}
       onChangeText={(newValue)=>setPassword(newValue)}
       />
       <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Login" color="green" onPress={handleLogin}
        disabled={disableLogin}
        />
        </View>
        <View style={styles.button}>
        <Button title="Register" color="green" onPress={handleRegister}/>
        </View>
         
          
       </View>
    </View>
   
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",       
    }, 
    buttonContainer:{
     flexDirection:"row",
     justifyContent:"center",
     margin:10,
    },
    button:{
        width:150,
        padding:10,
    },
    header:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"green",
        marginBottom:10,
        }, 
        input:{
            margin:5,
            borderWidth:2,
            borderColor:"green",
            padding:10,
            fontSize:20,
            fontWeight:"bold",
            borderRadius:5,
        }

})