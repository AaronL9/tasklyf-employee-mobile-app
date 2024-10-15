import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

import Home from "@/components/svg/Home";
import TaskList from "@/components/svg/TaskList";
import Bell from "@/components/svg/Bell";
import Profile from "@/components/svg/Profile";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors["seoncdary-grey"],
        tabBarStyle: { height: 70 },
        tabBarItemStyle: { paddingVertical: 10 },
        tabBarLabelStyle: { fontFamily: "Poppins-Medium" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />

      <Tabs.Screen
        name="task"
        options={{
          title: "Task",
          tabBarLabel: "Task",
          tabBarIcon: ({ color }) => <TaskList color={color} />,
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarLabel: "Notice",
          tabBarIcon: ({ color }) => <Bell color={color} withFill />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Profile color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
