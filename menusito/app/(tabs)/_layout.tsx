import { Tabs } from 'expo-router';
import { Home, Settings, User, Info } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs>
  <Tabs.Screen
    name="index"
    options={{
      title: "Home",
      tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
    }}
  />
  <Tabs.Screen
    name="settings"
    options={{
      title: "Settings",
      tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
    }}
  />
  <Tabs.Screen
    name="profile"
    options={{
      title: "Profile",
      tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
    }}
  />
  <Tabs.Screen
    name="about"
    options={{
      title: "About",
      tabBarIcon: ({ color, size }) => <Info color={color} size={size} />,
    }}
  />
</Tabs>
  );
}