import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type StatusIndicatorTypes = {
  status: string;
};

export default function StatusIndicator({ status }: StatusIndicatorTypes) {
  let color = "#FBCE50";

  switch (status) {
    case "pending":
      color = "##FBCE50";
      break;

    case "accepted":
      color = Colors.blue;
      break;

    case "ongoing":
      color = Colors.blue;
      break;

    case "completed":
      color = "#006400";
      break;

    case "cancelled":
      color = "#FF4500";
      break;
  }

  return (
    <>
      <Text style={styles.dot}>●</Text>
      <Text
        style={[styles.StatusBadge, { backgroundColor: color, color: "white" }]}
      >
        {status}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  StatusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  dot: {
    marginHorizontal: 8,
    fontSize: 6,
    color: "#000",
  },
});
