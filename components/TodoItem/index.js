import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ task }) => {
  const { task: title, completed, id } = task || {};
  console.log(task);
  return (
    <View
      style={{
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: completed ? 'green' : 'black',
        borderWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      {title && (
        <Text style={{ width: '100%', textAlign: 'left', color: 'white' }}>
          {title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {},
});
export default TodoItem;
