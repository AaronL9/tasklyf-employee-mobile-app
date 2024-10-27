import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const BookingsSection = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
                <Image
                    source={require('../../assets/images/manual-book.png')}
                    style={styles.icon}
                />
                <Text style={styles.title}>Bookings</Text>
            </View>
            <View style={styles.bookingsInfo}>
                <View style={styles.completedTasks}>
                    <View style={styles.taskCounts}>
                        <Text style={styles.taskCount}>6</Text>
                        <Text style={styles.taskCount}>4</Text>
                    </View>
                    <Text>Completed Tasks</Text>
                </View>
                <View style={styles.chartContainer}>
                    <PieChart
                        data={[
                            { name: 'Kitchen Cleaning', population: 35, color: '#007AFF', legendFontColor: '#333', legendFontSize: 8 },
                            { name: 'Bathroom Cleaning', population: 50, color: '#a8328d', legendFontColor: '#333', legendFontSize: 8 },
                            { name: 'Pest Control', population: 15, color: '#50C878', legendFontColor: '#333', legendFontSize: 8 },
                        ]}
                        width={screenWidth * 0.7}
                        height={120}
                        chartConfig={{
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="0"
                    />
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
    icon: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    bookingsInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#D1E3F6",
        paddingVertical: 20,
        borderRadius: 8,
    },
    completedTasks: {
        alignItems: 'center',
        padding: 2,
    },
    taskCount: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: "#FBCE50",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 10,
        color: "#fff",
        textAlign: 'center',
    },
    taskCounts: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    chartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
    },
});

export default BookingsSection;