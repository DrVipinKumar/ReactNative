import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Views = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heading...</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        deserunt et, a nostrum consequuntur enim officia atque reiciendis,
        similique aliquid quas. Voluptatibus officiis minus a quia aliquam?
        Reiciendis, iste eveniet.
      </Text>
    </View>
  );
};

export default Views;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontSize:30,
        fontWeight:"bold",
    },
    text:{
        fontSize:20,
        margin:10,
        textAlign:"justify",
    }
});
