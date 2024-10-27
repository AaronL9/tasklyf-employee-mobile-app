import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const EarningSection = () => {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
            <Image
                    source={require('../../assets/images/coins-stack.png')}
                    style={styles.icon}
                />
                <Text style={styles.title}>Earnings</Text>
            </View>
            <View style={styles.Infocontainer}>
                <View style={styles.card}>
                    <Text style={styles.amountText}>₱ 4,594</Text>
                    <Text style={styles.labelText}>Total Earnings</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.amountText}>₱ 2,199</Text>
                    <Text style={styles.labelText}>Wallet Balance</Text>
                </View>
                <View style={styles.earningsContainer}>
                    <Text style={styles.earningsText}>Earnings this week:</Text>
                    <Text style={styles.dateText}>As of September 5, 2024, you accumulated a total of</Text>
                    <Text style={styles.totalText}>PHP 5,600.00!</Text>
                    <BarChart
                        data={{
                            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            datasets: [{ data: [1500, 0, 250, 2000, 750, 1000, 0] }]
                        }}
                        yAxisLabel="₱"  
                        yAxisSuffix=""  
                        width={screenWidth * 0.9}
                        height={220}
                        chartConfig={{
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            color: (opacity = 1) => `rgba(39, 174, 96, ${opacity})`,
                            barPercentage: 0.4,
                        }}
                        style={styles.chartStyle}
                        verticalLabelRotation={0}
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
    title: {
        fontSize: 20,
        fontWeight: '500',
    },

    icon: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
    Infocontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        backgroundColor: '#F1F1F1',
        borderRadius: 15,
        padding: 15,
        marginBottom: 16,
        alignItems: 'center',
        width: 200
    },
    amountText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: "#AF52DE",
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10
    },
    labelText: {
        fontSize: 16,
        color: '#555',
    },
    earningsContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginTop: 10,
    },
    earningsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    dateText: {
        fontSize: 14,
        color: '#777',
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00A300',
    },
    chartStyle: {
        marginVertical: 8,
        borderRadius: 16,
    },
});

export default EarningSection;