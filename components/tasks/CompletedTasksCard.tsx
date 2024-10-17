import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


interface CompletedTasksCardProps {
    service:{
        id: string;
        date: string;
        propertyType: string;
        serviceType: string;
        total: number;
        servicePrice: number;
        servicePlacedDate: string;
        paymentInfoDate: string;
        serviceCompletedDate: string;
        name: string;
        phone: string;
        address: string;
        serviceRate: number;
        customerComment: string;
    }; // Use the Service type
  }
  
  const CompletedTasksCard: React.FC<CompletedTasksCardProps> = ({ service }) => {
    const [showDetails, setShowDetails] = useState(false);

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(service.serviceRate); // Number of full stars
        const hasHalfStar = service.serviceRate % 1 !== 0; // Check for half star

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesome key={i} name="star" size={20} color="#FFD700" />);
        }

        // Add half star if applicable
        if (hasHalfStar) {
            stars.push(<FontAwesome6 key="half-star" name="star-half-alt" size={20} color="#FFD700"  />);
        }

        // Add empty stars to complete 5-star rating
        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
            stars.push(<FontAwesome6 key={i} name="star" size={20} color="#FFD700" />);
        }

        return stars;
    };

    return (
        <View style={styles.cardContainer}>
            {/* Date outside the card */}
            <Text style={styles.date}>{service.date}</Text>

            {/* Card with service details */}
            <View style={styles.card}>
                <Image source={require('../../assets/images/delivery-note.png')} style={styles.icon} />
                <Text style={styles.serviceId}>#{service.id}</Text>
                <Text style={styles.propertyType}>{service.propertyType}</Text>
                <View style={styles.PriceRow}>
                    <Text style={styles.serviceType}>{service.serviceType}</Text>
                    <Text style={styles.serviceType}>₱{service.servicePrice}</Text>
                </View>
                <View style={styles.PriceRow}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.total}>₱{service.total}</Text>
                </View>
              

                {showDetails && (
                    
                    <View style={styles.details}>
                          <View style={styles.separator} />
                        <View style={styles.icons}>
                            {/* Icon 1 with texts */}
                            <View style={styles.iconContainer}>
                                <Image source={require('../../assets/images/service-placed.png')} style={styles.icon} />
                                <View style={styles.iconSeparator} />
                                <Text style={styles.iconText}>Service Placed</Text>
                                <Text style={styles.serviceDateText}>{service.servicePlacedDate}</Text>
                            </View>

                            {/* Icon 2 with texts */}
                            <View style={styles.iconContainer}>
                                <Image source={require('../../assets/images/payment-info.png')} style={styles.icon} />
                                <View style={styles.iconSeparator} />
                                <Text style={styles.iconText}>Payment Info Confirmed</Text>
                                <Text style={styles.serviceDateText}>{service.paymentInfoDate}</Text>
                            </View>

                            {/* Icon 3 with texts */}
                            <View style={styles.iconContainer}>
                                <Image source={require('../../assets/images/service completed.png')} style={styles.icon} />
                                <View style={styles.iconSeparator} />
                                <Text style={styles.iconText}>Service Completed</Text>
                                <Text style={styles.serviceDateText}>{service.serviceCompletedDate}</Text>
                            </View>
                        </View>
                        <Text style={styles.name}>{service.name}</Text>
                        <View style={styles.DetailsRow}>
                            <FontAwesome6 name="square-phone" size={13} color="#000" style={styles.detailsicon} />
                            <Text style={styles.phone}>{service.phone}</Text>
                        </View>


                        <View style={styles.DetailsRow}>
                            <FontAwesome6 name="location-dot" size={13} color="#000" style={styles.detailsicon} />
                            <Text style={styles.address}>{service.address}</Text>
                        </View>
                        <Text style={styles.ratingText}>Your Service Rate:</Text>
                        <View style={styles.starsRow}>
                            {renderStars()}
                            <Text style={styles.ratingValue}>{service.serviceRate}</Text>
                        </View>
                        <Text style={styles.commentText}>Customer comment:</Text>
                        <Text style={styles.comment}>{service.customerComment}</Text>
                    </View>
                )}

                <TouchableOpacity
                   style={[
                    styles.button,
                    showDetails && styles.buttonToggled, // Apply toggled style when details are shown
                ]}
                    onPress={() => setShowDetails(!showDetails)}
                >
                    <Text style={[
                        styles.buttonText,
                        showDetails && styles.buttonTextToggled, // Change text color when toggled
                    ]}>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    PriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      separator: {
        height: 1,
        backgroundColor: '#e0e0e0', // You can adjust the color to your preference
        marginVertical: 10, 
    },


    cardContainer: {
        marginBottom: 20, // Spacing between cards
    },

    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#D9D9D9"
    },

    date: {
        fontSize: 15,
        color: '#1F1F1F',
        marginBottom: 5, // Space between date and the card
        marginLeft: 20,  // Align the date with the card's padding (adjust as needed)
    },
    serviceId: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: "#FF3B30"
    },
    propertyType: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    serviceType: {
        fontSize: 14,
        marginVertical: 5,
        color: '#808083',
    },
    total: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    details: {
        marginTop: 10,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    iconContainer: {
        alignItems: 'center', // Center the icon and texts vertically
        flexDirection: 'column', // Ensure the texts are placed below the icon
        flex: 1, // Ensure each icon container takes equal space
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 5, // Space between icon and text
    },
    DetailsRow: {
        flexDirection: 'row', // Icons and text are in a row
        alignItems: 'center', // Align items vertically
        marginVertical: 2, // Space between rows
    },

    starsRow: {
        flexDirection: 'row', // Icons and text are in a row
        alignItems: 'center', // Align items vertically
        marginVertical: 5, // Space between rows

    },
    ratingValue: {
        marginLeft: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 1
    },
    detailsicon: {
        marginRight: 5, // Space between the icon and text
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
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
        color: '#007AFF'
       
    },
    iconSeparator: {
        height: 2,
        backgroundColor: '#34C759', // Adjust color as needed
          alignSelf: 'stretch',
          marginHorizontal: 15,
          marginBottom: 5
    },
    serviceDateText: {
        fontSize: 8,
        color: 'grey',
    },
   
    ratingText: {
        marginTop: 10,
        fontSize: 16,
       
        fontWeight: '500',
    },
    comment: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#333',
        marginVertical: 5,
    },
    commentText:{
        marginTop: 10,
        fontSize: 16,
       
        fontWeight: '500',
    },
    button: {
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 5,
        width: 200,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#007AFF",
        alignSelf: "flex-end"
    },
    buttonText: {
        color: '#007AFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    buttonToggled: {
        borderColor: 'red', // Change border color to red when toggled
    },
    buttonTextToggled: {
        color: 'red', // Change text color to red when toggled
    },
});

export default CompletedTasksCard;