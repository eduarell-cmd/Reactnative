import { FlatList, Text, View } from 'react-native';
import { useTimer } from '../context/TimerContext';

export default function LogScreen() {
  const { sessions } = useTimer();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Activity Log
      </Text>
      {sessions.length === 0 ? (
        <Text>No sessions recorded yet.</Text>
      ) : (
        <FlatList
          data={sessions}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>🟢 Start: {item.start}</Text>
              <Text>🔴 End: {item.end}</Text>
              <Text>⏱️ Duration: {item.duration}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
