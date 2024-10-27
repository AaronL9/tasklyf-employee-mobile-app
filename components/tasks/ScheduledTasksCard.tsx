import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ChatRound from "../svg/ChatRound";
import { BookingTypes } from "@/app/(tabs)/task";
import { formatDateLong } from "@/utils/DateFormatter";
import StatusIndicator from "../StatusIndicator";

interface CompletedTasksCardProps {
  schedule: {
    id: string;
    date: string;
    propertyType: string;
    serviceType: string;
    total: number;
    servicePrice: number;
    servicePlacedDate: string;
    paymentInfoDate: string;
    name: string;
    phone: string;
    address: string;
    status: string;
    paymentMethod: string;
    appointmentDate: String;
    appointmentTime: String;
  }; // Use the Service type
}

function ScheduledTasksCard({
  booking,
  updateBooking,
}: {
  booking: BookingTypes;
  updateBooking?: (id: string, status: string) => void;
}) {
  function renderButton() {
    if (!updateBooking) return;

    switch (booking.status) {
      case "request":
        return (
          <TouchableOpacity
            onPress={() => updateBooking(booking.id, "accepted")}
            style={styles.SendMessageButton}
          >
            <Text style={styles.sendMessageText}>Accept</Text>
          </TouchableOpacity>
        );

      case "accepted":
        return (
          <TouchableOpacity
            onPress={() => updateBooking(booking.id, "ongoing")}
            style={styles.SendMessageButton}
          >
            <Text style={styles.sendMessageText}>Start</Text>
          </TouchableOpacity>
        );

      case "ongoing":
        return (
          <TouchableOpacity
            onPress={() => updateBooking(booking.id, "completed")}
            style={styles.SendMessageButton}
          >
            <Text style={styles.sendMessageText}>Complete</Text>
          </TouchableOpacity>
        );
    }
  }

  return (
    <View style={styles.cardContainer}>
      {/* Date outside the card */}
      <View style={styles.DateContainer}>
        <Text style={styles.Date}>{formatDateLong(booking.created_at)}</Text>
        <StatusIndicator status={booking.status} />
      </View>

      {/* Card with service details */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/delivery-note.png")}
          style={styles.icon}
        />
        <Text style={styles.serviceId}>{booking.id}</Text>
        {/* <Text style={styles.propertyType}>{schedule.propertyType}</Text> */}
        <View style={styles.PriceRow}>
          <Text style={styles.serviceType}>{booking.service}</Text>
          <Text style={styles.serviceType}>₱{booking.price}</Text>
        </View>
        <View style={styles.PriceRow}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>₱{booking.price}</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.separator} />
          <Text style={styles.name}>
            {booking.provider_id.first_name} {booking.provider_id.last_name}
          </Text>
          <View style={styles.DetailsRow}>
            <FontAwesome6
              name="square-phone"
              size={13}
              color="#000"
              style={styles.detailsicon}
            />
            <Text style={styles.phone}>{booking.provider_id.email}</Text>
          </View>

          <View style={styles.DetailsRow}>
            <FontAwesome6
              name="location-dot"
              size={13}
              color="#000"
              style={styles.detailsicon}
            />
            <Text style={styles.address}>{booking.provider_id.address}</Text>
          </View>
          {/* <View style={styles.icons}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/images/service-placed.png")}
                style={styles.icon}
              />
              <View style={styles.iconSeparator} />
              <Text style={styles.iconText}>Service Placed</Text>
              <Text style={styles.serviceDateText}>
                {schedule.servicePlacedDate}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/images/payment-info.png")}
                style={styles.icon}
              />
              <View style={styles.iconSeparator} />
              <Text style={styles.iconText}>Payment Info Confirmed</Text>
              <Text style={styles.serviceDateText}>
                {schedule.paymentInfoDate}
              </Text>
            </View>
          </View> */}
          <View style={styles.DetailsRow}>
            <Text style={styles.PaymentMethodText}>Payment Method: </Text>

            {/* Change the Text to the image or icon of payment Method */}
            <Text>Gcash</Text>
          </View>
          <Text style={styles.AppointmentScheduleText}>
            Appointment Schedule:
          </Text>

          <View style={styles.DateRow}>
            <FontAwesome6 name="calendar" solid style={styles.DateIcon} />
            <Text style={styles.DateText}> : {booking.appointment_date}</Text>
            <FontAwesome6 name="clock" solid style={styles.DateIcon} />
            <Text style={styles.DateText}>
              {" "}
              : {booking.availability_id.start_time} -{" "}
              {booking.availability_id.end_time}
            </Text>
          </View>

          {/* <View style={styles.MapButton}>
            <Text>Map</Text>
            <FontAwesome6
              name="caret-up"
              size={20}
              color="#000"
              style={styles.detailsicon}
            />
          </View> */}

          {renderButton()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 3,
  },

  cardContainer: {
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },

  DateContainer: {
    flexDirection: "row",

    alignItems: "center",
    marginBottom: 5,
  },
  Date: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
  },
  dot: {
    marginHorizontal: 8,
    fontSize: 6,
    color: "#000",
  },
  StatusBadge: {
    backgroundColor: "#2196F3",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 10,
    fontWeight: "bold",
  },
  serviceId: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#FF3B30",
  },
  propertyType: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
  serviceType: {
    fontSize: 14,
    marginVertical: 3,
    color: "#808083",
  },
  total: {
    fontSize: 14,
    fontWeight: "bold",
  },
  details: {
    marginTop: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5, // Space between icon and text
  },
  DetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },

  detailsicon: {
    marginRight: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
  },
  phone: {
    fontSize: 14,
  },
  address: {
    fontSize: 14,
  },
  iconText: {
    fontSize: 7.5,
    fontWeight: "500",
    color: "#007AFF",
  },
  iconSeparator: {
    height: 2,
    backgroundColor: "#34C759", // Adjust color as needed
    alignSelf: "stretch",
    marginHorizontal: 15,
    marginBottom: 5,
  },
  serviceDateText: {
    fontSize: 8,
    color: "grey",
  },

  PaymentMethodText: {
    color: "#34C759",
    fontWeight: "500",
  },

  AppointmentScheduleText: {
    fontWeight: "500",
    marginTop: 6,
  },

  DateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  DateIcon: {
    color: "#007AFF",
  },

  DateText: {
    color: "#808083",
    marginRight: 5,
    fontSize: 12,
  },

  MapButton: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#BFBFBF",
    padding: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  SendMessageButton: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#007AFF",
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
  },

  sendMessageText: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold",
    alignSelf: "center",
  },

  chatIcon: {
    tintColor: "#fff",
  },
});

export default ScheduledTasksCard;
