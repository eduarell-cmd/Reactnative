import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useTimer } from '../context/TimerContext';

export default function HomeScreen() {
  const [time, setTime] = useState(new Date());
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const { addSession } = useTimer();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setElapsed(Date.now() - (startTime || Date.now()));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [running, startTime]);

  const start = () => {
    setStartTime(Date.now() - elapsed);
    setRunning(true);
  };

  const pause = () => {
    setRunning(false);
  };

  const reset = () => {
    if (elapsed > 0) {
      const duration = (elapsed / 1000).toFixed(1) + "s";
      const session = {
        start: new Date(startTime || 0).toLocaleTimeString(),
        end: new Date().toLocaleTimeString(),
        duration,
      };
      addSession(session);
    }
    setRunning(false);
    setElapsed(0);
    setStartTime(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 24 }}>🕓 {time.toLocaleTimeString()}</Text>
      <Text style={{ fontSize: 32, marginVertical: 20 }}>
        ⏱️ {(elapsed / 1000).toFixed(1)} s
      </Text>

      {!running ? (
        <Button title="Start" onPress={start} />
      ) : (
        <Button title="Pause" onPress={pause} />
      )}
      <View style={{ marginTop: 10 }}>
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
}
