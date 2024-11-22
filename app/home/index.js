import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home page</Text>
      <Link href='/login'>Login</Link>
    </View>
  );
};

export default Home;
