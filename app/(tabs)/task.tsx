import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import CompletedTasksScreen from "@/components/tasks/CompletedTasksScreen";
import ScheduledTasksCard from "@/components/tasks/ScheduledTasksCard";
import { supabase } from "@/utils/supabase";
import { Database } from "@/utils/database.types";

export type BookingTypes = Omit<
  Database["public"]["Tables"]["bookings"]["Row"],
  "provider_id" | "availability_id"
> & { provider_id: Database["public"]["Tables"]["providers"]["Row"] } & {
  availability_id: Database["public"]["Tables"]["availability"]["Row"];
};

export default function Tasks() {
  const [selectedTab, setSelectedTab] = useState("request"); // Manage selected tab state
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState<BookingTypes[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function getBookingData(status: string) {
    const arrayFilter = status === "accepted" ? [status, "ongoing"] : [status];

    try {
      setIsLoading(true);
      let { data: bookings, error } = await supabase
        .from("bookings")
        .select("*, provider_id (*), availability_id (*)")
        .in("status", arrayFilter);

      if (error) throw new Error(error.message);

      setBookings(bookings);
      // console.log(JSON.stringify(bookings, undefined, 2));
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getBookingData(selectedTab);
    setRefreshing(false);
  }, []);

  async function updateBookingStatus(id: string, status: string) {
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", id);

      if (error) throw new Error(error.message);
      getBookingData(selectedTab);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Function to render content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "request":
        return (
          <FlatList
            data={bookings}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ScheduledTasksCard
                updateBooking={updateBookingStatus}
                booking={item}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        );

      case "accepted":
        return (
          <FlatList
            data={bookings}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ScheduledTasksCard
                updateBooking={updateBookingStatus}
                booking={item}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        );

      case "completed":
        return <CompletedTasksScreen />;
    }
  };

  useEffect(() => {
    getBookingData(selectedTab);
  }, [selectedTab]);

  return (
    <View style={styles.container}>
      {/* Custom Tab Header */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "request" && styles.activeTab]}
          onPress={() => setSelectedTab("request")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "request" && styles.activeTabText,
            ]}
          >
            Requested
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "accepted" && styles.activeTab]}
          onPress={() => setSelectedTab("accepted")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "accepted" && styles.activeTabText,
            ]}
          >
            Scheduled
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "completed" && styles.activeTab]}
          onPress={() => setSelectedTab("completed")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "completed" && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {(isLoading || refreshing) && (
        <ActivityIndicator size="large" color="black" />
      )}
      {/* Content */}
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 40,
    backgroundColor: "#F2F2F2",
    padding: 5,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#F2F2F2", // Inactive tab color
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#FFC107", // Active tab color (yellow)
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
});
