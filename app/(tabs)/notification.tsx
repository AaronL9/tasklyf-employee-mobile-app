import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import BookingsScreen from "@/components/notification/BookingScreen";
import OthersScreen from "@/components/notification/OthersScreen";
import ChatRound from "@/components/svg/ChatRound";

export default function Notice() {
  const [activeTab, setActiveTab] = useState("Bookings");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity style={styles.icon}>
          <ChatRound color="black" />
        </TouchableOpacity>
      </View>

      {/* Custom Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Bookings" && styles.activeTab]}
          onPress={() => setActiveTab("Bookings")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Bookings" && styles.activeTabText,
            ]}
          >
            Bookings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Others" && styles.activeTab]}
          onPress={() => setActiveTab("Others")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Others" && styles.activeTabText,
            ]}
          >
            Others
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conditionally render the screen based on the active tab */}
      {activeTab === "Bookings" ? <BookingsScreen /> : <OthersScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: { fontSize: 24, fontWeight: "bold" },
  icon: { padding: 10 },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tab: {
    marginTop: 25,
    paddingVertical: 5,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#FBCE50",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
  },
  activeTabText: {
    color: "#FBCE50",
  },
});
