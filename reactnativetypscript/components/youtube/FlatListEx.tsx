import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
type dataType = {
  id: string;
  title: string;
};
const DATA = [
  {id: '1', title: 'First Item'},
  {id: '2', title: 'Second Item'},
  {id: '3', title: 'Third Item'},
  {id: '4', title: 'Fourth Item'},
  {id: '5', title: 'Fifth Item'},
  {id: '6', title: 'Sixth Item'},
  {id: '7', title: 'Seventh Item'},
  {id: '8', title: 'Eighth Item'},
  {id: '9', title: 'Ninth Item'},
];
const FlatListEx = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const selectedList = (item: dataType) => {
    setSelectedId(item.id);
    Alert.alert(item.title);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FlatList Example</Text>
      <View style={styles.flatlist}>
        <FlatList
          data={DATA}
          keyExtractor={(item: dataType) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => selectedList(item)}>
              <View
                style={[
                  styles.itemTitle,
                  {
                    backgroundColor:
                      item.id === selectedId ? '#6e3b6e' : '#f9c2ff',
                  },
                ]}>
                <Text
                  style={[
                    styles.title,
                    {color: item.id === selectedId ? 'white' : 'black'},
                  ]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          extraData={selectedId}
        />
      </View>
    </View>
  );
};

export default FlatListEx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  flatlist: {
    marginTop: 20,
  },
  itemTitle: {
    width: 360,
    marginBottom: 4,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    padding: 15,
  },
});
