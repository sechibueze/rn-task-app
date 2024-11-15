import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoError, setTodoError] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (!todo) {
      setTodoError('Todo Item is required');
      return;
    }

    let theTodo = {
      id: Date.now().toString(),
      task: todo,
      completed: false,
    };

    setTaskList((prevState) => [theTodo, ...prevState]);
    setTodo('');
  };
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          padding: 8,
        }}
      >
        <Image
          style={{ width: '100%', height: 70 }}
          source={require('./assets/splash.png')}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={styles.todoInput}
            value={todo}
            onChangeText={(text) => setTodo(text)}
            placeholder='What do you want to do?'
          />
          <TouchableOpacity
            onPress={addTask}
            style={{
              flex: 1,
              width: 50,
              height: 50,
              backgroundColor: '#444',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#f7f6f5', fontSize: 30 }}>+</Text>
          </TouchableOpacity>
          {/* <Button style={{ padding: 10, backgroundColor: 'green' }} title='+' /> */}
        </View>
      </View>

      {taskList.length > 0 ? (
        <FlatList
          data={taskList}
          renderItem={({ item }) => {
            return <TodoItem task={item} />;
          }}
          key={({ item }) => item.id}
        />
      ) : (
        <View>
          <Text>No task yet</Text>
        </View>
      )}

      {/* Create 10 tasks items and resnder it using FlatList */}
      {/* <Text style={{ color: 'red', backgroundColor: 'gray' }}>Hell World</Text>
      <Text style={styles.text}>Yet another styling</Text> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',

    width: '100%',
    marginTop: 65,
    backgroundColor: '#ccc',
  },
  todoInput: {
    width: '85%',
    borderWidth: 2,
    borderColor: 'green',

    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
    fontSize: 34,
  },
});
