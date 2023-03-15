import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
type dataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const FetchData = () => {
  const [data, setData] = useState<dataType[]>([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(posts => setData(posts));
  }, []);
  return (
    <View>
      <Text>{data[0].title}</Text>
    </View>
  );
};

export default FetchData;

const styles = StyleSheet.create({});
