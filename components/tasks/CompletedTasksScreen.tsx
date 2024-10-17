import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import CompletedTasksCard from './CompletedTasksCard';


const services = [
    {
        id: '002493',
        date: 'Friday, 5 September 2024',
        propertyType: 'Apartment',
        serviceType: 'Kitchen Cleaning',
        total: 900,
        servicePrice: 400,
        servicePlacedDate: '9/4/24 | 12:00 PM',
        paymentInfoDate: '9/4/24 | 12:10 PM',
        serviceCompletedDate: '9/5/24 | 11:30 AM',
        name: 'Patrick Antonio',
        phone: '+63 987654321',
        address: '123 Dagupan City, Philippines',
        serviceRate: 3.0,
        customerComment: 'Maayos siyang magtrabaho. On time siya dumating. Malinis na malinis na kusina namin nice tone!! :)',
    },
    {
        id: '002492',
        date: 'Wednesday, 3 September 2024',
        propertyType: 'House',
        serviceType: 'Kitchen Cleaning',
        total: 400,
        servicePrice: 400,
        servicePlacedDate: '9/4/24 | 12:00 PM',
        paymentInfoDate: '9/4/24 | 12:10 PM',
        serviceCompletedDate: '9/5/24 | 11:30 AM',
        name: 'Patrick Antonio',
        phone: '+63 987654321',
        address: '123 Dagupan City, Philippines',
        serviceRate: 3.5,
        customerComment: 'Maayos siyang magtrabaho. On time siya dumating. Malinis na malinis na kusina namin nice tone!! :)',
    },
    {
        id: '002494',
        date: 'Wednesday, 3 September 2024',
        propertyType: 'House',
        serviceType: 'Kitchen Cleaning',
        total: 400,
        servicePrice: 400,
        servicePlacedDate: '9/4/24 | 12:00 PM',
        paymentInfoDate: '9/4/24 | 12:10 PM',
        serviceCompletedDate: '9/5/24 | 11:30 AM',
        name: 'Patrick Antonio',
        phone: '+63 987654321',
        address: '123 Dagupan City, Philippines',
        serviceRate: 1.5,
        customerComment: 'Maayos siyang magtrabaho. On time siya dumating. Malinis na malinis na kusina namin nice tone!! :)',
    },
    
];

const CompletedTasksScreen = () => (

    
    <View style={styles.container} >

    <View style={styles.topControls}>
        <TouchableOpacity style={styles.controlButton}>
            <Image
                source={require('../../assets/images/sort (1).png')} // Replace with your image URL
                style={styles.controlIcons}
            />
            <Text style={styles.controlButtonText}>Sort by</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
            <Image
                source={require('../../assets/images/horizontal-filter.png')} // Replace with your image URL
                style={styles.controlIcons} />
            <Text style={styles.controlButtonText}>Filter</Text>
        </TouchableOpacity>
    </View>

    <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CompletedTasksCard service={item} />}
    />
</View>


);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    topControls: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,
    },
    controlButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#808083"
    },
    controlButtonText: {
        color: 'black',
        fontWeight: 'bold',
        alignSelf: "center"
    },

    controlIcons: {
        marginRight: 10
    },
});

export default CompletedTasksScreen;