import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';




const FeedbackSection = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
                <Image
                    source={require('../../assets/images/feedback-icon.png')}
                    style={styles.icon}
                />
                <Text style={styles.title}>Customer Feedbacks</Text>
            </View>

            <View style={styles.feedbackContainer}>
                <View style={styles.feedbackBox}>
                 
                        <View style={styles.user}>
                            <View style={styles.profileIcon}>
                                <Text style={styles.profileInitial}>M</Text>
                            </View>
                            <Text style={styles.feedbackname}>Mike Enriquez</Text>
                        </View>

                        <View style={styles.reviewContainer}>
                            <Text style={[styles.reviewDate, styles.star]}>★</Text>
                            <Text style={styles.reviewDate}> 5 • Reviewed on Aug 29, 2024</Text>
                        </View>
                 
                    <Text style={styles.comment}>
                        Maayos siyang magtrabaho. on time siya dumating. malinis na malinis na kusina namin nice one!! :)
                    </Text>

                    {/* Pagination Dots */}
                    <View style={styles.pagination}>

                        <View style={styles.dot} />
                        <View style={[styles.dot, styles.activeDot]} />
                        <View style={styles.dot} />
                    </View>
                </View>



                <View style={styles.feedbackRatings}>
                    <View style={styles.ratingHeader}>
                        <Text style={styles.starIcon}>★</Text>
                        <Text style={styles.ratingValue}>4.6</Text>
                        <Text style={styles.reviewCount}>131 reviews</Text>
                    </View>

                    {/* Rating bars */}
                    {[
                        { label: '5 stars', percentage: 72.18 },
                        { label: '4 stars', percentage: 20.3 },
                        { label: '3 stars', percentage: 4.47 },
                        { label: '2 stars', percentage: 2.15 },
                        { label: '1 star', percentage: 1.15 },
                    ].map((item, index) => (
                        <View key={index} style={styles.ratingRow}>
                            <Text style={styles.starLabel}>{item.label}</Text>
                            <View style={styles.ratingBarBackground}>
                                <View style={[styles.ratingBarFill, { width: `${item.percentage}%` }]} />
                            </View>
                            <Text style={styles.percentageText}>{item.percentage}%</Text>
                        </View>
                    ))}
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },

    icon: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
    feedbackContainer: {
        flexDirection: "column",

    },


    feedbackBox: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#808083",
        borderRadius: 10
    },

    feedbackRatings: {
        padding: 10,
        backgroundColor: "#F1F1F1",
        marginTop: 10

    },

    user: {
        flexDirection: "row",
        alignItems: "center"
    },
    profileIcon: {
        backgroundColor: '#007AFF',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    profileInitial: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    feedbackname: {
        fontSize: 14,
        fontWeight: 'bold',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
    },

    reviewDate: {
        fontSize: 14, 
        color: '#000',
    },
    star: {
        fontSize: 18,
        color: '#FFD700'
    },
    comment: {
        fontSize: 14,
        color: '#888',
        marginTop: 20,
    },

    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#007AFF',
    },

    ratingHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: "center"
    },
    starIcon: {
        fontSize: 24,
        color: '#FFCC00',
        marginRight: 5,
    },
    ratingValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewCount: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    starLabel: {
        width: 60,
        fontSize: 14,
        color: '#333',
    },
    ratingBarBackground: {
        flex: 1,
        height: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    ratingBarFill: {
        height: 8,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    percentageText: {
        width: 50,
        fontSize: 12,
        color: '#333',
        textAlign: 'right',
    }
});

export default FeedbackSection;