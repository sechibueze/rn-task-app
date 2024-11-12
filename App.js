import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
const TODOS = [
  {
    id: '12',
    task: 'Go oto NIIT',
    completed: false,
  },
];
export default function App() {
  const [todo, setTodo] = useState('Add todo');
  return (
    <View style={styles.wrapper}>
      <View>
        <Image
          style={{ width: '100%', height: 200 }}
          source={require('./assets/splash.png')}
        />
        <TextInput
          style={styles.todo}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
      </View>

      {/* Create 10 tasks items and resnder it using FlatList */}
      <Text style={{ color: 'red', backgroundColor: 'gray' }}>Hell World</Text>
      <Text style={styles.text}>Yet another styling</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#ccc',
  },
  todo: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
    fontSize: 34,
  },
});
