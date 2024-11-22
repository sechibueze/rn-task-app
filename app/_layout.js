import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen name='index' options={{ headerTitle: 'Home' }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
}
