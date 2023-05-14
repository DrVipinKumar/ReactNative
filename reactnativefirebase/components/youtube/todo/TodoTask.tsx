import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
type propsType = {
  listItem: taskType;
};
type taskType = {
  sid: number;
  taskID: string;
  task: string;
  completed: boolean;
};
const ItemSeparator = () => <View style={styles.separator} />;
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenType} from './StackScreen';
type todoType = NativeStackScreenProps<screenType, 'TodoTask'>;
const TodoTask = ({navigation}: todoType) => {
  const [task, setTask] = useState<string>('');
  const [sid, setSid] = useState<number>(0);
  const [refersh, setRefersh] = useState<boolean>(false);
  const [allTask, setAllTask] = useState<taskType[]>([]);
  useEffect(() => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
      .ref('/tododata')
      .once('value')
      .then(data => {
        if (data.val() != null) {
          setAllTask(data.val());
          setSid(data.val().length);
        }
      });
  }, [refersh]);
  const getSid = async () => {
    await firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
      .ref('/tododata')
      .once('value')
      .then(data => {
        if (data.val() != null) {
          setSid(data.val().length);
        }
      });
  };
  const addTask = () => {
    getSid().then(() => {
      firebase
        .app()
        .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
        .ref(`/tododata/${sid}`)
        .set({
          sid: sid,
          taskID: uuid.v4().toString(),
          task: task,
          completed: false,
        })
        .then(() => {
          setTask('');
          setRefersh(!refersh);
          ToastAndroid.show('Task Inserted', ToastAndroid.LONG);
        });
    });
  };
  const deleteAll = () => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
      .ref('/tododata')
      .remove()
      .then(() => {
        setAllTask([]);
        setRefersh(!refersh);
        ToastAndroid.show('All Task Deleted', ToastAndroid.LONG);
      });
  };
  const deleteTask = (ssid: number) => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
      .ref(`/tododata/${ssid}`)
      .remove()
      .then(() => {
        setRefersh(!refersh);
        ToastAndroid.show('Task Deleted', ToastAndroid.LONG);
      });
  };
  const toggleTask = (listItem: taskType) => {
    firebase
      .app()
      .database('https://firbasereactnative-default-rtdb.firebaseio.com/')
      .ref(`/tododata/${listItem.sid}`)
      .update({
        completed: !listItem.completed,
      })
      .then(() => {
        setRefersh(!refersh);
        ToastAndroid.show('Task updated', ToastAndroid.LONG);
      });
  };
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('login');
      navigation.replace('Login', {title: 'Login'});
    } catch (e) {
      // remove error
    }
  };
  const ListItem = ({listItem}: propsType) => {
    return (
      <View style={styles.listContainer}>
        <Text
          style={[
            styles.listText,
            listItem.completed
              ? {
                  textDecorationLine: 'line-through',
                }
              : {},
          ]}>
          {listItem.task}
        </Text>
        <View>
          {listItem.completed ? (
            <TouchableOpacity onPress={() => toggleTask(listItem)}>
              <Icon name="check-box" size={30} color="red" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => toggleTask(listItem)}>
              <Icon name="check-box-outline-blank" size={30} color="red" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => deleteTask(listItem.sid)}>
            <Icon name="delete" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Todo App</Text>
        <View style={styles.icons}>
          <Icon name="delete" size={30} color="red" onPress={deleteAll} />
          <Icons
            name="user-times"
            size={30}
            color="green"
            style={styles.logoutIcons}
            onPress={logout}
          />
        </View>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={allTask.filter(item => item != null)}
          keyExtractor={item => item.taskID}
          renderItem={({item}) => <ListItem listItem={item} />}
          ItemSeparatorComponent={() => <ItemSeparator />}
          extraData={refersh}
        />
      </View>
      <View style={styles.footer}>
        <TextInput
          onSubmitEditing={() => addTask()}
          value={task}
          onChangeText={newTask => setTask(newTask)}
          style={styles.inputText}
          placeholder="Add Task"
          placeholderTextColor="red"
        />
        <TouchableOpacity style={styles.addTask} onPress={addTask}>
          <Icon name="add" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoTask;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'green',
    height: 2,
    margin: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  logoutIcons: {
    marginLeft: 10,
  },
  listText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  listContainer: {
    flexDirection: 'row',
    margin: 10,
    elevation: 60,
    justifyContent: 'space-between',
  },
  flatlist: {flex: 5},
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  inputText: {
    borderWidth: 1,
    width: '83%',
    borderRadius: 10,
    borderColor: 'green',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  addTask: {
    backgroundColor: 'green',
    borderRadius: 60,
    marginLeft: 10,
  },
});
