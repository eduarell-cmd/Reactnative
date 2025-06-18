import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>Settings Screen</Text>
      <Text>Welcome to the main application view.</Text>
    </View>
  );
}