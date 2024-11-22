import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Link href={'/'}>Go back</Link>
    </View>
  );
};

export default Login;
