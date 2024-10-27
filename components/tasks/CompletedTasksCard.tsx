import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { BookingTypes } from "@/app/(tabs)/task";
import { formatDateLong } from "@/utils/DateFormatter";

interface CompletedTasksCardProps {
  service: BookingTypes;
}

const CompletedTasksCard: React.FC<CompletedTasksCardProps> = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(service.provider_id.avg_ratings ?? 5); // Number of full stars

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesome key={i} name="star" size={20} color="#FFD700" />);
    }

    return stars;
  };

  return (
    <View style={styles.cardContainer}>
      {/* Date outside the card */}
      <Text style={styles.date}>
        {formatDateLong(service.appointment_date)}
      </Text>

      {/* Card with service details */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/delivery-note.png")}
          style={styles.icon}
        />
        <Text style={styles.serviceId}>#{service.id}</Text>
        <View style={styles.PriceRow}>
          <Text style={styles.serviceType}>
            {service.provider_id.profession}
          </Text>
          <Text style={styles.serviceType}>₱{service.price}</Text>
        </View>
        <View style={styles.PriceRow}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>₱{service.price}</Text>
        </View>

        {showDetails && (
          <View style={styles.details}>
            <View style={styles.separator} />

            <Text style={styles.name}>
              {service.provider_id.first_name} {service.provider_id.last_name}
            </Text>
            <View style={styles.DetailsRow}>
              <FontAwesome6
                name="square-phone"
                size={13}
                color="#000"
                style={styles.detailsicon}
              />
              <Text style={styles.phone}>{service.provider_id.email}</Text>
            </View>

            <View style={styles.DetailsRow}>
              <FontAwesome6
                name="location-dot"
                size={13}
                color="#000"
                style={styles.detailsicon}
              />
              <Text style={styles.address}>{service.provider_id.address}</Text>
            </View>
            <Text style={styles.ratingText}>Your Service Rate:</Text>
            <View style={styles.starsRow}>
              {renderStars()}
              <Text style={styles.ratingValue}>{service.service}</Text>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={[
            styles.button,
            showDetails && styles.buttonToggled, // Apply toggled style when details are shown
          ]}
          onPress={() => setShowDetails(!showDetails)}
        >
          <Text
            style={[
              styles.buttonText,
              showDetails && styles.buttonTextToggled, // Change text color when toggled
            ]}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  separator: {
    height: 1,
    backgroundColor: "#e0e0e0", // You can adjust the color to your preference
    marginVertical: 10,
  },

  cardContainer: {
    marginBottom: 20, // Spacing between cards
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },

  date: {
    fontSize: 15,
    color: "#1F1F1F",
    marginBottom: 5, // Space between date and the card
    marginLeft: 20, // Align the date with the card's padding (adjust as needed)
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
    marginVertical: 5,
    color: "#808083",
  },
  total: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
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
    alignItems: "center", // Center the icon and texts vertically
    flexDirection: "column", // Ensure the texts are placed below the icon
    flex: 1, // Ensure each icon container takes equal space
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5, // Space between icon and text
  },
  DetailsRow: {
    flexDirection: "row", // Icons and text are in a row
    alignItems: "center", // Align items vertically
    marginVertical: 2, // Space between rows
  },

  starsRow: {
    flexDirection: "row", // Icons and text are in a row
    alignItems: "center", // Align items vertically
    marginVertical: 5, // Space between rows
  },
  ratingValue: {
    marginLeft: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
  },
  detailsicon: {
    marginRight: 5, // Space between the icon and text
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  phone: {
    fontSize: 15,
  },
  address: {
    fontSize: 15,
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

  ratingText: {
    marginTop: 10,
    fontSize: 16,

    fontWeight: "500",
  },
  comment: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#333",
    marginVertical: 5,
  },
  commentText: {
    marginTop: 10,
    fontSize: 16,

    fontWeight: "500",
  },
  button: {
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 5,
    width: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#007AFF",
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#007AFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  buttonToggled: {
    borderColor: "red", // Change border color to red when toggled
  },
  buttonTextToggled: {
    color: "red", // Change text color to red when toggled
  },
});

export default CompletedTasksCard;
